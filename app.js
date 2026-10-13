const name = document.getElementById("name");
const age = document.getElementById("age");
const submit = document.getElementById("submit");
const response = document.getElementById("response");

submit.addEventListener("click", () => {

    if (age.value <= 3){
        response.innerHTML = name.value+ ", your ticket is free";
        console.log("Free")
    }
    else if (age.value >= 4 && age.value <= 12){
        response.innerHTML = name.value+ ", your ticket costs $10"
        console.log("$10")
    }
    else if (age.value >= 13 && age.value <= 64){
        response.innerHTML = name.value+ ", your ticket costs $20"
        console.log("$20")
    }
    else if (age.value >= 65){
        response.innerHTML = name.value+ ", your ticket costs $12"
        console.log("$12")
    }
})