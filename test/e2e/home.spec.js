describe('e2e: homepage', function(){
	var ptor = protractor.getInstance();

	beforeEach(function() {
		browser.get('/#!/');
	});

	it('should fetch the homepage', function() {
		expect(
			browser.getCurrentUrl()
		).toContain('/#!/');
	})

	describe('reddit section', function() {

		var newsList;

		newsList = element.all(
			by.repeater('i in news')
		);

		it('should get 25 elements from reddit', function() {
			newsList.count().then(function(c) {
				expect(c).toEqual(25);
			});
		});
	});

	describe('filters', function() {
		it('should filter on search input', function() {
			element(by.input('search.title')).sendKeys('america1');
			element.all(by.repeater('i in news')).count().then(function(c) {
				expect(c).toBeLessThan(25);
			});
		})
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