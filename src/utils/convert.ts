export const convertUnit = (unit: string) => {
  if (Number(unit) > 0) {
    if (Number(unit) >= 1000000000000) {
      return `${(Number(unit) / 1000000000000).toFixed(2)}조`;
    } else if (Number(unit) >= 100000000) {
      return `${(Number(unit) / 100000000).toFixed(2)}억`;
    } else if (Number(unit) >= 10000) {
      return `${(Number(unit) / 10000).toFixed(2)}만`;
    } else {
      return unit;
    }
  } else {
    if (Number(unit) <= -1000000000000) {
      return `${(Number(unit) / 1000000000000).toFixed(2)}조`;
    } else if (Number(unit) <= -100000000) {
      return `${(Number(unit) / 100000000).toFixed(2)}억`;
    } else if (Number(unit) <= -10000) {
      return `${(Number(unit) / 10000).toFixed(2)}만`;
    } else {
      return unit;
    }
  }
};

const date = new Date();
export let updateDate = '';
if (date.getDate() - 7 <= 9) {
  updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + '0' + (date.getDate() - 7);
} else if (date.getDate() - 7 <= 0) {
  updateDate = date.getFullYear() + '' + date.getMonth() + (date.getDate() - 7);
} else {
  updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + (date.getDate() - 7);
}
