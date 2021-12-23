//компьютер загадывает число от 1 до 10 и предлагает на выбор
// пользователю 3 варианта. После клика на какойто, сообщает правильно или нет


(function () {
    let startGameBtn = document.querySelector('.game-block__btn');
    let checkNumbersButtons = document.querySelectorAll('.game-block__number');
    let numberOneBtn = document.querySelector('.number-one__btn');
    let numberTwoBtn = document.querySelector('.number-two__btn');
    let numberThreeBtn = document.querySelector('.number-three__btn');
    let result = document.querySelector('.game-block__result');
    let scoreAndCounter = document.querySelector('.game-block__score');
    let gift = document.querySelector('.game-block__gift');
    let timeStart = Date.now();
    let rightNum = 0;
    let counter = 0;
    let score = 0;
    const MAX_SESSIONS = 5;

    startGameBtn.addEventListener('click', startGameSession);

    function startGameSession() {
        let num1 = getRandomNumber();
        let num2 = getRandomNumber();
        let num3 = getRandomNumber();

        if (num1 !== num2 && num1 !== num3 && num2 !== num3){
            numberOneBtn.innerHTML = num1;
            numberTwoBtn.innerHTML = num2;
            numberThreeBtn.innerHTML = num3;

            let chooseNum = [num1, num2, num3];
            rightNum = chooseNum[Math.floor(Math.random() * chooseNum.length)];
            console.log('rightNum: ', rightNum);
        } else {
            startGameSession()
        }
    }

    function getRandomNumber() {
        let randomNumber = Math.random() * 10;
        let clearNum = Math.round(randomNumber);
        return clearNum;
    }

    checkNumbersButtons.forEach(item => {
        item.addEventListener('click', () => {
            let guessedNumberAsString = item.querySelector('.game-block__item').childNodes[0].nodeValue;
            let guessedNumber = parseInt(guessedNumberAsString);
            if (guessedNumber === rightNum) {
                result.innerHTML = 'win';
                score += 1;
            } else {
                result.innerHTML = 'loose';
            }
            ++counter;
            scoreAndCounter.innerHTML = counter + " : " + score;
            if (counter === MAX_SESSIONS) {
                finishGame();
            } else {
                startGameSession();
            }
        });
    });

    function finishGame() {
        document.addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
        }, true);
        let timeEnd = Date.now() - timeStart;
        return gift.innerHTML = `You just spent ${timeEnd} milliseconds of your life ))`;
    }
})();





