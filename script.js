$(document).ready(function () {
    var numCorrect = 0;
    //makes .button fade in and out
    $('.button').mouseenter(function () {
        $(this).fadeTo("fast", 1);
    });
    $('.button').mouseleave(function () {
        $(this).fadeTo("fast", 0.5);
    });
    //Sets default of visuals
    $("#opTwo").addClass("hidden");
    $("#numFour").addClass("hidden");

    //Determines how many steps there will be based on the button pressed and calls random and display
    $("#button1").click(function () {
        qst.random();
        qst.display(1);
    });
    $("#button2").click(function () {
        qst.random();
        qst.display(2);
    });
    $("#button3").click(function () {
        qst.random();
        qst.display(3);
    });
    $("#button4").click(function () {
        qst.random();
        qst.display(4);
    });

        //takes the user's input and assigns it to a value, calls the function that sees if their answer is correct.
    $('#submit').click(function () {
        var userAns = $('input[name=userAns]').val();
        if(!userAns){
            $(".response").html("Please enter a correct answer or select a number of steps");
        }
        else{
            qst.checkAns(userAns);
        }
    });
    //qst object with all parts of the question and their methods: random & display
    var qst = {
        //Creates variables for each of the numbers, the ops (operations), the positon of the xvariables xOne and xTwo, the answer, how many are correct and the number of steps for the problem.
        nOne: 1,
        nTwo: 1,
        nThree: 1,
        nFour: 1,
        opOne: "+",
        opTwo: "+",
        xOne: 1,
        xTwo: 3,
        x: "x",
        answer: 0,
        numCorrect: 0,
        numstep: 1,
        oneCor: 0,
        twoCor: 0,
        threeCor: 0,
        fourCor: 0,
        ddend: 0,
        dvisor: 0,
        fracans: 0,

        //randomizes all of the different variables.  Including the position of the Xs and the operations.

        random: function () {
            this.nOne = Math.floor((Math.random() * 40) + 1) * this.posNeg();
            this.nTwo = Math.floor((Math.random() * 40) + 1);
            this.nThree = Math.floor((Math.random() * 40) + 1) * this.posNeg();
            this.nFour = Math.floor((Math.random() * 40) + 1);
            var opp1Tog = Math.random();
            if (opp1Tog > 0.50) {
                this.opOne = "+";
            } else {
                this.opOne = "-";
            }
            opp2Tog = Math.random();
            if (opp2Tog > 0.50) {
                this.opTwo = "+";
            } else {
                this.opTwo = "-";
            }
            this.xOne = Math.floor((Math.random() * 3) + 1);
            this.xTwo = Math.floor((Math.random() * 4) + 1);
            while (this.xOne === this.xTwo) {
                this.xTwo = Math.floor(Math.random() * (4 - 1 + 1));
            }
            if (this.xOne === 1 || this.xTwo === 1) {
                this.nOne = Math.floor((Math.random() * 10) + 1) * this.posNeg();
            }
            if (this.xOne === 2 || this.xTwo === 2) {
                this.nTwo = Math.floor((Math.random() * 10) + 1);
            }
            if (this.xOne === 3 || this.xTwo === 3) {
                this.nThree = Math.floor((Math.random() * 10) + 1) * this.posNeg();
            }
            if (this.xOne === 4 || this.xTwo === 4) {
                this.nFour = Math.floor((Math.random() * 10) + 1);
            }
        },
        //Function that is called to allow numbers to be randomly made negative or positive.
        posNeg: function () {
            var flip = Math.floor(Math.random() * (2 - 1 + 1));
            if (flip === 1) {
                return -1;
            } else {
                return 1;
            }
        },
        //Displays each of the numbers, operators.
        display: function (sNum) {
            this.stepNum = sNum;
            $("#numOne").html(this.nOne);
            $("#numTwo").html(this.nTwo);
            $("#numThree").html(this.nThree);
            $("#numFour").html(this.nFour);
            $("#opOne").html(this.opOne);
            $("#opTwo").html(this.opTwo);
            if (sNum === 1 || sNum === 2) {
                if ($("#opTwo").hasClass("hidden") === false) {
                    $("#opTwo").addClass("hidden");
                }
                if ($("#numFour").hasClass("hidden") === false) {
                    $("#numFour").addClass("hidden");
                }
                if(sNum ===1 && $("#round").hasClass("hidden") === false) {
                    $("#round").addClass("hidden");
                }
                if(sNum === 2 && $("#round").hasClass("hidden") === true) {
                    $("#round").removeClass("hidden");
                }



            } else {
                if ($("#opTwo").hasClass("hidden") === true) {
                    $("#opTwo").removeClass("hidden");
                }
                if ($("#numFour").hasClass("hidden") === true) {
                    $("#numFour").removeClass("hidden");
                }
                if ($("#round").hasClass("hidden") === true) {
                    $("#round").removeClass("hidden");
                }
            }


            //places the X depending on the number of steps.
            switch (sNum) {
                case 1:
                    this.nFour = 0;
                    this.xTwo = 5;
                    switch (this.xOne) {
                        case 1:
                            $('#numOne').html(this.x);
                            this.nOne = 1;
                            break;
                        case 2:
                            $('#numTwo').html(this.x);
                            this.nTwo = 1;
                            break;
                        default:
                            $('#numThree').html(this.x);
                            this.nThree = 1;
                            break;
                    }
                    break;
                case 2:
                    this.nFour = 0;
                    this.xTwo = 5;
                    switch (this.xOne) {
                        case 1:
                            $('#numOne').html(this.nOne + this.x);
                            break;
                        case 2:
                            $('#numTwo').html(this.nTwo + this.x);
                            break;
                        default:
                            $('#numThree').html(this.nThree + this.x);
                            break;
                    }
                    break;
                case 3:
                    this.xTwo = 5;
                    switch (this.xOne) {
                        case 1:
                            $('#numOne').html(this.nOne + this.x);
                            break;
                        case 2:
                            $('#numTwo').html(this.nTwo + this.x);
                            break;
                        case 3:
                            $('#numThree').html(this.nThree + this.x);
                            break;
                        default:
                            $('#numFour').html(this.nFour + this.x);
                            break;
                    }
                    break;
                default:
                    switch (this.xOne) {
                        case 1:
                            $("#numOne").html(this.nOne + this.x);
                            break;
                        case 2:
                            $("#numTwo").html(this.nTwo + this.x);
                            break;
                        default:
                            $("#numThree").html(this.nThree + this.x);
                            break;
                    }
                    switch (this.xTwo) {
                        case 1:
                            $("#numOne").html(this.nOne + this.x);
                            break;
                        case 2:
                            $("#numTwo").html(this.nTwo + this.x);
                            break;
                        case 3:
                            $("#numThree").html(this.nThree + this.x);
                            break;
                        default:
                            $("#numFour").html(this.nFour + this.x);
                            break;
                    }
                    break;
            }
            //These calls are so that the numbers are normalized only once, and the answer is stored right after it is displayed.  Thereby making sure that they don't get changed elsewhere.
            qst.normalize();
            qst.findAnswer();
        },
        //allows for less work in checking for answers.  Makes it so you can assume all equations only are addition problems.
        normalize: function () {
            if (this.opOne === "-") {
                this.nTwo = this.nTwo * -1;
            }
            if (this.opTwo === "-") {
                this.nFour = this.nFour * -1;
            }
        },
        //Finds the answer to the equation and stores it in variable qst.answer
        findAnswer: function () {
            var ans = 0;
            var con = 0;
            var variables = 0;
            ans = 0;
            if (this.xOne === 1 || this.xTwo === 1) {
                variables += this.nOne;
            }
            if (this.xOne === 2 || this.xTwo === 2) {
                variables += this.nTwo;
            }
            if (this.xOne === 3 || this.xTwo === 3) {
                variables -= this.nThree;
            }
            if (this.xOne === 4 || this.xTwo === 4) {
                variables -= this.nFour;

            }
            if (this.xOne !== 1 && this.xTwo !== 1) {
                con -= this.nOne;
            }
            if (this.xOne !== 2 && this.xTwo !== 2) {
                con -= this.nTwo;
            }
            if (this.xOne !== 3 && this.xTwo !== 3) {
                con += this.nThree;
            }
            if (this.xOne !== 4 && this.xTwo !== 4) {
                con += this.nFour;
            }
            ans = con / variables;
            ans = Math.round(ans * 10) / 10;
            this.answer = ans.toString();
            ans = 0;
            this.ddend = con;
            this.dvisor = variables;
            for(var i = 0; i<300; i++){
                if(this.ddend % i === 0 && this.dvisor % i === 0){
                    this.ddend = this.ddend/i;
                    this.dvisor = this.dvisor/i;
                }
                if(this.dvisor<0){
                    this.ddend = this.ddend * -1;
                    this.dvisor = this.dvisor * -1;
                }


            }
            this.ddent = this.ddend.toString();
            this.dvisor = this.dvisor.toString();
            this.fracans = (this.ddend + "/" + this.dvisor);



            //Redoes the problem if the answer comes out to Null.  Which only occures with questions like 12 + 12x = 12x + 20
            if(variables === 0){
                qst.random();
                qst.display(this.stepNum);
            }

            con = 0;
            variables = 0;
        },
        //Checks the actual answer against the user's answer
        checkAns: function (uAns) {
            if (uAns === this.answer || uAns === this.fracans) {
                $(".response").html("Great Job!");
                $(".response").removeClass("hidden");
                $("input[name=userAns]").val("");
                numCorrect = numCorrect + 1;
            //Posts the tracker to keep track of how many you've answered correctly
            if(this.stepNum === 1){this.oneCor +=1}
            if(this.stepNum === 2){this.twoCor +=1}
            if(this.stepNum === 3){this.threeCor+=1}
            if(this.stepNum === 4){this.fourCor+=1}
            $("#footer").html("You've answered " + this.oneCor + " one-step questions, " + this.twoCor + " two-step questions, " + this.threeCor + " three-step questions and, " + this.fourCor + " four-step questions.");
            //Creates another problem
                qst.random();
                qst.display(this.stepNum);
            } else if (uAns != answer) {
                $(".response").html("Please try again");
                $(".response").removeClass("hidden");
            } else {
                $("#header").text("It's not working");
            }
        }
    };
});
