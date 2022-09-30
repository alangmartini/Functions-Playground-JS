const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Tests without args should return given object', () => {
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(obj);
  });
  it('Monday  09:00-am should return The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Wednesday 09:00-am should return The zoo is open', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Passing a letter in time show throw error', () => {
    const error = new Error('The hour should represent a number');
    expect(() => getOpeningHours('Wednesday', '0a:00-AM')).toThrowError(error);
  });
  it('Passing an invalid abreaviattion show throw error', () => {
    const error = new Error('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Wednesday', '00:00-DP')).toThrowError(error);
  });
  it('a an invalid abreaviattion show throw error', () => {
    const error = new Error('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Wednesday', '13:00-AM')).toThrowError(error);
  });
  it('b an invalid abreaviattion show throw error', () => {
    const error = new Error('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Wednesday', '00:82-AM')).toThrowError(error);
  });
  it('b an invalid abreaviattion show throw error', () => {
    const error = new Error('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('DiaDoido', '00:42-AM')).toThrowError(error);
  });
});
