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
const notWeekendDate = new Date(new Date().setDate(-6));
const weekendDate = new Date(new Date().setDate(-9));
const isWeekend = date.getDay();
export let updateDate = '';
if (isWeekend !== 0 && isWeekend !== 6) {
  if (notWeekendDate.getMonth() + 1 < 10) {
    if (notWeekendDate.getDate() < 10) {
      updateDate = notWeekendDate.getFullYear() + '0' + (notWeekendDate.getMonth() + 1) + '0' + notWeekendDate.getDate();
    } else {
      updateDate = notWeekendDate.getFullYear() + '0' + (notWeekendDate.getMonth() + 1) + notWeekendDate.getDate();
    }
  } else {
    if (notWeekendDate.getDate() < 10) {
      updateDate = notWeekendDate.getFullYear() + (notWeekendDate.getMonth() + 1) + '0' + notWeekendDate.getDate();
    } else {
      updateDate = notWeekendDate.getFullYear() + '' + (notWeekendDate.getMonth() + 1) + notWeekendDate.getDate();
    }
  }
} else {
  if (weekendDate.getMonth() + 1 < 10) {
    if (weekendDate.getDate() < 10) {
      updateDate = weekendDate.getFullYear() + '0' + (weekendDate.getMonth() + 1) + '0' + weekendDate.getDate();
    } else {
      updateDate = weekendDate.getFullYear() + '0' + (weekendDate.getMonth() + 1) + weekendDate.getDate();
    }
  } else {
    if (weekendDate.getDate() < 10) {
      updateDate = weekendDate.getFullYear() + (weekendDate.getMonth() + 1) + '0' + weekendDate.getDate();
    } else {
      updateDate = weekendDate.getFullYear() + '' + (weekendDate.getMonth() + 1) + weekendDate.getDate();
    }
  }
}
