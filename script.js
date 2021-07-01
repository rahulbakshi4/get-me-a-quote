const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete(){
    if(!loader.hidden){
        quoteContainer.hidden = false; 
        loader.hidden = true;
    }
}

//Get quote from Api

async function getQuote(){
    loading();
    const apiUrl = "https://api.quotable.io/random";
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();

        if(data.author === ''){
            authorText.innerText = 'Unknown';
        } else{
            authorText.innerText = data.author;
        }

        if(data.content.length > 120){
            quoteText.classList.add('long-quote');
        }else{
            quoteText.classList.remove('long-quote');
        }
        
        quoteText.innerText = data.content;
         
        complete();
    }catch(error){
        getQuote();
       
}
}
function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl,'_blank'); 
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click',tweetQuote);

//On load
 getQuote();
