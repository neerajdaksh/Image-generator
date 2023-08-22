//variables

const image = document.querySelector('img');

//function

const imageChanger = ()=>{
    let randomNumber = Math.floor(Math.random()*10)+1;
    let path = `images/${randomNumber}.jpg`;
    image.setAttribute('src',path);   
 
}

 
setInterval(imageChanger,1000);


