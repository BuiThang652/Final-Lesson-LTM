const startQuiz = document.querySelector('.start_quiz');
const quizBox = document.querySelector('.quiz_box');
const resultBox = document.querySelector('.result_box');
const nextBtn = document.querySelector('.next_btn');
const optionList = document.querySelector('.option_list');
const timeCount = document.querySelector('.timer_sec');
const quitQuiz = document.querySelector('.quit');
const scoreText = document.querySelector('.score_text')


let queCount = 0;
let queNumb = 1;
let counter;
let timeValue = 60;
let userScore = 0;

// vào làm
startQuiz.onclick = () => {
    quizBox.classList.add('activeQuiz');
    showQuetions(0);
    queCounter(1);
    startTimer(60);
}

// Thoát ra start quiz
quitQuiz.onclick = () => {
    window.location.reload();
}

// Nếu nhấn tiếp theo thì chuyển câu hỏi
nextBtn.onclick = () => {
    if (queCount < questions.length - 1) {
        queCount++;
        queNumb++;
        showQuetions((queCount));
        queCounter(queNumb);
        clearInterval(counter);
        startTimer(timeValue);
        nextBtn.style.display = "none";
    } else {
        showResultBox();
    }
}


// Hiển thị Câu hỏi
function showQuetions(index) {
    const queText = document.querySelector('.que_text');
    queText.innerHTML = `<span>${questions[index].question}</span>`;
    optionList.innerHTML = `
        <div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>
    `;
    // tạo even click câu trả lời đúng
    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}


function optionSelected(answer) {
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    if (userAns == correctAns) {
        userScore += 1;
        // Đáp án đúng
        answer.classList.add("correct");
    } else {
        answer.classList.add("incorrect");

        // Nếu sai chọn đáp án đúng
        for (let i = 0; i < optionList.children.length; i++) {
            if (optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute("class", "option correct");
            }
        }
    }


    // Chọn 1 đáp án
    for (let i = 0; i < optionList.children.length; i++) {
        optionList.children[i].classList.add("disabled")
    }
    // chọn đáp án mới hiện nút tiếp theo
    nextBtn.style.display = "block";
}

// Hiển thị số câu
function queCounter(index) {
    const totalQue = document.querySelector('.total_que');
    totalQue.innerHTML = `<span>Bạn làm đến câu thứ <p>${index}</p> trong số <p>${questions.length}</p> câu!!!</span>`
}

// Thời gian bắt đầu
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;

        // thời gian nhỏ hơn 0 thì dừng
        if (time < 0) {
            clearInterval(counter);

            // Tự hiện đáp án khi hết thời gian

            let correctAns = questions[queCount].answer;

            for (let i = 0; i < optionList.children.length; i++) {
                if (optionList.children[i].textContent == correctAns) {
                    optionList.children[i].setAttribute("class", "option correct");
                }
            }

            // Chọn 1 đáp án
            for (let i = 0; i < optionList.children.length; i++) {
                optionList.children[i].classList.add("disabled")
            }
            // chọn đáp án mới hiện nút tiếp theo
            nextBtn.style.display = "block";

        }

    }
}

// Sau khi làm xong => kết quả
function showResultBox() {
    const point = (100 / (questions.length)) * userScore;
    quizBox.classList.remove('activeQuiz');
    resultBox.classList.add('activeResult');
    scoreText.innerHTML = `
        <span>Bạn làm được ${point}%</span>
    `;
}