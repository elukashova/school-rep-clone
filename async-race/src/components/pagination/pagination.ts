import './pagination.styles.css';
import BaseComponent from '../base-component';
import { PageStatus } from '../garage/page-garage.types';

export default class Pagination extends BaseComponent<'div'> {
  public leftArrowBtn: BaseComponent<'button'> | null = null;

  public rightArrowBtn: BaseComponent<'button'> | null = null;

  public currentPageElement: BaseComponent<'span'> | null = null;

  public currentPage: number = 0;

  public totalPages: number = 0;

  public itemsPerPage: number = 0;

  private selector: string;

  constructor(parent: BaseComponent<'div'>, selector: string, page: PageStatus, totalPages: number) {
    super('div', parent.element, `${selector}__pagination pagination`);
    this.currentPage = page.page;
    this.totalPages = totalPages;
    this.itemsPerPage = page.limit;
    this.selector = selector;
    this.render();
    this.disableArrowsFirstLastPage(this.currentPage);
  }

  private render(): void {
    const leftArrowBtnSVG: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const rightArrowBtnSVG: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const arrowLeftSource = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    const arrowRightSource = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    this.leftArrowBtn = new BaseComponent('button', this.element, `${this.selector}__btn-left`);
    this.currentPageElement = new BaseComponent(
      'span',
      this.element,
      `${this.selector}__current-page`,
      `${this.currentPage} / ${this.totalPages}`,
    );
    this.rightArrowBtn = new BaseComponent('button', this.element, `${this.selector}__btn-right`);

    this.leftArrowBtn.element.append(leftArrowBtnSVG);
    this.rightArrowBtn.element.append(rightArrowBtnSVG);
    leftArrowBtnSVG.append(arrowLeftSource);
    rightArrowBtnSVG.append(arrowRightSource);

    arrowLeftSource.setAttribute('href', 'assets/sprite.svg#left-arrow');
    arrowRightSource.setAttribute('href', 'assets/sprite.svg#right-arrow');
    rightArrowBtnSVG.classList.add(`${this.selector}__btn-right_svg`);
    leftArrowBtnSVG.classList.add(`${this.selector}__btn-left_svg`);
  }

  public updateCurrentPage(num: number): void {
    this.currentPage = num;
    this.updatePages();
  }

  public updateTotalPages(num: number): void {
    this.totalPages = num;
    this.updatePages();
  }

  private updatePages(): void {
    if (this.currentPageElement) {
      this.currentPageElement.element.textContent = `${this.currentPage} / ${this.totalPages}`;
    }
  }

  public disableArrowsFirstLastPage(num: number): void {
    if (num === 1) {
      this.leftArrowBtn?.element.setAttribute('disabled', '');
    } else if (num === this.totalPages) {
      this.rightArrowBtn?.element.setAttribute('disabled', '');
    }
  }

  public activateRightArrowBtn(): void {
    if (this.rightArrowBtn?.element.hasAttribute('disabled')) {
      this.rightArrowBtn.element.removeAttribute('disabled');
    }
  }

  public activateLeftArrowBtn(): void {
    if (this.leftArrowBtn?.element.hasAttribute('disabled')) {
      this.leftArrowBtn.element.removeAttribute('disabled');
    }
  }

  public calculateTotalPages(totalItems: number): number {
    return Math.ceil(totalItems / this.itemsPerPage);
  }
}
