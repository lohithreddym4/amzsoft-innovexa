const slider=document.querySelector('#img-slider');
const imgpaths=['./src/image-3@2x.png','./src/image-4@2x.png','./src/image-5@2x.png']

setInterval(()=>{
    slider.style.backgroundImage=`url(${imgpaths[Math.floor(Math.random()*3)]})`;

    },3000);