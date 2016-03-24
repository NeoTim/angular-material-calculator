(function(){

  angular
       .module('calc')
       .controller('CalcController', function() {
         this.result = 0;
         this.input = 0;
         this.numbers = [",","0","←","1","2","3","4","5","6","7","8","9"];
         this.numbersRow = [4,3,2,1,0];
         this.operators = ["÷","×","-","+"];
         this.inputNumber = function(x) {
           if (this.input === 0 && x != "←") {
             this.input = x;
           } else if (x == "←") {
             if (this.input.length > 1) {
               this.input = this.input.substring(0,this.input.length-1);
             } else {
               this.input = 0;
               this.result = 0;
             }
           } else {
             this.input = this.input+x;
           }
           console.log(this.input);
           console.log(this.input.replace(/÷/g,"/").replace(/×/g,"*"));
           this.result = eval(this.input.replace(/÷/g,"/").replace(/×/g,"*"));
         };
         this.inputOperator = function(x) {
           if (["0","1","2","3","4","5","6","7","8","9"].includes(this.input.substring(this.input.length-1,this.input.length))) {
             this.input = this.input+x;
           } else {
             this.input = this.input.substring(0,this.input.length-1)+x;
           }
           this.lastNumber = false;
         };
       });

})();
