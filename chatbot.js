document.addEventListener("DOMContentLoaded",()=>{
    const inputField = document.getElementById("message");
    const send= document.getElementById("send");
inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    if(input!=''){
        output(input);
    }
  }
});
    send.addEventListener("click",()=>{
        let input = inputField.value;
    inputField.value = "";
    if(input!=''){
        output(input);
    }
    });

    const utterances = [
 
        ["how are you", "how is life", "how are things"],
        ["hi", "hey", "hello", "good morning", "good afternoon"],
        ["what are you doing", "what is going on", "what is up"],
        ["how old are you"],
        ["who are you", "are you human", "are you bot", "are you human or bot"],
        ["who created you", "who made you"],
        [
          "your name please",
          "your name",
          "may i know your name",
          "what is your name",
          "what call yourself"
        ],
        ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
        ["bad", "bored", "tired"],
        ["help me", "tell me story", "tell me joke"],
        ["ah", "yes", "ok", "okay", "nice"],
        ["bye", "good bye", "goodbye", "see you later"],
        ["what should i eat today"],
        ["what", "why", "how", "where", "when"],
        ["no", "not sure", "maybe", "no thanks"],
        [""],
        ["haha", "ha", "lol", "hehe", "funny", "joke"],
        ["what are the different type of courses offered","different types of courses","types of courses","courses offered","courses","courses offered"],
        ["How can we Connect","contact details","support"],
        ["is there any personal mentorship","personal mentorship","mentorship"],
        ["what is selection rate","selection","toppers","trust","selections"],["last date for iiser","Application form","last date to submit applications"]
      ];
      
      // Possible responses corresponding to triggers
      
      const answers = [
         [
          "Fine... how are you?",
          "Pretty well, how are you?",
          "Fantastic, how are you?"
        ],
        [
          "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
        ],
        [
          "Nothing much",
          "About to go to sleep",
          "Can you guess?",
          "I don't know actually"
        ],
        ["I am infinite"],
        ["I am just a bot", "I am a bot. What are you?"],
        ["The one true God, JavaScript"],
        ["I am Assist"],
        ["Have you ever felt bad?", "Glad to hear it"],
        ["Why?", "Why? You shouldn't!"],
        ["What about?", "Once upon a time..."],
        ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
        ["Bye", "Goodbye", "See you later"],
        ["Pasta", "Burger"],
        ["Great question"],
        ["That's ok", "What do you want to talk about?"],
        ["Please say something :("],
        ["Haha!", "Good one!"],
        ["There are 8 different types of courses Offered  IISC IAT NEST ISI/CMI IIT-JAM IACS CUET ICAR",],
        ["Call us: +917570020363 or Email us: support@sciastra.com"],
        ["Yes, Click of the 'Book Mentorship' option above"],
        ["There are 400+ Selections, 200+ in IISERs, 30+ in NISER/CEBS, 9+ in ISI/CMI"],["IISER 2023 Application Form is now released on the official website iiseradmission.in. The last date to fill IISER 2023 application form is May 25, 2023. IISER 2023 application fee is INR 2000 for General categories/OBC candidates. IISER 2023 Application fee for SC/ST/PwD is INR 2000."]
      ];
      
      // Random for any other user input
      
      const alternatives = [
        "Try again"
      ];
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("container");
  messagesContainer.innerHTML+=`<div class="user">
  <p class="u-msg">${input}</p>
</div>`;


    messagesContainer.innerHTML+=` <div class="bot">
<img style="width: 30px; height: 30px" src="img/chat.png" alt="" />
<p class="b-msg">${product}</p>
</div>`;
}

})