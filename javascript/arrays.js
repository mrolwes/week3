

//variables IN function (function scope), can see global variables)

var imageListA = new Array();
  imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
  imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
  imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
  imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
  imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
  imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
  imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
  imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
  imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
  imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";



var imageListB = new Array();
  imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
  imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
  imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
  imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
  imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
  imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
  imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
  imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


var imageListC = new Array();
  imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
  imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
  imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
  imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
  imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
  imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
  imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
  imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
  imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
  imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";


var imageListD = new Array();
  imageListD[0] = "images/clips/thumbs/clip1.gif"
  imageListD[1] = "images/clips/thumbs/clip2.gif";
  imageListD[2] = "images/clips/thumbs/clip3.gif";
  imageListD[3] = "images/clips/thumbs/clip4.gif";
  imageListD[4] = "images/clips/thumbs/clip5.gif";
  imageListD[5] = "images/clips/thumbs/clip6.gif";
  imageListD[6] = "images/clips/thumbs/clip7.gif";


//create the buildThumbnail function
function buildThumbnails()
{
   //hook onto the thumb div
   var thumbsDiv = document.getElementById("thumbs");
   
   //create an output variable
  var output = "";
  //first part: counter (we set pp 0 to start couting the loop)
  //second part: condition, (thee loop will keep looping as long as the condition is true)
  //third part: incrementor - adds one to the counterAFTER the code is executed in the brackets
  
  for(var i=0; i < imageListA.length; i++)
  {
    output += '<img src="' + imageListA[i] + '" />'; 
  }
//second
   for(var j=0; j < imageListB.length; j++)
  {
    output += '<img src="' + imageListB[j] + '" />'; 
  }
 //third 
   for(var k=0; k < imageListC.length; k++)
  {
    output += '<img src="' + imageListC[k] + '" />'; 
  }
 //fourth 
   for(var l=0; l < imageListD.length; l++)
  {
    output += '<img src="' + imageListD[l] + '" />'; 
  }
  thumbsDiv.innerHTML = output;
  // thumbsDiv.innerHTML = 
  //'<img src="' + imageList[0] + '" />' +
  // '<img src="' + imageList[1] + '" />' +
  // '<img src="' + imageList[2] + '" />' +
  // '<img src="' + imageList[3] + '" />' +
  // '<img src="' + imageList[4] + '" />' +
  // '<img src="' + imageList[5] + '" />'
   ;  
}

window.onload = function()
{
   buildThumbnails(); //use or fire off this function
   //or invoke the function
};
