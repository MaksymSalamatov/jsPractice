let selector = (selector) => {
    return document.querySelector(selector)
}
const wordsExplanation = selector('.game__explanation');
const generateBtn = selector('.game__btn');
const gameWord = selector('.game__word');
const gameLetters = selector('.game__letters');

const gameWordsAndDescriptions = {
    'car': 'It is a wheeled motor vehicle used for transportation',
    'house': 'It is place where you can live',
    'dog': 'It is pet, not cat',
    'cat': 'It is pet, not dog',
    'food': 'It is stuff, which you can eat',
    'table': 'It is furniture, can be in office or kitchen',
    'sun': 'It is big, yellow circle in the sky',
    'water': 'It is liquid, you cant live without',
    'basketball': 'It is sport, with ball, nba'
}


generateBtn.addEventListener('click', generateGame);

function generateGame() {
    const randomProperty = function (obj) {
        const keysS = Object.entries(obj)
        return keysS[keysS.length * Math.random() << 0];
    };

    let randomArray = randomProperty(gameWordsAndDescriptions);
    const [key, description] = randomArray

    let separateLetter = key.split('');
    console.log(separateLetter)
    separateLetter.forEach(item => {

        function stringToHTML(str) {
            const dom = document.createElement('div');
            dom.innerHTML = str;
            return dom;
        }

        let setItem = stringToHTML(item)
        console.log(setItem)
        gameWord.innerText = setItem
    })

    wordsExplanation.innerHTML = description;

}



