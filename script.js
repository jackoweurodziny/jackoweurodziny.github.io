var formOne = document.querySelector("[name='answer1']");
var formOneContainer = document.querySelector("#formOneContainer");
var formTwo = document.querySelector("[name='answer2']");
var verifyOneButton = document.querySelector("#verifyOne");
var verifyTwoButton = document.querySelector("#verifyTwo");


verifyOneButton.addEventListener("click", function(){
    if (formOne.value === "jackoweurodziny") {
        formOneContainer.classList.remove("has-error");
        formOneContainer.classList.add("has-success");
    } else {
        formOneContainer.classList.add("has-error");
    }
});