'use strict';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function applyRandomTransform(element) {
    var transfRot = randomNumber(0, 110) * (Math.random() < 0.5 ? 1 : -1);
    var transfScale = randomNumber(2, 10) / 10;

    var transformStyle = "rotate(" + transfRot + "deg) scale(" + transfScale + ")";
    element.style.webkitTransform = transformStyle;
    element.style.MozTransform = transformStyle;
    element.style.msTransform = transformStyle;
    element.style.OTransform = transformStyle;
    element.style.transform = transformStyle;
}

function positionElementRandomly(element, minLeft, maxLeft, minTop, maxTop) {
    element.style.left = randomNumber(minLeft, maxLeft) + "%";
    element.style.top = randomNumber(minTop, maxTop) + "%";
}

function fadeInAndOut(element, fadeInDuration, fadeOutDuration, minDelay, maxDelay, callback) {
    $(element).fadeIn(fadeInDuration).delay(randomNumber(minDelay, maxDelay)).fadeOut(fadeOutDuration, callback);
}

function pawAnimation(pawElementID, fadeInDuration, fadeOutDuration, minDelay, maxDelay, callback) {
    var pawElement = document.getElementById(pawElementID);

    if (!pawElement) {
        console.error("Element with ID '" + pawElementID + "' not found.");
        return;
    }

    pawElement.style.visibility = "visible";
    positionElementRandomly(pawElement, 5, 95, 5, 95);
    applyRandomTransform(pawElement);

    fadeInAndOut("#" + pawElementID, fadeInDuration, fadeOutDuration, minDelay, maxDelay, callback);
}

function paw1() {
    pawAnimation("paw", 2000, 2000, 1, 16000, function() {
        setTimeout(paw1, randomNumber(1, 8000));
    });
}

function paw2() {
    pawAnimation("paw2", 2000, 2000, 1, 11000, function() {
        setTimeout(paw2, randomNumber(1, 12000));
    });
}

// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function() {
    paw1();
    paw2();
});
