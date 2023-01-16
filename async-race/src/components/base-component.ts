export default class BaseComponent<T extends keyof HTMLElementTagNameMap> {
  public readonly element: HTMLElementTagNameMap[T];

  constructor(
    tag: T,
    parent?: HTMLElement,
    classes?: string,
    content?: string,
    attributes?: { [key: string]: string } | undefined,
  ) {
    this.element = document.createElement(tag);

    if (parent) {
      parent.append(this.element);
    }

    if (classes) {
      this.element.classList.add(...classes.split(' '));
    }

    if (content) {
      this.element.textContent = content;
    }

    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        this.element.setAttribute(key, value);
      });
    }
  }

  // public subscribe(func: ObserverFn): void {
  //   this.observers.push(func);
  // }

  // public unsubscribe(func: ObserverFn): void {
  //   this.observers = this.observers.filter((observer) => observer !== func);
  // }

  // public notify(id: number): void {
  //   this.observers.forEach((observer) => observer(id));
  // }

  // // public notify(data: ObserverData): void {
  // //   this.observers.forEach(async (observer) => observer(data));
  // // }
}
