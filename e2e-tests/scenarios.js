'use strict';

describe('test email app', function () {
  beforeEach(module('emailHomePage'));

  describe('Unit testing email form directive', function () {
    var $compile,
      $rootScope;

    beforeEach(module('templates')); //for templateUrl in directive

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('validate the email address', function () {
      var element = $compile("<email-form></email-form>")($rootScope);
      $rootScope.$digest();
      var input = element.find('input');
      angular.element(input).val('hila').triggerHandler('input');
      expect(input.hasClass('ng-invalid-email')).toBe(true);

      angular.element(input).val('hila@aa.com').triggerHandler('input');
      expect(input.hasClass('ng-valid-email')).toBe(true);
    });
  });

  describe('Test emailsDataSrv', function () {
    var emailsDataSrv;
    beforeEach(inject(function (_emailsDataSrv_) {
      emailsDataSrv = _emailsDataSrv_;
    }));
    describe('when I add email', function () {
      it('the email list length is one. log list length is one', function () {
        emailsDataSrv.addEmail('hilakuker@gmail.com')
        expect(emailsDataSrv.emailList.length).toEqual(1);
        expect(emailsDataSrv.logList.length).toEqual(1);
      })
    })
    describe('test logs', function () {
      it('should add mew log lines', function () {
        emailsDataSrv.addEmail("hila@hhh.com");
        var logsLength = emailsDataSrv.logList.length;
        expect(emailsDataSrv.logList[logsLength - 1].message
          .includes("New email has been added"))
          .toEqual(true);
        emailsDataSrv.deleteEmail(0);
        logsLength = emailsDataSrv.logList.length;
        expect(emailsDataSrv.logList[logsLength - 1].message
          .includes("Email has been deleted"))
          .toEqual(true);
      })
      describe('removing mail', function () {
        it('should add log line and email list length is one', function () {
          emailsDataSrv.addEmail("hila@hhh.com");
          emailsDataSrv.deleteEmail(0);
          expect(emailsDataSrv.emailList.length).toEqual(0);
          expect(emailsDataSrv.logList.length).toEqual(2);
        });
      })
    })
  });
});

