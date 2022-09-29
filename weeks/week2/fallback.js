// html elements
let name = document.querySelector("#txt-name");
let btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", () => {
    alert("Hello " + name.value);
});