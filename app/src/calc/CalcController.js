(function(){

  angular
       .module('calc')
       .controller('CalcController', function() {
         this.result = 0;
         this.input = 0;
         this.lastNumber = true;
         this.numbers = [",","0","c","1","2","3","4","5","6","7","8","9"];
         this.numbersRow = [4,3,2,1,0];
         this.operators = ["÷","×","−","+"];
         this.inputNumber = function(x) {
           if (this.input === 0) {
              this.input = x;
           } else {
             this.input = this.input+x;
           }
           console.log(this.input);
           console.log(this.input.replace(/÷/g,"/").replace(/×/g,"*"));
           this.result = eval(this.input.replace(/÷/g,"/").replace(/×/g,"*"));
           this.lastNumber = true;
         };
         this.inputOperator = function(x) {
           if (this.lastNumber) {
             this.input = this.input+x;
           } else {
             this.input = this.input.substring(0,this.input.length-1)+x;
           }
           this.lastNumber = false;
         };
       });

})();
