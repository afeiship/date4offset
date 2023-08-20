import fn from '../src';

describe('api.basic', () => {
  test('tz:0-8', () => {
    const d0 = fn(0, '2023-08-19 08:00:00');
    // const d1 = fn(1, '2023-08-19 08:00:00');
    // const d2 = fn(2, '2023-08-19 08:00:00');
    // const d8 = fn(8, '2023-08-19 08:00:00');
    // const d8 = fn(8, '2023-08-19 00:00:00');
    // const dd = fn(8, '2023-08-19 00:00:00');
    // console.log(d0, d8);
    console.log(d0.toString());


    // expect(d0).toEqual(new Date('2023-08-19T08:00:00.000Z'));
    // expect(d8).toEqual(new Date('2023-08-19T00:00:00.000Z'));
  });
});
