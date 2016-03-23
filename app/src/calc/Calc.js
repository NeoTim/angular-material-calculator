(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('calc', [ 'ngMaterial' ]);

  angular
      .module('calc')
      .directive('calcNumber',function(){
        return {
          restrict: 'E',
          templateUrl: 'src/calc/view/calc-number.html'
        };
      })
      .directive('calcOperator',function(){
        return {
          restrict: 'E',
          templateUrl: 'src/calc/view/calc-operator.html'
        };
      })
      .directive('numbersRow',function(){
        return {
          restrict: 'E',
          templateUrl: 'src/calc/view/numbers-row.html'
        };
      });

})();
