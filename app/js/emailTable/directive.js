(function () {

    'use strict';
    angular.module('emailHomePage')

        .directive("emailTable", function () {
            function emailTableController(emailsDataSrv) {
                var self = this;
                function deleteEmail(email) {
                    emailsDataSrv.deleteEmail(email.index);
                }
                function init() {
                    self.emails = emailsDataSrv.emailList;
                }
                self.deleteEmail = deleteEmail;
                self.init = init;

            }
            function Link(scope, element, attrs, controller) {
                controller.init();
            }
            return {
                restrict: "E",
                controller: ["emailsDataSrv", emailTableController],
                controllerAs: '$ctrl',
                scope: {
                },
                templateUrl: "templates/email-table.html",
                replace: true,
                link: Link
            };
        })
})();