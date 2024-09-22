function generateRecipe(event) {
    event.preventDefault();
  
    new Typewriter("#recipe", {
      strings: "The answer will show here.",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

  let recipeFormElement = document.querySelector("#recipe-generater-form");
  recipeFormElement.addEventListener("submit", generateRecipe);
  