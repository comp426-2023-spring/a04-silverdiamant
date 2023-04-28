export { rps, rpsls }

function rps(shot) {

    const choices = ["rock", "paper", "scissors"];

    // random generator
    var opponent = choices[Math.floor(Math.random() * choices.length)];

    // function called w/o arg
    if (shot == undefined) {
        return {"player": opponent};
    }

    // function called w arg
    var temp = shot.toLowerCase();

    if ((temp == "rock") || (temp == "scissors") || (temp == "paper")) {
        //generate result
        let result;
        if (temp = opponent) {
            result = "tie";
        } else if (temp == "rock") {
            if (opponent == "scissors") {
                result = "win";
            } else if (opponent == "paper") {
                result = "lose";
            }
        } else if (temp == "scissors") {
            if (opponent == "paper") {
                result = "win";
            } else if (opponent == "rock") {
                result = "lose";
            }
        } else if (temp == "paper") {
            if (opponent == "rock") {
                result = "win";
            } else if (opponent == "scissors") {
                result = "lose";
            }
        }
        return {"player": shot,"opponent": opponent,"result": result};
    }

    // arg other than expected
    if ((temp != "rock") && (temp != "scissors") && (temp != "paper")) {
        console.error('Out of range');
    }

    //if arg is out of range
    if ((temp == "lizard") || (temp == "spock")) {
        console.log([temp] + "is out of range.");
    }
}

function rpsls(shot) {

    const choices = ["rock", "paper", "scissors", "lizard", "spock"];

    // random generator
    var opponent = choices[Math.floor(Math.random() * choices.length)];

    // function called w/o arg
    if (shot == undefined) {
        return {"player": opponent};
    }

    // function called w arg
    var temp = shot.toLowerCase();

    if ((temp == "rock") || (temp == "scissors") || (temp == "paper") || (temp == "lizard") || (temp == "spock")) {
        //generate result
        let result;
        if (temp == opponent) {
            result = "tie";
        } else if (temp == "rock") {
            if (opponent == "scissors" || opponent == "lizard") {
                result = "win";
            } else if (opponent == "paper" || opponent == "spock") {
                result = "lose";
            } 
        } else if (temp == "scissors") {
            if (opponent == "paper" || opponent == "lizard") {
                result = "win";
            } else if (opponent == "rock" || opponent == "spock") {
                result = "lose";
            }
        } else if (temp == "paper") {
            if (opponent == "rock" || opponent == "spock") {
                result = "win";
            } else if (opponent == "scissors" || opponent == "lizard") {
                result = "lose";
            }
        } else if (temp == "lizard") {
            if (opponent == "paper" || opponent == "spock") {
                result = "win";
            } else if (opponent == "rock" || opponent == "scissors") {
                result = "lose";
            }
        } else if (temp == "spock") {
            if (opponent == "rock" || opponent == "scissors") {
                result = "win";
            } else if (opponent == "paper" || opponent == "lizard") {
                result = "lose";
            }
        }
        return {"player": shot,"opponent": opponent,"result": result};
    }

    // arg other than expected
    if ((temp != "rock") && (temp != "scissors") && (temp != "paper") && (temp != "lizard") && (temp != "spock")) {
        console.error('Out of range');
        console.log([temp] + "is out of range.");
    }
}