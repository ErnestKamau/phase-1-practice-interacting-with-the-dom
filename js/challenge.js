// document.addEventListener("DOMContentLoaded", () => {
//     //Timer
//     const counter = document.getElementById("counter")

//     let seconds = 0

//     function updateTimer(){
//         seconds++
//         counter.textContent = seconds
        
//     }
//     updateTimer()
//     setInterval(updateTimer, 1000)

//     //buttons
//     const minus = document.getElementById("minus")
//     const plus = document.getElementById("plus")
//     const heart = document.getElementById("heart")
//     const pause = document.getElementById("pause")
//     const likesList = document.querySelector(".likes");


// })
// Select elements
let counter = document.getElementById("counter");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let heartBtn = document.getElementById("heart");
let pauseBtn = document.getElementById("pause");
let commentForm = document.getElementById("comment-form");
let commentInput = document.getElementById("comment-input");
let commentList = document.getElementById("list");
let likesList = document.querySelector(".likes");

let count = 0;
let isPaused = false;
let likes = {};
let timer = setInterval(updateCounter, 1000);

// Function to update counter every second
function updateCounter() {
    count++;
    counter.innerText = count;
}

// Increment Counter Manually
plusBtn.addEventListener("click", () => {
    count++;
    counter.innerText = count;
});

// Decrement Counter Manually
minusBtn.addEventListener("click", () => {
    count--;
    counter.innerText = count;
});

// "Like" a Number
heartBtn.addEventListener("click", () => {
    if (!likes[count]) {
        likes[count] = 1;
    } else {
        likes[count]++;
    }

    let existingLike = document.getElementById(`like-${count}`);

    if (existingLike) {
        existingLike.innerText = `${count} has been liked ${likes[count]} times`;
    } else {
        let li = document.createElement("li");
        li.id = `like-${count}`;
        li.innerText = `${count} has been liked 1 time`;
        likesList.appendChild(li);
    }
});

// Pause and Resume Counter
pauseBtn.addEventListener("click", () => {
    if (isPaused) {
        timer = setInterval(updateCounter, 1000);
        pauseBtn.innerText = "pause";
        toggleButtons(false);
    } else {
        clearInterval(timer);
        pauseBtn.innerText = "resume";
        toggleButtons(true);
    }
    isPaused = !isPaused;
});

// Function to Enable/Disable Buttons
function toggleButtons(disable) {
    plusBtn.disabled = disable;
    minusBtn.disabled = disable;
    heartBtn.disabled = disable;
}

// Submit Comments
commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let commentText = commentInput.value.trim();

    if (commentText !== "") {
        let p = document.createElement("p");
        p.innerText = commentText;
        commentList.appendChild(p);
        commentInput.value = "";
    }
});

