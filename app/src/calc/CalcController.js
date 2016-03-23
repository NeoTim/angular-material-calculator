(function(){

  angular
       .module('calc')
       .controller('CalcController', function() {
         this.result = 0;
         this.input = 0;
         this.numbers = [",","0","c","1","2","3","4","5","6","7","8","9"];
         this.numbersRow = [4,3,2,1,0];
         this.operators = ["=","÷","×","−","+"];
         this.inputNumber = function(x) {
           this.result = this.result+x
         }
       });

})();
