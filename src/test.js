const cardgen = () => {
  const arr = [];
  const vals = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let val = "";
  let vNum = 0;
  for (let i = 1; i <= 16; i++) {
    arr.push({ id: i, value: vals[Math.floor(Math.random() * vals.length)] });
    val = arr[i - 1].value;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].value == val) {
        vNum++;
      }
      if (vNum == 2) {
        vals.splice(vals.indexOf(val), 1);
      }
    }
  }
  return arr;
};

console.log(cardgen());