'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {
  beforeEach(module('myApp'));

  describe('view1', function () {

    beforeEach(function () {
      browser.get('index.html#!/view1');
    });

    beforeEach(inject(function (_$controller_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    describe('adding and removing mail', function () {
      it('add new email address', function () {
        var emailList = {};
        var controller = $controller('GeneralController', {});
        expect(controller.emailList.length).toEqual(0);
        controller.addEmail("hila@hhh.com");
        expect(controller.emailList.length).toEqual(1);
        controller.deleteEmail(0);
        expect(controller.emailList.length).toEqual(0);
      });
    });
  });
});


describe('view2', function () {

  beforeEach(function () {
    browser.get('index.html#!/view2');
  });


  it('should render view2 when user navigates to /view2', function () {
    expect(element.all(by.css('[ng-view] p')).first().getText()).
      toMatch(/partial for view 2/);
  });

});
});
