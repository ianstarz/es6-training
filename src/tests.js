QUnit.test("formatPhone correctly formats numbers", function(assert) {
  assert.equal(formatPhone(5555555), '555-5555');
});
