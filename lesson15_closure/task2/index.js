 export const createCalculator = () => {
     let mem = 0;
     return {
         add: function(addNum) {
             mem += addNum
         },

         decrease: function(decNum) {
             mem -= decNum
         },

         reset: function() {
             mem = 0
         },

         getMemo: function() {
             return mem
         }

     }

 };
 const calc = createCalculator();
 calc.add(10)
 calc.decrease(5)
 console.log(calc.getMemo())
 console.log(calc)