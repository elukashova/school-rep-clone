export default class Car {
  public readonly svg: Element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  public appendSVG(parent: Element): void {
    this.renderSVG();
    parent.append(this.svg);
  }

  public updateColor(color: string): void {
    this.svg.setAttribute('fill', `${color}`);
  }

  public replaceSVG(parent: Element, child: Element): void {
    this.renderSVG();
    parent.replaceChild(this.svg, child);
  }

  private renderSVG(): void {
    const carSource: SVGUseElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    carSource.setAttribute('href', 'assets/sprite.svg#snowmobile');
    this.svg.classList.add('race__car');
    this.svg.append(carSource);
  }
}
