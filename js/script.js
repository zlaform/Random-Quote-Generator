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
  {quote:'The journey of a thousand miles begins with one step.',
  author:'Lao Tzu',
  source: "",
  year: "",
  citation: ""
  },
  { quote:'Life is what happens when you’re busy making other plans.',
    author:'John Lennon',
    source: 'Readers Digest',
    year: 1957,
    citation: ""
  },
  { quote:'You miss 100 percent of the shots you never take.',
    author:'Wayne Gretzky',
    source: 'Hockey News',
    year: 1983,
    citation: ""
  },
  { quote:'You only live once, but if you do it right, once is enough.',
    author:'Mae West',
    source: "",
    year: "",
    citation: ""
  },
  {quote:'Get busy living or get busy dying.',
   author:'Stephen King',
   source: 'The Shawshank Redemption',
   year: "",
    citation: `<p><cite>Darabont, Frank, director. The Shawshank Redemption. Columbia, 1994.</cite></p>`
  },
  { quote:'Tis better to have loved and lost than to have never loved at all.',
    author:'Alrded Lord Tennyson',
    source: "",
    year: "",
    citation: ""
  }
] 
/***
 * `getRandomQuote` function
***/

// Generates a random quote and checks it for the year, source and citation and prints accordingly 
function getRandomQuote (){
  let quote = '';
  for ( let i = 0; i < quotes.length; i++){
    let random = quotes[Math.floor( Math.random() * (5)+1)];
   
    quote = `
       <p class="quote">${random.quote}</h2>
      <p class="source"> ${random.author} `;
    if (random.year !== "" ){
      quote += ` - ${random.year}`;
    }
    if (random.source !== ""){
      quote += ` ~ ${random.source}</p>`
    }
    if (random.citation !== ""){
        quote += `${random.citation}`
    }
  }
  return quote;
  
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
  document.querySelector('div').innerHTML = `${getRandomQuote()} `;
  background();
  
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

click = document.getElementById('load-quote').addEventListener("click", printQuote, false);
