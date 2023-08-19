declare var wx: any;

const Date4offset = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = Date4offset;
}

export default Date4offset;
