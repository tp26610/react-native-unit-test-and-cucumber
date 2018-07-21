import Calculator, {add} from '../src/Calculator';

test('Calculator add 1 and 2 which result is 3.', () => {
  c = new Calculator();
  addedResult = add(1,2);
  expect(addedResult).toBe(3);
});

function longWorkBackground(callback) {
  setTimeout(() => {
    callback(1, 2);
  }, 1000);
}

it('the data is peanut butter', done => {
  // function callback(data) {
  //   expect(data).toBe('peanut butter');
  //   done();
  // }

  callbackInTest = (x, y) => {
    expect(x).toBe(1);
    expect(y).toBe(2);
    done();
  }
  longWorkBackground(callbackInTest);

  // fetchData(callback);
});