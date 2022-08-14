const darkBtn = document.querySelector('.lightBtn');
const wrap = document.getElementById('wrap');


darkBtn.addEventListener('click', function(){
    wrap.classList.toggle('dark');
    if(wrap.classList.contains('dark')){
        document.body.style.backgroundColor = "#445760"
    }else{
        document.body.style.backgroundColor = "#fff"
    }
    
})