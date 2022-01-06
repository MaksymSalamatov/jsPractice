window.addEventListener('load', function () {
    let secret = document.querySelector('#secret'),
        hint = document.querySelector('#hint'),
        letter = document.querySelector('#letter'),
        tryIt = document.querySelector('#tryit'),
        again = document.querySelector('#again'),
        numRetries = document.querySelector('#numretries'),
        res = document.querySelector('#result');

    let poleChudes = {
        words: [
            ['car','It is a wheeled motor vehicle used for transportation'],
            ['house', 'It is place where you can live'],
            ['dog', 'It is pet, not cat'],
            ['cat', 'It is pet, not dog'],
            ['food', 'It is stuff, which you can eat'],
            ['table', 'It is furniture, can be in office or kitchen'],
            ['sun', 'It is big, yellow circle in the sky'],
            ['water', 'It is liquid, you cant live without'],
            ['basketball', 'It is sport, with ball, nba']
        ],
        selected: null,
        getWord: function () {
            this.selected = this.words[Math.floor(Math.random() * this.words.length)];
        },
        checkLetter: function () {
            let chr = letter.value.toLowerCase(),
                cur = secret.value,
                i = 0,
                str = '';
            for (; i < this.selected[0].length; i++) {
                str += this.selected[0][i] === chr ? chr : cur[i];
            }
            letter.value = '';
            secret.value = str;
            this.counter();
            if (str === this.selected[0]) this.finish();
        },
        counter: function () {
            numRetries.value = +numRetries.value + 1;
        },
        finish: function () {
            res.querySelector('label').textContent = 'Congratulations! Number of attempt:';
            res.style.display = 'block';
        },
        init: function () {
            res.style.display = 'none';
            numRetries.value = 0;
            let word = this.getWord();
            secret.value = Array(this.selected[0].length + 1).join('*');
            hint.textContent = this.selected[1];
        },
    };
    poleChudes.init();
    tryIt.addEventListener('click', function () {
        poleChudes.checkLetter();
    }, false);
    again.addEventListener('click', function () {
        poleChudes.init();
    }, false);

}, false);



