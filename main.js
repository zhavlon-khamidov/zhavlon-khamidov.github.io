const photo = document.querySelector('img');

const photo1url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/375px-Shaqi_jrvej.jpg';
const photo2url = 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Towering-CA-Redwoods.jpg?crop=0%2C175%2C2400%2C1260&wid=1200&hei=630&scl=2.0';

/* photo.addEventListener('dblclick',function (){
    alert("Click once");
}); */

photo.ondblclick = () =>{
    if(photo.getAttribute('src') == photo1url){
        photo.setAttribute('src',photo2url);
    }else{
        photo.setAttribute('src',photo1url);
    }
};