(function () {

    'use strict';
    angular.module('emailHomePage')
        
        .directive("logs", function () {
            function logsController(emailsDataSrv) {
                var self = this;
                function init() {
                    self.logList = emailsDataSrv.logList;
                }
                self.init = init;
                
            }
            function Link(scope, element, attrs, controller) {
                controller.init();
            }
            return {
                restrict: "E",
                controller: ["emailsDataSrv", logsController],
                controllerAs: '$ctrl',
                scope: {
                },
                templateUrl: "templates/logs.html",
                replace: true,
                link: Link
            };
        });
})();