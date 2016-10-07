QUnit.test("formatPhone correctly formats numbers", function(assert) {
  assert.equal(formatPrice(5555555), '555-5555');
  assert.ok(formatPrice(5555555) === '555-5555');
});
