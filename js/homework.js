const kidQuotes = [
  { text: "Are we there yet?", author: "anonymous"},
  { text: "But I'm not tired!", author: "anonymous"},
  { text: "I don't have anything to do!", author: "anonymous"},
  { text: "I just started this show.", author: "anonymous"},
  { text: "Can I just finish this level?", author: "anonymous"},
  { text: "I can't like this!", author: "anonymous"},
  { text: "But I don't have a job!", author: "anonymous"},
  { text: "But I can't drive!", author: "anonymous"},
  { text: "What's for dinner?", author: "anonymous"},
  { text: "Can I have pancakes and syrup?", author: "anonymous"},
  { text: "I just want to dance!", author: "anonymous"},
  { text: "It won't let me save!", author: "anonymous"}
];

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getNextQuote(quotesSrc) {
  const quote = quotesSrc[getRndInt(1, quotesSrc.length + 1) - 1];
  const quoteElem = document.getElementById('quote');
  quoteElem.innerHTML = quote.text;
}
