// Hardcoded values for the season and plant type
const season = prompt("Enter the desired season (e.g., summer, winter):");
const plantType = prompt("Enter the plant type (e.g., flower, vegetable):");

// Function to get advice based on the season
function getSeasonAdvice(season) {
  if (season === "summer") {
    return "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    return "Protect your plants from frost with covers.\n";
  } else {
    return "No advice for this season.\n";
  }
}

// Function to get advice based on the plant type
function getPlantAdvice(plantType) {
  if (plantType === "flower") {
    return "Use fertiliser to encourage blooms.";
  } else if (plantType === "vegetable") {
    return "Keep an eye out for pests!";
  } else {
    return "No advice for this type of plant.";
  }
}

// Log the generated advice to the console
const advice = getSeasonAdvice(season) + getPlantAdvice(plantType);
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.

// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
