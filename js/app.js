$(document).ready(function(){
   let player = 1;
   $('.square').on('click',function(event){
      var squareSelected = $(this);
       if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')){
         alert('This square has already been selected.Please select another..!');
       }
       else{
         if(player == 1){
           squareSelected.addClass('ex');

           player = 2;
         }
         else{
           squareSelected.addClass('oh');
           player = 1;
         }
       }
   });
   
});
