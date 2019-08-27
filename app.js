const displayFactBox = document.querySelector('#display-fact');
const factBtn = document.querySelector('.fact-btn');

const nutritionFacts = [
    'apple',
    'banana',
    'orange',
    'fiber',
    'pears',
    'grapefruit',
    'blueberries',
    'strawberries',
    'pomegranate',
    'peach'
]

const randomChoice =  (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

factBtn.addEventListener('click', () => {
    displayFactBox.textContent = randomChoice(nutritionFacts);
});

const newDiv = document.createElement('div');
const newText = document.createTextNode("Hello World");
newDiv.appendChild(newText);

document.body.insertBefore(newDiv, factBtn.nextSibling);