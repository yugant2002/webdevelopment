async function GetNewJoke() {
    

    const responce = await fetch("https://official-joke-api.appspot.com/jokes/random")
    // console.log(responce);

    const data = await responce.json();
    // console.log(data);
    document.getElementById("setup").innerText=data.setup;

    document.getElementById("punchline").innerText=data.punchline;
}