describe('e2e: homepage', function(){
	var ptor = protractor.getInstance();

	var newsList;

	newsList = element.all(
		by.repeater('i in news')
	);

	beforeEach(function() {
		browser.get('/#!/');
	});

	it('should fetch the homepage', function() {
		expect(
			browser.getCurrentUrl()
		).toContain('/#!/');
	});

	describe('reddit section', function() {
		it('should get 25 elements from reddit', function() {
			newsList.count().then(function(c) {
				expect(c).toEqual(25);
			});
		});
	});

	describe('filters', function() {
		it('should filter on search input', function() {
			element(by.input('search.title')).sendKeys('america1');
			newsList.count().then(function(c) {
				expect(c).toBeLessThan(25);
			});
		});

		it('should change the ordering of listings by date', function() {

			sortbutton = element(by.id('sort-created'));

			sortbutton.click();

			var a = newsList.first().getAttribute('data-created');
			var b = newsList.last().getAttribute('data-created');

			expect(a).toBeLessThan(b);

			sortbutton.click();

			var c = newsList.first().getAttribute('data-created');
			var d = newsList.last().getAttribute('data-created');

			expect(c).toBeGreaterThan(d);
		});
	});

	describe('navigation', function() {
		it('should fetch the settings page', function() {
			element(by.id('settings-button')).click();
			expect(
				browser.getCurrentUrl()
			).toContain('/settings');
		});
	});
});