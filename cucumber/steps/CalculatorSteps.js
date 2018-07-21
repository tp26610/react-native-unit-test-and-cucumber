import {Given, Before, When, Then} from 'cucumber';

Before({tags: "@Calculator"}, function() {
  console.log("this is a Before block");
});


Given('I start with {int}', function (int) {
  console.log("this is a given sentence");
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I add {int}', function (int) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I end up with {int}', function (int) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});  