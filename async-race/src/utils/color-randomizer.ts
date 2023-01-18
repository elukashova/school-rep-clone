const getRandomColorPart = (): string => {
  const color: string = Math.floor(Math.random() * 256).toString(16);
  const result: string = color.length !== 2 ? `0${color}` : color;
  return result;
};

const createRandomColor = (): string => {
  let result: string = '#';
  const colorLength: number = 3;
  for (let i: number = 0; i < colorLength; i += 1) {
    result += getRandomColorPart();
  }
  return result;
};

export default createRandomColor;
