

//Get quote from Api
async function getQuote(){
    const proxyUrl = 'https://fathomless-beyond-19635.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        getQuote();
        console.log('damn its a error',error);
}
}
//On load
getQuote();