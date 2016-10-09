var clickEvt = null;
var diceGame = {
        components: {
            button: null,
            rounds: [],
        },
        timeToWin: {
            startTime: null,
            winTime: null,
            rolls: null,
            timeDiff: function() {
              var diff = (this.winTime - this.startTime)/1000;
              var diffElement = document.getElementById('triesAndTimer');
              diffElement.innerHTML = "It took you " + diff + " seconds and " + this.rolls + " rolls.";
            }
        },
        values: {
            gameStartTime: null,
            dice1: null,
            dice2: null,
            dieOutcome: null,
        },

    // object storing date/time
    timeString: function() {
        // Get date object
        var date = new Date();
        // Specify parts of date object
        var yearCE = date.getFullYear();
        var monthNum = date.getMonth() + 1;
        var dayNum = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var seconds = date.getSeconds();
        // Make time of 10:5 appear as 10:05
        if (minute < 10) {
            minute = '0' + minute;
        }
        // Organize date string
        var dateAndTime = ' ' + yearCE + '-' + monthNum + '-' + dayNum + ' at ' + hour + ':' + minute;
        this.displayTime(dateAndTime);
    },
    displayTime: function(timeString) {
        var timeContainer = document.getElementById('startTime');
        timeContainer.innerHTML = timeString;
    },
    // Generate pseudorandom natural numbers of a 6 sided die
    randomDice: function() {
        var randomDice1 = Math.floor(Math.random() * 6) + 1;
        var randomDice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('rollResult1').innerHTML = randomDice1;
        document.getElementById('rollResult2').innerHTML = randomDice2;
        this.values.dice1 = randomDice1;
        this.values.dice2 = randomDice2;
        this.values.dieOutcome = randomDice1 + randomDice2;
        this.components.rounds.push(this.values.dieOutcome);
        // Winner displays if total = 7 or 11
        if (this.values.dieOutcome === 7 || this.values.dieOutcome === 11) {
            document.getElementById('winOrLose').innerHTML = 'You win!';
            this.timeToWin.winTime = new Date().getTime();
            this.timeToWin.rolls = this.components.rounds.length;
            this.timeToWin.timeDiff();
            document.getElementById('rollDice').removeEventListener('click', clickEvt);
        } else {
            document.getElementById('winOrLose').innerHTML = 'Try again.';
        }
    },
    init: function() {
      // var self = this;
        this.timeString();
        this.timeToWin.startTime = new Date().getTime();
        clickEvt = this.randomDice.bind(this);
        document.getElementById('rollDice').addEventListener('click', clickEvt);
    }
};
diceGame.init();



// array of game rounds

// function (method since it's in an object) for rolling dice

// display start time when page loads

// random number when "rollDice" is clicked

// Try again if total of roll is not 7 or 11
