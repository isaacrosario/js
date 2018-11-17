window.onload = num();
alert("Please upvote if you like my code.");

function num()
{


	var n=0;
	function add(){
   n++;

   //divide bu 16 to n get hexa code
   var f1 = Math.floor(n/17); //not understand anything
   var f2 = Math.floor(f1/17);
   
   var h1 = n % 17;
   var h2 = f1 %17;
   var h3 = f2%17;


   if (n<10) 
   {n ="00" + n;}
else if (n<100) {n ="0" +n;}
else if (n==1000) { n=000;}

p.innerHTML ="background-color : #"+n;
f.innerHTML = h3 + ":" + h2 +":" +h1;
document.body.style.background = "#"+n;



   }
setInterval(add ,10);
}
