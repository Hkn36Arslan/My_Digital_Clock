
var saat=document.getElementById("span1");
var dakika=document.getElementById("span2");
var saniye=document.getElementById("span3");
var temp=document.getElementById("span4");

function clock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let t="AM";
    if(h<13){
        t="pm";
    }

    h= h < 10 ? "0"+h : h;
    m= m < 10 ? "0"+m : m;
    s= s < 10 ? "0"+s : s;

    saat.innerText=h;
    dakika.innerText=m;
    saniye.innerText=s;
    temp.innerText=t;

    setTimeout(()=>{
        clock();
    },1000);

}

clock();