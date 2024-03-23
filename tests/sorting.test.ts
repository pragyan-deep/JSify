const jtsify = require('../build/index');

describe('sortArray', () => {
  it('should sort an array of numbers in ascending order', () => {
    const input  = [
        { name: "1 A"},
        { name: "CBA"},
        { name: "11 A"},
        { name: "ZA"},
        { name: "AAA"},
        { name: "VA"},
        { name: "A1"},
        { name: "ABA"},
        { name: "2 A"},
    ];
    const expectedDesc = [
        { name: 'ZA' },
        { name: 'VA' },
        { name: 'CBA' },
        { name: 'ABA' },
        { name: 'AAA' },
        { name: 'A1' },
        { name: '11 A' },
        { name: '2 A' },
        { name: '1 A' }
      ];
      const expectedAsc = [
        { name: '1 A' },
        { name: '2 A' },
        { name: '11 A' },
        { name: 'A1' },
        { name: 'AAA' },
        { name: 'ABA' },
        { name: 'CBA' },
        { name: 'VA' },
        { name: 'ZA' }
      ];
    const resultAsc = jtsify.sortBy(input,"asc", (compare, a, b) => compare(a.name, b.name));
    const resultDesc = jtsify.sortBy(input,"desc", (compare, a, b) => compare(a.name, b.name));
    expect(resultAsc).toEqual(expectedAsc);
    expect(resultDesc).toEqual(expectedDesc);
  });
});