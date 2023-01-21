import './page-winners.styles.css';
import BaseComponent from '../base-component';
import Pagination from '../pagination/pagination';
// eslint-disable-next-line object-curly-newline
import { PageInfo, TableInfo, WinnersInfo, WinnerType } from './page-winners.types';
import { getCar, getWinners } from '../../controller/loader-functions';
import { CarType } from '../garage/race-track/race-track.types';
import Car from '../car/car';
import { PageLimit } from '../../controller/loader.types';
import eventEmitter from '../../utils/event-emitter';

export default class WinnersPage extends BaseComponent<'section'> {
  private totalWinners: number = 0;

  private totalWinnersElement: BaseComponent<'span'> | null = null;

  private currentPageStatus: PageInfo = {
    page: 1,
    limit: 10,
    sort: 'wins',
    order: 'ASC',
  };

  private totalPages: number = 0;

  private pagination!: Pagination;

  private winnersResults: HTMLTableElement | null = null;

  private winsTH: BaseComponent<'th'> | null = null;

  private timeTH: BaseComponent<'th'> | null = null;

  private winners: WinnerType[] = [];

  private winnersCars: CarType[] = [];

  private color: string = '';

  private rows: HTMLTableRowElement[] = [];

  private winnersInfo: TableInfo = {
    number: 0,
    car: undefined,
    name: '',
    wins: 0,
    time: 0,
  };

  private orderNum: number = 1;

  private winnersOnPage: WinnersInfo[] = [];

  constructor() {
    super('section', undefined, 'section winners');
    this.renderWinnersTable();
    this.fillWinnersPage();
    ['updateCar', 'deleteCar', 'isWinner'].forEach((event) => {
      eventEmitter.on(`${event}`, (): void => {
        this.updatePageViewState();
      });
    });
  }

  private renderWinnersTable = async (): Promise<void> => {
    const paginatWrapper: BaseComponent<'div'> = new BaseComponent('div', this.element, 'winners__pagination-wrapper');
    this.winnersResults = document.createElement('table');
    const resultsHead: HTMLTableSectionElement = this.winnersResults.createTHead();
    const resultsTr: HTMLTableRowElement = resultsHead.insertRow();
    const headings: string[] = ['n°', 'car', 'name', 'wins', 'time'];

    this.totalWinnersElement = new BaseComponent(
      'span',
      paginatWrapper.element,
      'winners__pagination_total-winners',
      `Winners: ${this.totalWinners}`,
    );
    this.pagination = new Pagination(paginatWrapper, 'winners', this.currentPageStatus, this.totalPages);

    this.winnersResults.classList.add('winners__results');

    this.element.append(this.winnersResults);
    this.insertHeading(headings, resultsTr);

    this.pagination.rightArrowBtn?.element.addEventListener('click', this.rightArrowBtnCallback);
    this.pagination.leftArrowBtn?.element.addEventListener('click', this.leftArrowBtnCallback);
  };

  private fillWinnersPage = async (): Promise<void> => {
    await this.retrieveData();
    this.createRows();
    this.updateTotalPagesData();
    this.updateTotalWinnersNum();
  };

  private retrieveData = async (): Promise<void> => {
    await getWinners(this.currentPageStatus).then((winners: PageLimit<WinnerType>) => {
      this.totalWinners = winners.total;
      this.winners = winners.data.slice();
    });
    // eslint-disable-next-line max-len
    this.winnersCars = (await Promise.all(this.winners.map((winner: WinnerType) => getCar(winner.id)))).slice();
    for (let i: number = 0; i < this.winners.length; i += 1) {
      this.winnersOnPage.push({
        ...this.winners[i],
        ...this.winnersCars[i],
        car: new Car(),
        number: this.orderNum,
      });
      this.orderNum += 1;
    }
  };

  private createRows(): void {
    this.winnersOnPage.forEach((winner: WinnersInfo) => {
      this.winnersInfo.wins = winner.wins;
      this.winnersInfo.time = winner.time;
      this.winnersInfo.name = winner.name;
      this.winnersInfo.car = winner.car;
      this.winnersInfo.number = winner.number;
      this.color = winner.color;
      this.insertWinnersInfo(this.winnersInfo);
    });
  }

  private insertHeading(headings: string[], parent: HTMLTableRowElement): void {
    for (let i: number = 0; i < headings.length; i += 1) {
      const heading: string = headings[i];
      let th: BaseComponent<'th'>;
      switch (heading) {
        case 'wins':
          this.winsTH = new BaseComponent('th', parent, `results__table_th-${heading} table__th`);
          this.winsTH.element.classList.add('sortable');
          this.winsTH.element.textContent = `${heading} ↑`;
          this.winsTH.element.addEventListener('click', this.winsSortCallback);
          break;
        case 'time':
          this.timeTH = new BaseComponent('th', parent, `results__table_th-${heading} table__th`);
          this.timeTH.element.classList.add('sortable');
          this.timeTH.element.textContent = `${heading} (s)`;
          this.timeTH.element.addEventListener('click', this.timeSortCallback);
          break;
        default:
          th = new BaseComponent('th', parent, `results__table_th-${heading} table__th`);
          th.element.textContent = heading;
      }
    }
  }

