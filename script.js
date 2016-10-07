var formOne = document.querySelector("[name='answer1']");
var formOneContainer = document.querySelector("#formOneContainer");

var formTwo = document.querySelector("[name='answer2']");
var formTwoContainer = document.querySelector("#formTwoContainer");

var verifyOneButton = document.querySelector("#verifyOne");
var verifyTwoButton = document.querySelector("#verifyTwo");

var sectionTwo = document.querySelector("#taskTwo");
var sectionThree = document.querySelector("#taskThree");


verifyOneButton.addEventListener("click", function(){
    if (formOne.value === "jackoweurodziny") {
        formOneContainer.classList.remove("has-error");
        formOneContainer.classList.add("has-success");

        verifyOneButton.classList.remove("btn-danger");
        verifyOneButton.classList.remove("btn-info");
        verifyOneButton.classList.toggle("btn-success");

        sectionTwo.classList.remove("hide");
    } else {
        formOneContainer.classList.toggle("has-error");
        verifyOneButton.classList.remove("btn-info");
        verifyOneButton.classList.add("btn-danger");
    }
});

verifyTwoButton.addEventListener("click", function(){
    if (formTwo.value === "trzydzieści") {
        formTwoContainer.classList.remove("has-error");
        formTwoContainer.classList.add("has-success");

        verifyTwoButton.classList.remove("btn-danger");
        verifyTwoButton.classList.remove("btn-info");
        verifyTwoButton.classList.add("btn-success");
        
        sectionThree.classList.remove("hide");
    } else {
        formTwoContainer.classList.add("has-error");
        verifyTwoButton.classList.remove("btn-info");
        verifyTwoButton.classList.add("btn-danger");
    }
});