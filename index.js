var slider = document.querySelector(".slide");
var oneH4 = document.getElementById("one-h4");
var twoH4 = document.getElementById("two-h4");
var sliderSpan = document.getElementById("slider-span");
var count = 0;
var flex = document.querySelector(".flex");

slider.addEventListener("click", function () {
    if (count == 0) {
        twoH4.style.color = "#333";
        sliderSpan.style.left = "49%";
        oneH4.style.color = "#7c828a";
        flex.style.left = "50px";
        count += 1;
    }
    else {
        oneH4.style.color = "#333";
        sliderSpan.style.left = "1%";
        twoH4.style.color = "#7c828a";
        flex.style.left = "-480px";
        count -= 1;
    }
});

var first = document.getElementById("g");
var second = document.getElementById("gg");
var third = document.getElementById("ggg");

var topFirst = document.getElementById("one");
var topSecond = document.getElementById("two");
var topThird = document.getElementById("three");

topFirst.addEventListener("click", function(){
    second.style.transform = "translate(-50%,-50%) scale(0)";
    third.style.transform = "translate(-50%,-50%) scale(0)";

    setTimeout(() => {
        first.style.transform = "translate(-50%,-50%) scale(1)";
      }, 500);
});
topSecond.addEventListener("click", function(){
    first.style.transform = "translate(-50%,-50%) scale(0)";
    third.style.transform = "translate(-50%,-50%) scale(0)";

    setTimeout(() => {
        second.style.transform = "translate(-50%,-50%) scale(1)";
      }, 500);
});
topThird.addEventListener("click", function(){
    first.style.transform = "translate(-50%,-50%) scale(0)";
    second.style.transform = "translate(-50%,-50%) scale(0)";

    setTimeout(() => {
        third.style.transform = "translate(-50%,-50%) scale(1)";
      }, 500);
});

var copyText = document.getElementById("copy");
copyText.value = "https://www.facebook.com";

function copyPassword(){
    copyText.select();
    document.execCommand("copy");
}