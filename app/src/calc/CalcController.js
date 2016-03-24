(function(){

  angular
       .module('calc')
       .controller('CalcController', function() {
         this.result = 0;
         this.input = 0;
         this.numbers = [",","0","←","1","2","3","4","5","6","7","8","9"];
         this.numbersRow = [4,3,2,1,0];
         this.operators = ["÷","×","-","+"];

         // take the raw input from the input space
         // and create a final result visible in the top field
         this.createResult = function(y) {

           // replace glyphs with executable math operators
           this.result = eval(y.replace(/÷/g,"/").replace(/×/g,"*").replace(/,/g,"."));

           // round the result to avoid long repeaters
           this.result = Math.round(this.result * 1000000) / 1000000;

           // change dots back to commas for display purposes
           this.result = this.result.toString().replace(".",",");
         };

         // when a key from this.numbers is pressed
         this.inputNumber = function(x) {

           // when the calculator is blank
           if (this.input === 0 && x != "←") {

             if (x == ",") {
               // extend zero with a comma
               this.input = "0,";
             } else {
               // or replace zero with the first digit
               this.input = x;
               return;
             }

           // when CLEAR (←) is pressed
           } else if (x == "←") {
             if (this.input.length > 1) {

               // delete the last character
               this.input = this.input.substring(0,this.input.length-1);

               // if the last character after substracting is a digit
               if (["0","1","2","3","4","5","6","7","8","9"].includes(this.input.substring(this.input.length-1,this.input.length))) {
                 this.createResult(this.input);

               // if the last character after substraction is a comma or an operator
               // don't include it in the result
               } else {
                 this.createResult(this.input.substring(0,this.input.length-1));
               }

             // if the input before substracting is one digit long turn it to zero
             } else {
               this.input = 0;
               this.result = 0;
               return;
             }

          // when a comma is pressed
           } else if (x == ",") {

             // check if a comma is already a last character of the input
             if (this.input.substring(this.input.length-1,this.input.length) != ",") {
                this.input = this.input+",";
             }

           // when the calculator is not blank and a digit is pressed
           } else {
             this.input = this.input+x;
             this.createResult(this.input);
           }
         };

         // when an operator is pressed
         this.inputOperator = function(x) {

           // check if the last character of the input is a digit
           if (["0","1","2","3","4","5","6","7","8","9"].includes(this.input.substring(this.input.length-1,this.input.length))) {
             this.input = this.input+x;

           // if a comma of operator replace it with a new operator
           } else {
             this.input = this.input.substring(0,this.input.length-1)+x;
           }
         };
       });

})();
