const input = document.querySelector('.searchBox input');
const newsWrap = document.getElementById('newsWrap');
const newlist = document.querySelector('.newsList');
const history = document.querySelector('.searchHistory');
const loading = document.querySelector('.loading')
const clip = document.querySelectorAll('.news .clip');
const sort = document.querySelector('.sort > button');
let APIkey = config.apikey;

let filter = '';
let timeout;
const delay = 500;
let page = 0;

function firstInfo(){

}
//포커스 나가면 최근검색어 숨기기
input.addEventListener('focus', function(){
    history.hasChildNodes() === true ? history.style.display = "block" : history.style.display = "none";
})
input.addEventListener('blur', function(){
    history.style.display = "none";
})

input.addEventListener('keyup', function(){
    
    // console.log("타이핑시작");
    sort.classList.remove('check');
    while (newlist.hasChildNodes()) {
        newlist.removeChild(newlist.firstChild);
    }
    //딜레이
    if(timeout){
        clearTimeout(timeout);
    }
    if(input.value !== ' ' && input.value !== ''){
        timeout = setTimeout(function(){
            history.style.display = "block" 
            myFunction();
        }, delay);

        function myFunction(){
            // console.log("검색시작");
            // 최근검색어
            if((history.childElementCount) <= 5){
                const historyList = document.createElement("div");
                historyList.innerText = input.value;
                history.appendChild(historyList);
            }else{
                history.removeChild(
                    history.firstChild
                )
            }
            loading.classList.add('show');
            page = 0;
            document.querySelector('.firstInfo') !== null ? document.querySelector('.firstInfo').remove() : null;
            getPost();
    
        }

        
    }
    
    
})

//스크롤
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight} = document.documentElement;
    // console.log({scrollTop, scrollHeight, clientHeight});

    if(clientHeight + scrollTop >= scrollHeight){
        showLoading();
    }
});
function showLoading(){
    if(document.querySelector('.warning') === null){
        loading.classList.add('show');
        getPost();
    }
    
}
// API검색
function getPost(){
    page += 1;
    filter =  input.value.trim();
    let searchUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=headline:(${filter})&page=${page}&sort=newest&api-key=${APIkey}`
    
    fetch(searchUrl)
    .then(response => response.json())
    .then( data => {
        // console.log(data);
        if(data.response.docs.length === 0 || data.response.docs === undefined){
            if(document.querySelector('.warning') === null){
                const noResult = document.createElement('div');
                noResult.classList.add('warning');
                noResult.innerText = '✋🏻 No search results';
                newlist.appendChild(noResult);
                loading.classList.remove('show');
            }

        }else{
            
            data.response.docs && data.response.docs.map(article => {

                if( article.headline.main === ""){
                null
                }else{
                    const news = document.createElement('div');
                    const clip = document.createElement("button");
                    news.className = 'news';
                    news.innerHTML =
                    `
                    <div class="title">
                        <h3>${article.headline.main}</h3>
                        <a href=${article.web_url} target="_blank"><button>DETAIL ></button></a>
                    </div>
                    <div class="newsInfo">
                        <p>${article.byline.original}</p>
                        <span>${article.pub_date}</span>
                    </div>
                    `
                    newlist.appendChild(news);
                    loading.classList.remove('show');
                          
                    //clip
                    clip.className = 'clip';
                    news.appendChild(clip);
                    clip.addEventListener('click', function(e){
                        clip.classList.toggle('on')
                        e.target.parentNode.classList.toggle('clipon');
                    })
                    
                }
            })
        }
        
    })
}
function clipInfo(){
    const noclip = document.createElement('div');
    noclip.classList.add('warning');
    noclip.innerText = '😅 No bookmarked news';
    newlist.appendChild(noclip);
}


sort.addEventListener('click', function(){
    if(document.querySelector('.clipon') === null){
        document.querySelector('.firstInfo') !== null ? document.querySelector('.firstInfo').classList.toggle('none') : null;
        document.querySelector('.warning') === null ? clipInfo() : document.querySelector('.warning').remove();
    }else{
        document.querySelector('.warning') === null ? null : document.querySelector('.warning').remove();
    }

    sort.classList.toggle('check');
    if(sort.classList.contains('check')){
        const clipnews = document.querySelectorAll('.news');
        for(let i = 0; i<clipnews.length; i++){
            clipnews[i].classList.add('none');
        }
            
    }else{
        const clipnews = document.querySelectorAll('.news');
        for(let i = 0; i<clipnews.length; i++){
            clipnews[i].classList.remove('none');
        }
    }
    
})


