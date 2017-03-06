(function () {

    'use strict';
    angular.module('emailHomePage')
        .directive("emailForm", function () {
            function emailFormController(emailsDataSrv, $scope) {
                var self = this;
                self.email = "";
                function addEmail() {
                    emailsDataSrv.addEmail(self.email);
                    self.email = "";
                    $scope.emailForm.$setPristine();
                }
                function init() {
                    self.emails = emailsDataSrv.emailList;
                }
                self.addEmail = addEmail;
                self.init = init;

            }
            function Link(scope, element, attrs, controller) {
                controller.init();
            }
            return {
                restrict: "E",
                controller: ["emailsDataSrv", "$scope", emailFormController],
                controllerAs: '$ctrl',
                scope: {
                },
                templateUrl: "templates/email-form.html",
                replace: true,
                link: Link
            };
        });
})();