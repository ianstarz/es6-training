QUnit.test("formatPhone correctly formats numbers", function(assert) {
  assert.equal(formatPhone(5555555), '555-5555');
  assert.ok(formatPhone(5555555) === '555-5555');
// Uncomment the following asserts to expand functionality
//  assert.equal(formatPhone(1234567890), '(123)456-7890');
//  assert.ok(formatPhone(1234567890) === '(123)456-7890');
// Don't forget some negative tests!
//  assert.ok(formatPhone(123) === undefined);
//  assert.ok(formatPhone(12345678901) === undefined);
});
