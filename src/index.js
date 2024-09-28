function displayRecipe(response){

    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

function generateRecipe(event) {
    event.preventDefault();

let instructionInput= document.querySelector("#user-instructions");
let apiKey = "ccb24d63o19a32f20843a4t0c39da372";
let prompt = `User instructions: Generat a dessert recipe with ${instructionInput.value}`;
let context ="You are a chef expert and love to share tasty dessert recipes. Your mission is to generate a list of ingredients and step-by-step instructions about how to make the dessert in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions below. Do not include ```html. Sige the recipe with `SheCodes AI` inside a <strong> element. ";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiURL).then(displayRecipe);
}


  let recipeFormElement = document.querySelector("#recipe-generater-form");
  recipeFormElement.addEventListener("submit", generateRecipe);
