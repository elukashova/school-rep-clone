import './page-winners.styles.css';
import BaseComponent from '../base-component';
import Pagination from '../pagination/pagination';
// eslint-disable-next-line object-curly-newline
import { PageInfo, TableInfo, WinnersInfo, WinnerType } from './page-winners.types';
import { getCar, getWinners } from '../../controller/loader-functions';
import { CarType } from '../garage/race-track/race-track.types';
import Car from '../car/car';

export default class WinnersPage extends BaseComponent<'section'> {
  private totalWinners: number = 0;

  private totalWinnersElement: BaseComponent<'span'> | null = null;

  private currentPageStatus: PageInfo = {
    page: 1,
    limit: 10,
    sort: 'id',
    order: 'ASC',
  };

  private totalPages: number = 1;

  private pagination!: Pagination;

  private winnersResults: HTMLTableElement | null = null;

  private winsTH: BaseComponent<'th'> | null = null;

  private timeTH: BaseComponent<'th'> | null = null;

  private winners: WinnerType[] = [];

  private winnersCars: CarType[] = [];

  private color: string = '';

  private winnersInfo: TableInfo = {
    number: 0,
    car: undefined,
    name: '',
    wins: 0,
    time: 0,
  };

  private orderNum: number = 0;

  private winnersOnPage: WinnersInfo[] = [];

  private winnersAll: WinnersInfo[] = [];

  constructor() {
    super('section', undefined, 'section winners');
    this.renderWinnersTable();
    this.retrieveData();
  }

  private renderWinnersTable(): void {
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
  }

  private retrieveData = async (): Promise<void> => {
    this.winners = (await getWinners(this.currentPageStatus)).data.slice();
    // eslint-disable-next-line max-len
    this.winnersCars = (await Promise.all(this.winners.map((winner: WinnerType) => getCar(winner.id)))).slice();
    for (let i: number = 0; i < this.winners.length; i += 1) {
      this.orderNum += 1;
      this.winnersOnPage.push({
        ...this.winners[i],
        ...this.winnersCars[i],
        car: new Car(),
        number: this.orderNum,
      });
    }
    this.winnersOnPage.forEach((winner: WinnersInfo) => {
      this.winnersInfo.wins = winner.wins;
      this.winnersInfo.time = winner.time;
      this.winnersInfo.name = winner.name;
      this.winnersInfo.car = winner.car;
      this.winnersInfo.number = winner.number;
      this.color = winner.color;
      this.insertWinnersInfo(this.winnersInfo);
    });
  };

  private insertHeading(headings: string[], parent: HTMLTableRowElement): void {
    for (let i: number = 0; i < headings.length; i += 1) {
      const heading: string = headings[i];
      let th: BaseComponent<'th'>;
      switch (heading) {
        case 'wins':
          this.winsTH = new BaseComponent('th', parent, `results__table_th-${heading} table__th`);
          this.winsTH.element.classList.add('sortable');
          this.winsTH.element.textContent = `${heading} ↓`;
          break;
        case 'time':
          this.timeTH = new BaseComponent('th', parent, `results__table_th-${heading} table__th`);
          this.timeTH.element.classList.add('sortable');
          this.timeTH.element.textContent = `${heading} ↓`;
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

  // private createAllCarsBackup = async (): Promise<void> => {
  //   const params: DataType = {
  //     sort: this.currentPageStatus.sort,
  //     order: this.currentPageStatus.order,
  //   };
  //   await getWinBackup(params).then((winners: WinnerType[]) => {
  //     winners.forEach((winner) => {
  //       const row: HTMLTableRowElement = document.createElement('tr');
  //       const cell: HTMLTableCellElement = row.insertCell();
  //       cell.classList.add('table__cell');
  //       // const track: RaceTrack = new RaceTrack(car);
  //       // track.element.setAttribute('id', `${car.id}`);
  //       // this.allTracks.push(track);
  //       // this.totalCars = this.allTracks.length;
  //     });
  //   });
  // };
}
