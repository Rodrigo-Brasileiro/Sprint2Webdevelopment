function mudabanner(){
    const imgElement = document.querySelector(".banner-1 img");
   let nr = Math.ceil(Math.random()*3);
   imgElement.src = `/img/banner-lateral-${nr}.jpg`;
 
    const imgElement2 = document.querySelector(".banner-2 img");
    nr = Math.ceil(Math.random()*3);
    imgElement2.src = `/img/banner-lateral-${nr}.jpg`;
 
    setTimeout(mudabanner, 2000 );
 }


 mudabanner();