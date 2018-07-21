import {Given, Before, When, Then} from 'cucumber';
import Calculator from '../../src/Calculator';
import assert from 'assert';

firstInt = null;
secondInt = null;
calculator = null;

Before({tags: "@Calculator"}, function() {
  // console.log("this is a Before block");
  calculator = new Calculator();
});


Given('I start with {int}', function (int) {
  firstInt = int;
});

When('I add {int}', function (int) {
  secondInt = int;
});

Then('I end up with {int}', function (int) {
  assert.equal(calculator.add(firstInt, secondInt), int);
});  