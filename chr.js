
function next(){
  
  fl=document.getElementsByClassName("oth1").length;
  f1=6;
  for(nm=0;nm<f1;nm++){
  document.getElementsByClassName("two")[nm].innerHTML=(document.getElementsByClassName('oth1')[nm].innerHTML*document.getElementById("othT").innerHTML).toFixed(2);
  
  document.getElementsByClassName("three")[nm].innerHTML=(document.getElementsByClassName('oth1i')[nm].innerHTML*document.getElementById("othTi").innerHTML).toFixed(2);
  
  
  document.getElementsByClassName("ttwo")[nm].innerHTML=(document.getElementsByClassName('oth')[nm].innerHTML*document.getElementById("oty").innerHTML).toFixed(2);
  
  
  document.getElementsByClassName("tywo")[nm].innerHTML=(document.getElementsByClassName('o1')[nm].innerHTML*document.getElementById("oT").innerHTML).toFixed(2);
  
  
  document.getElementsByClassName("wo")[nm].innerHTML=(document.getElementsByClassName('ot1')[nm].innerHTML*document.getElementById("otT").innerHTML).toFixed(2);
  
  
  }
  
  /*
  document.getElementById("othN").innerHTML=(document.getElementsByClassName("oth1")[0].innerHTML*document.getElementById("othT").innerHTML).toFixed(2);
  */
  
  
document.getElementById("thN").innerHTML= (document.getElementsByClassName("first")[0].innerHTML*0.71).toFixed(2);



document.getElementById("thP").innerHTML=(document.getElementsByClassName("first")[0].innerHTML*0.05).toFixed(2);


document.getElementById("thR").innerHTML=(document.getElementsByClassName("first")[0].innerHTML*0).toFixed(2);


document.getElementById("thNPR").innerHTML=(document.getElementsByClassName("first")[0].innerHTML*0.76).toFixed(2);

document.getElementById("thPh").innerHTML=(document.getElementsByClassName("first")[0].innerHTML*0.24).toFixed(2);


document.getElementById("thA").innerHTML=(document.getElementsByClassName("first")[0].innerHTML*0).toFixed(2);
document.getElementById("thA").innerHTML=(document.getElementsByClassName("first")[0].innerHTML*0.).toFixed(2);



document.getElementById("mtN").innerHTML=(document.getElementsByClassName("first")[1].innerHTML*0.26).toFixed(2);


document.getElementById("mtP").innerHTML=(document.getElementsByClassName("first")[1].innerHTML*0.21).toFixed(2);


document.getElementById("mtR").innerHTML=(document.getElementsByClassName("first")[1].innerHTML*0.03).toFixed(2);


document.getElementById("mtNPR").innerHTML=(document.getElementsByClassName("first")[1].innerHTML*0.5).toFixed(2);




document.getElementById("mtPh").innerHTML=(document.getElementsByClassName("first")[1].innerHTML*0.36).toFixed(2);

document.getElementById("mtA").innerHTML=(document.getElementsByClassName("first")[1].innerHTML*0.02).toFixed(2);


document.getElementById("slN").innerHTML=(document.getElementsByClassName("first")[2].innerHTML*0.1).toFixed(2);

document.getElementById("slP").innerHTML=(document.getElementsByClassName("first")[2].innerHTML*0.2).toFixed(2);

document.getElementById("slR").innerHTML=(document.getElementsByClassName("first")[2].innerHTML*0).toFixed(2);

document.getElementById("slNPR").innerHTML=(document.getElementsByClassName("first")[2].innerHTML*0.3).toFixed(2);

document.getElementById("slPh").innerHTML=(document.getElementsByClassName("first")[2].innerHTML*0.7).toFixed(2);



document.getElementById("slA").innerHTML=(document.getElementsByClassName("first")[2].innerHTML*0).toFixed(2);



document.getElementById("cN").innerHTML=(document.getElementsByClassName("first")[3].innerHTML*0.5).toFixed(2);



document.getElementById("cP").innerHTML=(document.getElementsByClassName("first")[3].innerHTML*0.25).toFixed(2);



document.getElementById("cR").innerHTML=(document.getElementsByClassName("first")[3].innerHTML*0).toFixed(2);



document.getElementById("cNPR").innerHTML=(document.getElementsByClassName("first")[3].innerHTML*0.75).toFixed(2);



document.getElementById("cPh").innerHTML=(document.getElementsByClassName("first")[3].innerHTML*0.25).toFixed(2);




document.getElementById("cA").innerHTML=(document.getElementsByClassName("first")[3].innerHTML*0).toFixed(2);



document.getElementById("miN").innerHTML=(document.getElementsByClassName("first")[4].innerHTML*0.52).toFixed(2);



document.getElementById("miP").innerHTML=(document.getElementsByClassName("first")[4].innerHTML*0.1).toFixed(2);



document.getElementById("miR").innerHTML=(document.getElementsByClassName("first")[4].innerHTML*0.02).toFixed(2);


document.getElementById("miNPR").innerHTML=(document.getElementsByClassName("first")[4].innerHTML*0.64).toFixed(2);


document.getElementById("miPh").innerHTML=(document.getElementsByClassName("first")[4].innerHTML*0.36).toFixed(2);


document.getElementById("miA").innerHTML=(document.getElementsByClassName("first")[4].innerHTML*0).toFixed(2);



document.getElementById("plN").innerHTML=(document.getElementsByClassName("first")[5].innerHTML*0.2).toFixed(2);


document.getElementById("plP").innerHTML=(document.getElementsByClassName("first")[5].innerHTML*0.2).toFixed(2);


document.getElementById("plR").innerHTML=(document.getElementsByClassName("first")[5].innerHTML*0).toFixed(2);


document.getElementById("plNPR").innerHTML=(document.getElementsByClassName("first")[5].innerHTML*0.4).toFixed(2);



document.getElementById("plPh").innerHTML=(document.getElementsByClassName("first")[5].innerHTML*0.6).toFixed(2);


document.getElementById("plA").innerHTML=(document.getElementsByClassName("first")[5].innerHTML*0).toFixed(2);


document.getElementById("ssN").innerHTML=(document.getElementsByClassName("first")[6].innerHTML*0.25).toFixed(2);


document.getElementById("ssP").innerHTML=(document.getElementsByClassName("first")[6].innerHTML*0.25).toFixed(2);



document.getElementById("ssR").innerHTML=(document.getElementsByClassName("first")[6].innerHTML*0).toFixed(2);




document.getElementById("ssNPR").innerHTML=(document.getElementsByClassName("first")[6].innerHTML*0.5).toFixed(2);



document.getElementById("ssPh").innerHTML=(document.getElementsByClassName("first")[6].innerHTML*0.5).toFixed(2);



document.getElementById("ssA").innerHTML=(document.getElementsByClassName("first")[6].innerHTML*0).toFixed(2);




document.getElementById("coN").innerHTML=(document.getElementsByClassName("first")[7].innerHTML*0.1).toFixed(2);



document.getElementById("coP").innerHTML=(document.getElementsByClassName("first")[7].innerHTML*0.2).toFixed(2);



document.getElementById("coR").innerHTML=(document.getElementsByClassName("first")[7].innerHTML*0.05).toFixed(2);  



document.getElementById("coNPR").innerHTML=(document.getElementsByClassName("first")[7].innerHTML*0.35).toFixed(2);  



document.getElementById("coPh").innerHTML=(document.getElementsByClassName("first")[7].innerHTML*0.65).toFixed(2);  



document.getElementById("coA").innerHTML=(document.getElementsByClassName("first")[7].innerHTML*0).toFixed(2); 


}

