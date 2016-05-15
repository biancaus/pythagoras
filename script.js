/*
Find out about how the JavaScript Math.sqrt() function works:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

Features to add:

^ calculate the result for the hypotenuse
^ display the hypotenuse result where it currently reads "result"
^ validate that the input values entered are greater than 0
^ display an error message for the user if the input values they are 0 or less

*/

document.getElementById('calculate').addEventListener('click', function() {
  
  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;
  var square = (width*width) + (height*height);
  
        if (width<=0 || height<=0) {
          alert("ERROR: Values less than or equal to 0 is not allowed.");
          document.getElementById('hypotenuse').value = 'ERROR';
          
      }
      
        else{
            document.getElementById('triangle').setAttribute('width', width);
            document.getElementById('triangle').setAttribute('height', height);
            document.getElementById('hypotenuse').value = Math.sqrt(square);
      }
  

});

