(function () {
    angular.module('emailHomePage')
        .directive("emailForm", function () {
            return {
                restrict: "E",
                templateUrl: "templates/email-form.html",
                controller: "EmailFormController",
                controllerAs: "emailFormCtrl"
            };
        })
        .directive("emailTable", function () {
            return {
                restrict: "E",
                templateUrl: "templates/email-table.html"
            };
        })
        .directive("logs", function () {
            return {
                restrict: "E",
                templateUrl: "templates/logs.html"
            };
        });
})();