(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.txtLunch = "";
  $scope.ouputmessage = "";

  $scope.checkLunch = function () {
    var arrayOfStrings = $scope.txtLunch.split(",");
    if(arrayOfStrings == 0)
    {
        $scope.ouputmessage="Please enter data first";
    }
    else if (arrayOfStrings.length <= 3)
    {
      $scope.ouputmessage='Enjoy!';
    }
    else if (arrayOfStrings.length > 3)
    {
      $scope.ouputmessage='Too much!';
    }
  };
}

})();
