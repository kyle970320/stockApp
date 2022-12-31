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
const isWeekend = date.getDay();
const isNewYear = date.getMonth();
export let updateDate = '';
if (isNewYear !== 0) {
  if (isWeekend !== 0 && isWeekend !== 6) {
    if (date.getDate() - 7 <= 9 && date.getDate() - 7 >= 0) {
      updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + '0' + (date.getDate() - 7);
    } else if (date.getDate() - 7 <= 0) {
      updateDate = date.getFullYear() + '' + date.getMonth() + (date.getDate() - 7);
    } else {
      updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + (date.getDate() - 7);
    }
  } else {
    if (date.getDate() - 10 <= 9 && date.getDate() - 10 >= 0) {
      updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + '0' + (date.getDate() - 10);
    } else if (date.getDate() - 10 <= 0) {
      updateDate = date.getFullYear() + '' + date.getMonth() + (date.getDate() - 10);
    } else {
      updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + (date.getDate() - 10);
    }
  }
} else {
  if (isWeekend !== 0 && isWeekend !== 6) {
    if (date.getDate() - 7 <= 9 && date.getDate() - 7 >= 0) {
      updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + '0' + (date.getDate() - 7);
    } else if (date.getDate() - 7 <= 0) {
      updateDate = date.getFullYear() + '' + '12' + (date.getDate() - 7);
    } else {
      updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + (date.getDate() - 7);
    }
  } else {
    if (date.getDate() - 10 <= 9 && date.getDate() - 10 >= 0) {
      updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + '0' + (date.getDate() - 10);
    } else if (date.getDate() - 10 <= 0) {
      updateDate = date.getFullYear() + '' + '12' + (date.getDate() - 10);
    } else {
      updateDate = date.getFullYear() + '' + (date.getMonth() + 1) + (date.getDate() - 10);
    }
  }
}
