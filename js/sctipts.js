$(document).ready(function () {
    setNextRandomQuestion()
});

$(".btn").click(function (){
    setNextRandomQuestion()
    return false
});

function setNextRandomQuestion() {
    fetch('source.txt')
        .then(response => response.text())
        .then(text => {
            let arr = text.split("\n")
            let randomNum = getRandomInt(0, arr.length)
            $(".question-text")[0].textContent = arr[randomNum]
        });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// Panda Eye move
$(document).on( "mousemove", function( event ) {
    let dw = $(document).width() / 15;
    let dh = $(document).height() / 15;
    let x = event.pageX/ dw;
    let y = event.pageY/ dh;
    $('.eye-ball').css({
        width : x,
        height : y
    });
});



