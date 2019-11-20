//Code input text trong ô search box vẫn hiện khi click search
var input = document.getElementById('searchbox');
input.addEventListener('change',function(){
    sessionStorage.setItem('draft',input.value);
});
input.value = sessionStorage.getItem('draft'); 
