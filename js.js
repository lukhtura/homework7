// First task
let text = document.querySelector('.text');
let colorChangerButton = document.querySelector('.text-color-change-btn');
function changeTextColor() {
    text.classList.toggle('red-text')
};
colorChangerButton.addEventListener('click', changeTextColor)

// Second task
let getLinkButton = document.querySelector('.enter-link-button');
let goToLinkButton = document.querySelector('.go-to-link-button')
let input;
function getLink() {
    input = prompt('Enter a link', 'google.com');
    return input;
};
function goToLink() {
    location.href = `http://${input}`;
}
getLinkButton.addEventListener('click', getLink);
goToLinkButton.addEventListener('click', goToLink);

// Third task
let tableCreatorButton = document.querySelector('.table-creator-button');
let tableHolder = document.querySelector('.third-task');
function createTable() {
    let table = document.createElement('table');
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr')

        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.classList.add('js--td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableHolder.appendChild(table);
    let td = document.querySelectorAll('.js--td');
    let count = 1;
    td.forEach((item) => {
        item.innerHTML = count++;
    });
};

tableCreatorButton.addEventListener('click', createTable);

// fourth task
let imageAddButton = document.querySelector('.image-getter-button');
let imageRemoveButton = document.querySelector('.image-remover-button');
let image;
function getRandomImage() {
    image = document.createElement('img');
    let random;
    function getRandomNumber(min, max) {
        random = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
    };
    image.src = "images/" + getRandomNumber(1, 9) + ".jpg"
    image.style.height = "80vh"
    document.body.appendChild(image);
};

imageAddButton.addEventListener('click', getRandomImage);




