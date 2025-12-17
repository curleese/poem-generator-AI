function displayPoem(response) {

    console.log(" poem generatated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event){
    event.preventDefault();

    let instructuctionInput =document.querySelector("#user-instructions");
    let apiKey= "286970co712d5931342a43a2t1f9cb24";
    let prompt= `User instructions: Generate a French poem about ${instructuctionInput.value}`;
    let context= "you are a romantic poem expert and lover to write short poems. You mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions.";
    let apiURL= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    axios.get(apiURL).then(displayPoem);

    
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);