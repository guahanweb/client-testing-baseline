describe ('Base Spec', function () {
    it ('should be able to execute assertions', function () {
        expect(window).toBeDefined();
        expect(true).toBeTruthy();
        expect(false).not.toBeTruthy();
    });
});
