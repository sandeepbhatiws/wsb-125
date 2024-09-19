
var gallery = document.getElementById('gallery');

gallery.addEventListener('click',(event) => {
    if(event.target.tagName == 'IMG'){

        var src = event.target.src;
        document.getElementById('lightbox').classList.add('show');
        document.querySelector('.lightbox_image').src = src;
        console.log(src);
    }
})

document.querySelector('.close').addEventListener('click',(event) =>{
    document.getElementById('lightbox').classList.remove('show');
})