const quizzes = {
    Animals: [
        { question: "Which animal says 'moo'?", image: "assets/images/cow.png", options: ["Cow", "Cat", "Sheep"], answer: "Cow"},
        { question: "Which animal barks?", image: "assets/images/dog.png", options: ["Fish", "Dog", "Pig"], answer: "Dog"},
        { question: "Who is the king of the jumgle?", image: "assets/images/lion.png", options: ["Tiger", "Bear", "Lion"], answer: "Lion"},
        { question: "Which animal lives in water?", image:"assets/images/fish.png", options: ["Frog", "Fish", "Bird"], answer: "Fish"},
        { question: "Which animal says 'meow'?", image: "assets/images/cat.png", options: ["Chicken", "Cat", "Horse"], answer: "Cat"},
        { question: "Which one flies?", image: "assets/images/bird.png", options: ["Penguin", "Girafe", "Bird"], answer: "Bird"},
        { question: "Which animal hops?", image: "assets/images/kangaroo.png", options: ["Elephant", "Kangaroo", "Monkey"], answer: "Kangaroo"},
        { question: "Which animal has a trunk?", image: "assets/images/elephant.png", options: ["Cow", "Lion", "Elephant"], answer: "Elephant"},
        { question: "Which animal lays eggs?", image: "assets/images/hen.png", options: ["Hen", "Goat", "Dog"], answer: "Hen"},
        { question: "Fastest land animal?", image: "assets/images/cheetah.png", options: ["Zebra", "Horse", "Cheetah"], answer: "Cheetah"},
    ],
    Colors: [
        { question: "What color is the sky?", image: "assets/images/sky.png", options: ["Orange", "Blue", "Red"], answer: "Blue"},
        { question: "What color is grass?", image: "assets/images/grass.png", options: ["Pink", "Yellow", "Green"], answer: "Green"},
        { question: "What color is a banana?", image: "assets/images/banana.png", options: ["Black", "White", "Yellow"], answer: "Yellow"},
        { question: "What color is an apple?", image:"assets/images/apple.png", options: ["Purple", "Red", "Grey"], answer: "Red"},
        { question: "What color is a lemon?", image: "assets/images/lemon.png", options: ["Yellow", "Purple", "Cream"], answer: "Yellow"},
        { question: "What color are strawberries?", image: "assets/images/strawberrry.png", options: ["Red", "White", "Pink"], answer: "Red"},
        { question: "What color is chocolate?", image: "assets/images/chocolate.png", options: ["Black", "Blue", "Brown"], answer: "Brown"},
        { question: "What color is the sun?", image: "assets/images/sun.png", options: ["Orange", "Yellow", "Purple"], answer: "Yellow"},
        { question: "Which is a warm color?", image: "assets/images/red.png", options: ["Red", "Blue", "Black"], answer: "Red"},
        { question: "What do you get if you mix red and blue?", image: "assets/images/purple.png", options: ["Green", "Purple", "Orange"], answer: "Purple"},
        
    ],
    Numbers: [
        { question: "What comes after 4?", image: "assets/images/5.png", options: ["2", "5", "7"], answer: "5"},
        { question: "What comes before 9?", image: "assets/images/8.png", options: ["9", "6", "8"], answer: "8"},
        { question: "How many legs does a spider have?", image: "assets/images/8.png", options: ["8", "10", "12"], answer: "8"},
        { question: "What is 2 + 2?", image: "assets/images/4.png", options: ["5", "3", "4"], answer: "4"},
        { question: "What is 5 - 3?", image: "assets/images/2.png", options: ["3", "2", "5"], answer: "2"},
        { question: "What comes after 9?", image: "assets/images/10.png", options: ["8", "4", "10"], answer: "10"},
        { question: "Which number is smallest?", image: "assets/images/1.png", options: ["5", "1", "9"], answer: "1"},
        { question: "How many fingers do you have?", image: "assets/images/10.png", options: ["10", "8", "11"], answer: "10"},
        { question: "What is 3 + 3?", image: "assets/images/6.png", options: ["9", "5", "6"], answer: "6"},
        { question: "What comes before 1?", image: "assets/images/0.png", options: ["2", "0", "11"], answer: "0"},
        
    ],
    Shapes: [
        { question: "Which has 3 sides?", image: "assets/images/triangle.png", options: ["Triangle", "Circle", "Square"], answer: "Triangle"},
        { question: "Which is round?", image: "assets/images/circle.png", options: ["Rectangle", "Circle", "Hexagon"], answer: "Circle"},
        { question: "Which has 4 equal sides?", image: "assets/images/square.png", options: ["Pentagon", "Square", "Triangle"], answer: "Square"},
        { question: "Which has 6 sides?", image: "assets/images/hexagon.png", options: ["Hexagon", "Octagon", "Diamond"], answer: "Hexagon"},
        { question: "Stop sign shape?", image: "assets/images/octagon.png", options: ["Octagon", "Circle", "Rectangle"], answer: "Octagon"},
        { question: "Which has corners?", image: "assets/images/square.png", options: ["Square", "Cube", "Pyramid"], answer: "Square"},
        { question: "Which looks like a ball?", image: "assets/images/circle.png", options: ["Circle", "Square", "Oval"], answer: "Circle"},
        { question: "Shape of a pyramid?", image: "assets/images/triangle.png", options: ["Triangle", "Oval", "Hexagon"], answer: "Triangle"},
        { question: "Which has 4 sides?", image: "assets/images/rectangle.png", options: ["Rectangle", "Oval", "Circle"], answer: "Rectangle"},
        { question: "Which has no corners?", image: "assets/images/circle.png", options: ["Circle", "Square", "Triangle"], answer: "Circle"},
        
    ],

    };

    let quizData = [];
    let currentQuestion = 0;
    let score = 0;
     
    
    const correctSound = new Audio('assets/sounds/correct.mp3');
    const wrongSound = new Audio('assets/sounds/wrong.mp3');
    correctSound.preload = "auto";
    wrongSound.preload = "auto";

    function startQuiz(topic) {
        quizData = quizzes[topic];
        currentQuestion =score = 0;

        document.getElementById("topic-select").classList.add("hide");
        document.getElementById("quiz-box").classList.remove("hide");
        document.getElementById("result").classList.add("hide");

        loadQuestion();
    }
     
    function loadQuestion() {
        const quiz = quizData[currentQuestion];
        const questionEl = document.getElementById("question");
        const imageEl = document.getElementById("question-img");
        const optionsEl = document.getElementById("options");
        const nextBtn = document.getElementById("next-btn")

        questionEl.textContent = quiz.question;
        imageEl.innerHTML = `<img src="${quiz.image}" alt="${quiz.question}">`;
    
        optionsEl.innerHTML = "";
        document.getElementById("feedback"). textContent = "";
        nextBtn.classList.add("hide");

        const utter = new speechSynthesisUtterance(quiz.question);
        utter.lang = "en-US";
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);

        quiz.options.forEach(opt => {
        const btn = document.createElement("button");
        btn .textContent = opt;
        btn.addEventListener("click", () => checkAnswer(btn, opt === quiz .answer));
        optionsEl.appendChild(btn)
        });
        

        function checkAnswer(button, isCorrect) {
            window.speechSynthesis.cancel();
        document.querySelectorAll("#options button").forEach(b => b.disabled = true);

        if (isCorrect) {
            button.classList.add("correct");
            document.getElementById("feedback").textContent = "Great job!";
            correctSound.play();
            score++;
        }else {
            button.classList.add("wrong");
            document.getElementById("feedback").textContent = "Oops! Try again!";
            wrongSound.play();
            highlightCorrect();
        }
            document.getElementById("next-btn").classList.remove("hide");

    }

    function highlightCorrect(){
        const correct = quizData[currentQuestion].answer;
        document.querySelectorAll("#options button").forEach(b => {
            if (b.textContent=== correct) b.classList.add("correct");
        });
    }

     document.getElementById("next-btn") .addEventListener("click",  () => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
     });
     
     function showResult() {
        document.getElementById("quiz-box").classList.add("hide");
        document.getElementById("result").classList.remove("hide");
        document.getElementById("score").textContent = score;
        document.getElementById("total").textContent = quizData.length;

        const percent = (score / quizData.length) * 100;
        if (percent >= 80 && typeof confetti === "function") {
            confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
        }
        showStars(percent);
    }
        
    function showStars(percent) {
        const starsEl = document.getElementById("stars");
        starsEl.innerHTML = "";

        let starCount = 0;
       if ( percent ===100) starCount = 3;
        else if (percent >= 80) starCount = 2;
        else if (percent >= 50) starCount = 1;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("span");
            star.classList.add("star");
            star.innerHTML = "&#9733;";
            starsEl.appendChild(star);
        }
        if (starCount === 0) starsEl.textContent = "No stars thid time. Keep Trying!";
    }

    } 

    