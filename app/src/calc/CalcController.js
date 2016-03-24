(function(){

  angular
       .module('calc')
       .controller('CalcController', function() {
         this.result = 0;
         this.input = 0;
         this.numbers = [",","0","←","1","2","3","4","5","6","7","8","9"];
         this.numbersRow = [4,3,2,1,0];
         this.operators = ["÷","×","-","+"];
         this.createResult = function(y) {
           this.result = eval(y.replace(/÷/g,"/").replace(/×/g,"*").replace(/,/g,"."));
           this.result = Math.round(this.result * 1000000) / 1000000;
           this.result = this.result.toString().replace(".",",");
         }
         this.inputNumber = function(x) {
           if (this.input === 0 && x != "←") {
             if (x == ",") {
               this.input = "0,";
             } else {
               this.input = x;
               return;
             }
           } else if (x == "←") {
             if (this.input.length > 1) {
               this.input = this.input.substring(0,this.input.length-1);
               if (["0","1","2","3","4","5","6","7","8","9"].includes(this.input.substring(this.input.length-1,this.input.length))) {
                 this.createResult(this.input);
               } else {
                 this.createResult(this.input.substring(0,this.input.length-1));
               }
             } else {
               this.input = 0;
               this.result = 0;
               return;
             }
           } else if (x == ",") {
             if (this.input.substring(this.input.length-1,this.input.length) != ",") {
                this.input = this.input+",";
             }
           } else {
             this.input = this.input+x;
             this.createResult(this.input);
           }
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
