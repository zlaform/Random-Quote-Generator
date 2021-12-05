/*
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
*/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

// Object array to store all of the quotes
const quotes = [
  { quote:'The journey of a thousand miles begins with one step.',
    source:'Lao Tzu',
    year: "",
    citation: ""
  },
  { quote:'Life is what happens when you’re busy making other plans.',
  source:'John Lennon',
    year: 1957,
    citation: ""
  },
  { quote:'You miss 100 percent of the shots you never take.',
    source:'Wayne Gretzky',
    year: 1983,
    citation: ""
  },
  { quote:'You only live once, but if you do it right, once is enough.',
    source:'Mae West',
    year: "",
    citation: ""
  },
  {quote:'Get busy living or get busy dying.',
    source:'Stephen King',
    year: "",
    citation: `<p><cite>Darabont, Frank, director. The Shawshank Redemption. Columbia, 1994.</cite></p>`
  },
  { quote:'Tis better to have loved and lost than to have never loved at all.',
    source:'Alrded Lord Tennyson',
    year: "",
    citation: ""
  }
] 
/***
 * `getRandomQuote` function
***/
//This will generate a random quote to pass to the PrintQuote 
function getRandomQuote (){
  let random = 0;
for ( let i = 0; i < quotes.length; i++){
   random = quotes[Math.floor( Math.random() * (5)+1)];
}
return random;
}
/***
 * `printQuote` function
***/
// This is to select a random color and set it as the background 
function background() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var background = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.background = background; 
}
//Set an interval of 10 seconds before refreshing the quote and color
setInterval(function(){ 
  document.getElementById("load-quote").click();
},10000);

//prints the quote to div based on what is provided from getRandomQuote
function printQuote () {
  let print = '';
  for ( let i = 0; i < quotes.length; i++){
    let random = getRandomQuote();
    let quote = `   
       <p class="quote">${random.quote}</h2>
        <p class="source"> ${random.source}</p>`;
    if (random.year !== "" &&  random.citation !== ""){
      quote = `<p class="quote">${random.quote}</h2>
        <p class="source"> ${random.source} ~ ${random.year}
        ${random.citation}`;
    }
    else if (random.year !== "" && random.citation === ""){
      quote = `<p class="quote">${random.quote}</h2>
      <p class="source"> ${random.source} ~ ${random.year}`;
    }
    else{
      quote = `<p class="quote">${random.quote}</h2>
        <p class="source"> ${random.source}
        ${random.citation}`;
  }
    print = document.querySelector('div').innerHTML = `${quote}`;
    background();
  }
  return print;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

click = document.getElementById('load-quote').addEventListener("click", printQuote, false);
