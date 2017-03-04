

angular.module('emailHomePage')
    .controller('GeneralController', ['$http', function ($http) {
        var generalData = this;
        generalData.emailList = [];
        generalData.logList = [];

        // getting data from api
        // $http.get('js/emails.json').then(function (json) {
        //   emails.emailList = json.data.emails;
        // });
        generalData.addEmail = function (email) {
            var index = generalData.emailList.length;
            generalData.emailList.push({ index: index, email: email });
            //POST EMAIL api
            generalData.logList.push({
                logTime: new Date().toLocaleString(),
                message: "New email has been added - " + email
            });
        }

        generalData.deleteEmail = function (index) {
            generalData.logList.push({
                logTime: new Date().toLocaleString(),
                message: "Email has been deleted - " + generalData.emailList[index].email
            });
            generalData.emailList.splice(index, 1);
        }
    }])
    .controller('EmailFormController', ['$scope', function ($scope) {
        this.input = {};

        this.clearForm = function () {
            this.input = {};
            $scope.emailForm.$setPristine();
        }
    }]);
