const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('If param undefined returns undefined', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });
  it('If param is not a string returns "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(4)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('If typeof working function returns object', () => {
    expect(typeof handlerElephants('names')).toBe('object');
  });
  it('If param names returns elephants names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('If param count returns how many elephants there is', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('If param averageAge returns average age of residents', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('If non existent param returns null', () => {
    expect(handlerElephants('parametroSuperLegal')).toBe(null);
  });
  it('If param averageAge returns average age of residents', () => {
    const residents = [
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ];
    expect(handlerElephants('residents')).toEqual(residents);
  });
});
