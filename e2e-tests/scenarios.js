'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /recipes when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/recipes");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/recipes');
    });


    it('should render recipes when user navigates to /recipes', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/ingredients');
    });


    it('should render ingredients when user navigates to /ingredients', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
