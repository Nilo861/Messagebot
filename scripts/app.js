const inputUserINPUTFIELD = document.getElementById("messageUser");
const messagesDIV = document.getElementById("messages");
//Pfad zu datei mit allen Antworten
const botURL = "../bot/bot.json";

// Alle Bedingungen und Antworten abfragen
fetch(botURL)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    //Auf Enter warten
    inputUserINPUTFIELD.addEventListener("keypress", function(e) {
      if (e.keyCode === 13) nextMessage(data);
    });
  });

function nextMessage(data) {
  const messageUser = inputUserINPUTFIELD.value.toLowerCase();
  // nach input in data suchen
  const messageComputer = data.filter(option => option.input === input)[0];
  console.log(result)
}
