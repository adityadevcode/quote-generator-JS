let quotesList = [
    {
        quote:"wisdom gathered over time I have found that every experience is a form of exploration.",
        author :"Ansel Adams"    
    },
    {
        quote:"The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
        author:"Louise Hay"
    },
    {
        quote:"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author:"Helen Keller"
    },
    {
        quote:"He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
        author:"Pablo Picasso"
    },
    {
        quote:"Imagination is not a talent of some men but is the health of every man.",
        author:"Ralph Waldo Emerson"
    },
    {
        quote:"By living deeply in the present moment we can understand the past better and we can prepare for a better future.",
        author:"Thích Nhất Hạnh"
    },
    {
        quote:"Every man is a volume if you know how to read him. ",
        author:"William Ellery Channing"
    },
    {
        quote:"You do not become good by trying to be good, but by finding the goodness that is already within you.",
        author:"Eckhart Tolle"
    },
]
//idi mana local array create chesi html lo update chesthunam


let quoteEle = document.getElementById("quote")

let authorEle = document.getElementById("author") 
//epudaithe get code ani button meda click chesthamo oka function ani run avali
//quoation content and author content update cheyali
//pyna vuna quotes list edo oka quote vache laga rasanu below quote
//when we click on getquote one function should run and it update quotation content and author

/*
function getLocalQuotes(){
//pyna vunna quotes lo edo index vache laga rayali
//math.random random number generate chesthundi(0,1) 0.89*10=8.9 mathfloor 8
//index value 8 vachindi! quotelist lo edo oka index value vachindi 
//index value vachindi array lo ante ex 7 object value and property vachindi 
let i = Math.floor(Math.random()*quotesList.length)
//index lo vachina object quote property assing chesanu
    quoteEle.innerText = quotesList[i].quote
//highfun peti space ichi object author property assingn chesthunanu
    authorEle.innerText = "--" + " " + quotesList[i].author
//simple ga oka array tisukoni obj laga petanu
}
//here we are adding event onclick when we click quotes will generate
document.getElementById("getQuote").onclick = getLocalQuotes

*/
//api call chesi direct ga display avetaniki below
//fetch method we are passing to api so we can access api
//fetch use chesetapudu we can use promise, asyn/await use cheyachu
//we are using async/await below
// we need to include async before fucntio to use asyn/await
async function quoteAPI(){
//fetch anedi oka method, we can send request to url
//fetch ane method promise return chesthundi
    let response = await fetch("https://api.quotable.io/random");
 //fetch method use chesinapudu result okasari late ravachu inkosari fast ga vasthundi 
 //fetch manamku ok result isthundi ha result tharuvatha    let quote = await response.json()
 //fetch method response console lo check cheddam
 console.log(response)  
 //response 200 vchindi and cors kuda
 //prmosie result ni asyn keyword isthundi dini manam usable format lo convert cheyali ante json method use cheyali
 //manaku vache promise data json format lo vasthundi so
 //json format nundi js object convert cheyali
 let quote = await response.json()
 console.log(quote);
 //ipudu normal obj vachin previously line lo 
 //josm method convert chesam for normal obj
 //manaku obj lo content and author kavali we use them they are keys
 //html lo quotelement edi ayithe vundo ha inner text peduthunam
 quoteEle.innerText = quote.content
 //html lo authorele oka inner text peduthunam
    authorEle.innerText = "--" + " " + quote.author

}

document.getElementById("getQuote").onclick = quoteAPI
/*event listner add chesinapudu function name ivali paranthesis isthe
ha function automatic ga run avuthundi oka sare run avuthindi
-function name ivali paranthesis ivadu

*/