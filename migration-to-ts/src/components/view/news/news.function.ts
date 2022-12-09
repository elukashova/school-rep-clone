/* eslint-disable prettier/prettier */
export function setProperty (
  root: DocumentFragment,
  selector: string,
  property: "textContent",
  value: string
): void {
  const item: Element | null = root.querySelector(selector);
  if(item) {
    item[property] = value
  }
}
