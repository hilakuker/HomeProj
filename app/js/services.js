angular.module('emailHomePage')
    .factory('emailsDataSrv', function() {
        return {
            emailList: [],
            logList: [],
            addEmail: function(email) {
                var index = this.emailList.length;
                this.emailList.push({ index: index, email: email });
                //POST EMAIL api
                this.logList.push({
                    logTime: new Date().toLocaleString(),
                    message: "New email has been added - " + email
                });
            },
            deleteEmail: function(index) {
                this.logList.push({
                    logTime: new Date().toLocaleString(),
                    message: "Email has been deleted - " + this.emailList[index].email
                });
                this.emailList.splice(index, 1);
            }
        }
    });