  private insertWinnersInfo(data: TableInfo): void {
    if (this.winnersResults) {
      const row: HTMLTableRowElement = this.winnersResults.insertRow();
      Object.values(data).forEach((value) => {
        const cell: HTMLTableCellElement = row.insertCell();
        cell.classList.add('table__cell');
        if (value instanceof Car) {
          value.appendSVG(cell);
          value.updateColor(this.color);
        } else if (value !== this.color) {
          cell.innerText = String(value);
        }
      });
    }
  }

  private rightArrowBtnCallback = (): void => {
    this.pagination.activateLeftArrowBtn();
    this.currentPageStatus.page += 1;
    this.pagination.updateCurrentPage(this.currentPageStatus.page);
    this.deleteRows();
    this.pagination.disableArrowsFirstLastPage(this.currentPageStatus.page);
  };

  private leftArrowBtnCallback = (): void => {
    this.pagination.activateRightArrowBtn();
    this.currentPageStatus.page -= 1;
    this.orderNum -= this.currentPageStatus.limit + this.winnersOnPage.length;
    this.pagination.updateCurrentPage(this.currentPageStatus.page);
    this.deleteRows();
    this.pagination.disableArrowsFirstLastPage(this.currentPageStatus.page);
  };

  private winsSortCallback = (): void => {
    this.currentPageStatus.sort = 'wins';
    this.changeSortingOrder();
    this.changeWinsSortingArrow();
    this.hideTimeSortingArrow();
    this.changeItemsOrder();
    this.deleteRows();
  };

  private timeSortCallback = (): void => {
    this.currentPageStatus.sort = 'time';
    this.changeSortingOrder();
    this.changeTimeSortingArrow();
    this.hideWinsSortingArrow();
    this.changeItemsOrder();
    this.deleteRows();
  };

  private updateTotalPagesData(): void {
    this.pagination.itemsPerPage = this.currentPageStatus.limit;
    this.totalPages = this.pagination.calculateTotalPages(this.totalWinners);
    this.pagination.updateTotalPages(this.totalPages);
    this.pagination.disableArrowsFirstLastPage(this.currentPageStatus.page);
  }

  // private updateWinnersNextPrevPage(): void {
  //   this.retrieveData();
  //   for (let i: number = 0; i < this.rows.length; i += 1) {
  //     Object.values(this.winnersOnPage[i]).forEach((value) => {
  //       this.rows[i].cells.item[] = String(value);
  //     });
  //   }
  // }

  private updateTotalWinnersNum(): void {
    if (this.totalWinnersElement) {
      this.totalWinnersElement.element.textContent = `Winners: ${this.totalWinners}`;
    }
  }

  private changeSortingOrder(): void {
    if (this.currentPageStatus.order === 'ASC') {
      this.currentPageStatus.order = 'DESC';
    } else if (this.currentPageStatus.order === 'DESC') {
      this.currentPageStatus.order = 'ASC';
    }
  }

  private changeItemsOrder(): void {
    if (this.currentPageStatus.page === 1) {
      this.orderNum = this.currentPageStatus.page;
    } else {
      this.orderNum = this.currentPageStatus.limit * (this.currentPageStatus.page - 1) + 1;
    }
  }

  private changeWinsSortingArrow(): void {
    if (this.winsTH) {
      if (this.currentPageStatus.order === 'ASC') {
        this.winsTH.element.textContent = 'wins ↑';
      } else if (this.currentPageStatus.order === 'DESC') {
        this.winsTH.element.textContent = 'wins ↓';
      }
    }
  }

  private changeTimeSortingArrow(): void {
    if (this.timeTH) {
      if (this.currentPageStatus.order === 'ASC') {
        this.timeTH.element.textContent = 'time (s) ↑';
      } else if (this.currentPageStatus.order === 'DESC') {
        this.timeTH.element.textContent = 'time (s) ↓';
      }
    }
  }

  private hideTimeSortingArrow(): void {
    if (this.currentPageStatus.sort === 'wins') {
      if (this.timeTH) {
        this.timeTH.element.textContent = 'time';
      }
    }
  }

  private hideWinsSortingArrow(): void {
    if (this.currentPageStatus.sort === 'time') {
      if (this.winsTH) {
        this.winsTH.element.textContent = 'wins';
      }
    }
  }

  public deleteRows(): void {
    if (this.winnersResults) {
      let idx: number = this.winnersResults.rows.length - 1;
      while (this.winnersResults.rows.length > 1 && idx > 0) {
        this.winnersResults.deleteRow(idx);
        idx -= 1;
      }
    }
    this.winnersOnPage = [];
    this.fillWinnersPage();
  }

  public updatePageViewState(): void {
    this.changeItemsOrder();
    this.deleteRows();
  }
}
