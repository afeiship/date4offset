declare var wx: any;

// https://stackoverflow.com/questions/15141762/how-to-initialize-a-javascript-date-to-a-particular-time-zone
// https://github.com/iansinnott/jstz

const date4offset = (inOffset: number = 8, inValue?: any) => {
  const date = typeof inValue === 'undefined' ? new Date() : new Date(inValue);
  const currentOffset = date.getTimezoneOffset() / 60; //(-8)
  const offset = inOffset + currentOffset;
  date.setTime(date.getTime() + offset * 3600 * 1000);
  return date;
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = date4offset;
}

export default date4offset;
