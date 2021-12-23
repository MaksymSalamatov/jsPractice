class Game {
    constructor() {
        this.startGameBtn = document.querySelector('.game-block__btn');
        this.checkNumbersButtons = document.querySelectorAll('.game-block__number');
        this.numberOneBtn = document.querySelector('.number-one__btn');
        this.numberTwoBtn = document.querySelector('.number-two__btn');
        this.numberThreeBtn = document.querySelector('.number-three__btn');
        this.result = document.querySelector('.game-block__result');
        this.scoreAndCounter = document.querySelector('.game-block__score');
        this.gift = document.querySelector('.game-block__gift');
        this.welcomeGame();
    }

    welcomeGame() {
        this.timeStart = Date.now();
        this.rightNum = 0;
        this.counter = 0;
        this.score = 0;

        this.MAX_SESSIONS = 5;

        this.startGameBtn.addEventListener('click', this.startGameSession.bind(this));
    }

    startGameSession(){
        console.log(this.score, 'score1')
        this.num1 = this.getRandomNumber();
        this.num2 = this.getRandomNumber();
        this.num3 = this.getRandomNumber();

        if(this.num1 !== this.num2 && this.num1 !== this.num3 && this.num2 !== this.num3) {
            console.log(this.score, 'score2')
            this.numberOneBtn.innerHTML = this.num1;
            this.numberTwoBtn.innerHTML = this.num2;
            this.numberThreeBtn.innerHTML = this.num3;

            this.chooseNum = [this.num1, this.num2, this.num3];
            this.rightNum = this.chooseNum[Math.floor(Math.random() * this.chooseNum.length)];
            console.log('rightNum: ', this.rightNum);
            this.checkButtons()
        } else{
            this.startGameSession()
        }
    }

    getRandomNumber() {
        this.randomNumber = Math.random() * 10;
        this.clearNum = Math.round(this.randomNumber);
        return this.clearNum;
    }

    checkButtons(){
        console.log(this.score, 'score3')
        this.checkNumbersButtons.forEach(item => {
            item.addEventListener('click', () => {
                this.guessedNumberAsString = item.querySelector('.game-block__item').childNodes[0].nodeValue;
                this.guessedNumber = parseInt(this.guessedNumberAsString);
                if (this.guessedNumber === this.rightNum) {
                    this.result.innerHTML = 'win';
                    this.counter++;
                    this.score++;
                } else {
                    this.result.innerHTML = 'loose';
                }
                this.scoreAndCounter.innerHTML = this.counter + " : " + this.score;
                if (this.counter === this.MAX_SESSIONS) {
                    this.finishGame();
                } else {
                    this.startGameSession();
                }
            });
        });
    }

    finishGame() {
        document.addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
        }, true);
        this.timeEnd = Date.now() - this.timeStart;
        return this.gift.innerHTML = `You just spent ${this.timeEnd} milliseconds of your life ))`;
    }
}

const game = new Game()