fir=document.getElementsByClassName("first").length;


function fuck(){
  
  



ii=0;
for(i=0;i<fir;i++){
  //document.getElementsByClassName("tot")[0].innerHTML
  ii+=parseFloat(document.getElementsByClassName("first")[i].innerHTML, 10);
}

document.getElementsByClassName("tot")[0].innerHTML=ii.toFixed(2);






im=0;
for(ni=0;ni<fir;ni++){
  im+=parseFloat(document.getElementsByClassName("second")[ni].innerHTML, 10);
}

document.getElementsByClassName("tot")[1].innerHTML=im.toFixed(2);






imm=0;
for(xi=0;xi<fir;xi++){
  imm+=parseFloat(document.getElementsByClassName("third")[xi].innerHTML, 10);
}

document.getElementsByClassName("tot")[2].innerHTML=imm.toFixed(2);



imx=0;
for(bi=0;bi<fir;bi++){
  imx+=parseFloat(document.getElementsByClassName("fourth")[bi].innerHTML, 10);
}

document.getElementsByClassName("tot")[3].innerHTML=imx.toFixed(2);



iam=0;
for(xni=0;xni<fir;xni++){
  iam+=parseFloat(document.getElementsByClassName("fifth")[xni].innerHTML, 10);
}

document.getElementsByClassName("tot")[4].innerHTML=iam.toFixed(2);


itm=0;
for(nin=0;nin<fir;nin++){
  itm+=parseFloat(document.getElementsByClassName("sixth")[nin].innerHTML, 10);
}

document.getElementsByClassName("tot")[5].innerHTML=itm.toFixed(2);




xim=0;
for(nxi=0;nxi<fir;nxi++){
  xim+=parseFloat(document.getElementsByClassName("seventh")[nxi].innerHTML, 10);
}

document.getElementsByClassName("tot")[6].innerHTML=xim.toFixed(2);


}