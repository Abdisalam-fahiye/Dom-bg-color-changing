








document.addEventListener("DOMContentLoaded", () => {

    // let button = document.querySelector("button");

    // button.addEventListener("mouseover", () => {
    // document.body.style = "Background-color: red";
    // button.innerHTML = "Hey Boom!";
    // });

    // button.addEventListener("mouseleave", () => {
    // document.body.style = "Background-color: white";
    // button.innerHTML = "Hover Me for Magic!";
    // });

    let typing = document.querySelector("#typing");
    let clone = document.querySelector("h1");

    typing.addEventListener("keyup", (event) => {
        if(event.key === "r") {
            document.body.style = "background-color: red";
        }
        else if(event.key === "b") {
            document.body.style = "background-color: blue";
        }
        else if(event.key === "y") {
            document.body.style = "background-color: yellow";
        }
        else if(event.key === "g") {
            document.body.style = "background-color: green";
        }
        else if(event.key === "p") {
            document.body.style = "background-color: pink";
        }
        else if(event.key === "c") {
            document.body.style = "background-color: crimson";
        }
        else if(typing.value === "") {
            document.body.style = "background-color: white";
        }
        else if(typing.value === "o") {
            document.body.style = "background-color: orange";
        } 
    })

});


