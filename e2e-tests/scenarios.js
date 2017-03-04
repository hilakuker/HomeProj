'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('test email app', function () {
  beforeEach(module('emailHomePage'));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));


  describe('removing mail', function () {
    it('remove email address', function () {
      var emailList = {};
      var controller = $controller('GeneralController', {});
      controller.addEmail("hila@hhh.com");
      controller.deleteEmail(0);
      expect(controller.emailList.length).toEqual(0);
      expect(controller.logList.length).toEqual(2);
    });
  });

  describe('adding mail', function () {
    it('add new email address', function () {
      var emailList = {};
      var controller = $controller('GeneralController', {});
      expect(controller.emailList.length).toEqual(0);
      expect(controller.logList.length).toEqual(0);
      controller.addEmail("hila@hhh.com");
      expect(controller.emailList.length).toEqual(1);
      expect(controller.logList.length).toEqual(1);
    });
  });

  describe('checking logs', function () {
    it('check if log writes', function () {
      var emailList = {};
      var controller = $controller('GeneralController', {});
      controller.addEmail("hila@hhh.com");
      var logsLength = controller.logList.length;
      expect(controller.logList[logsLength - 1].message
        .includes("New email has been added"))
        .toEqual(true);
      controller.deleteEmail(0);
      logsLength = controller.logList.length;
      expect(controller.logList[logsLength - 1].message
        .includes("Email has been deleted"))
        .toEqual(true);
    });
  });
});

