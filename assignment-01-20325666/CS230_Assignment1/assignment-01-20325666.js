
//sugars
 function increment1(count1) {
        document.getElementById(count1).innerHTML = parseInt(document.getElementById(count1).innerHTML)+1;
        console.log("got here")    
    }
    function decrement1(count1) {
        document.getElementById(count1).innerHTML = parseInt(document.getElementById(count1).innerHTML)-1;
    }
  

//fats
 function increment2(count2) {
        document.getElementById(count2).innerHTML = parseInt(document.getElementById(count2).innerHTML)+1;
        console.log("got here")
    }

    function decrement2(count2) {
        document.getElementById(count2).innerHTML = parseInt(document.getElementById(count2).innerHTML)-1;
    }
//Meat

 function increment3(count3) {
        document.getElementById(count3).innerHTML = parseInt(document.getElementById(count3).innerHTML)+1;
        console.log("got here")
    }

    function decrement3(count3) {
        document.getElementById(count3).innerHTML = parseInt(document.getElementById(count3).innerHTML)-1;
    }
//Milk
 function increment4(count4) {
        document.getElementById(count4).innerHTML = parseInt(document.getElementById(count4).innerHTML)+1;
        console.log("got here")
     
    }

    function decrement4(count4) {
        document.getElementById(count4).innerHTML = parseInt(document.getElementById(count4).innerHTML)-1;
    }
//Wholemeal
 function increment5(count5) {
        document.getElementById(count5).innerHTML = parseInt(document.getElementById(count5).innerHTML)+1;
        console.log("got here")
     
    }
    function decrement5(count5) {
        document.getElementById(count5).innerHTML = parseInt(document.getElementById(count5).innerHTML)-1;
    }

//Veggies
 function increment6(count6) {
        document.getElementById(count6).innerHTML = parseInt(document.getElementById(count6).innerHTML)+1;
        console.log("got here")
     
    }

    function decrement6(count6) {
        document.getElementById(count6).innerHTML = parseInt(document.getElementById(count6).innerHTML)-1;
    }

function hoveron(plus,minus)
{
    document.getElementById(plus).style.visibility="visible";
    document.getElementById(minus).style.visibility="visible";
    
}
function hoveroff(plus,minus)
{
    document.getElementById(plus).style.visibility="hidden";
    document.getElementById(minus).style.visibility="hidden";
    
}

function Hide()
{
     document.getElementById('p1').style.visibility="hidden";
    document.getElementById('m1').style.visibility="hidden";
     document.getElementById('p2').style.visibility="hidden";
    document.getElementById('m2').style.visibility="hidden";
     document.getElementById('p3').style.visibility="hidden";
    document.getElementById('m3').style.visibility="hidden";
     document.getElementById('p4').style.visibility="hidden";
    document.getElementById('m4').style.visibility="hidden";
     document.getElementById('p5').style.visibility="hidden";
    document.getElementById('m5').style.visibility="hidden";
     document.getElementById('p6').style.visibility="hidden";
    document.getElementById('m6').style.visibility="hidden";
}

function increaseAnimation(id) {
    var size = 1;
    var velocity = 0.05;
    var elem = document.getElementById(id);


    function iterate() {
        elem.style.transform = "scale(" + size + ")";

        size += velocity;

        if (size > 2 || size < 1) {
            velocity *= -1; // velocity reflected
        }
    }
}



