describe ('Base E2E Test', function () {
    var ptor;

    beforeEach(function () {
        // Remove this line if you're creating an AngularJS website
        browser.ignoreSynchronization = true;
        ptor = protractor.getInstance();
    });

    it ('Should be able to read the DOM', function () {
        expect(element(by.css('body'))).toBeDefined();
    });
});
