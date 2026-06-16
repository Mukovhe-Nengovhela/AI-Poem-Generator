function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let prompt = `user Instructions: Generate a English Poem  about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poem. Your mission is to generate a 4 line poem in basic HTML and separate each line with <br/>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with `Mukovhe Nengovhela` inside a <strong> element at the end of the poem and Not at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class = "generating"> Generating the English Poem ${instructionsInput.value} </div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
