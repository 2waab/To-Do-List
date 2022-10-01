let input = document.querySelector('input[type="text"]'),
send = document.querySelector('.add-to-result'),
result = document.querySelector(".result");
let textInInput = "";
input.oninput = () => {
    textInInput = input.value;
};
send.addEventListener('click', () => {
    if (textInInput !== "") {
        // Creat Div & Many Element in Div
        let content = document.createElement("div");
        let paragraph = document.createElement("p");
        let divOfBtn = document.createElement("div");
        let btnDelete = document.createElement("i");
        let btnCheck = document.createElement("i");
        let textParagraph = document.createTextNode(`${textInInput}`);
        btnDelete.className = "fa-solid fa-circle-xmark delete";
        btnCheck.className = "fa-solid fa-check-circle check";
        content.className = "cont-result";
        // Add Text In Elements
        paragraph.appendChild(textParagraph);
        divOfBtn.appendChild(btnCheck);
        divOfBtn.appendChild(btnDelete);
        content.appendChild(paragraph);
        content.appendChild(divOfBtn);
        result.appendChild(content);
        setTimeout(() => {
            content.classList.add("show");
        }, 1);
        btnCheck.addEventListener('click', () => {
            paragraph.classList.toggle("check");
        });
        btnDelete.addEventListener('click', () => {
            content.remove();
        });
    };
});

let them = document.querySelector(".them");
let body = document.querySelector("body");

them.onclick = () => {
    body.classList.toggle("dark");
};
