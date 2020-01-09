var pageitem = document.querySelectorAll('.page-item');

var page = Array.prototype.slice.call(pageitem).slice(1,(pageitem.length - 1));

for(let i=0; i<page.length; ++i){
    if(i>4){
        page[i].style.display = 'none';
    }
}

