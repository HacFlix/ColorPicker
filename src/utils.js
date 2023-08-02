export const generatePallete = () => {
  let arr = [];

  while (arr.length <= 4) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    arr.push(randomColor);
  }
  return arr;
};
