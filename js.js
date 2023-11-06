let work = [
    "./SOUND/work/1.mp3",
    "./SOUND/work/2.mp3",
    "./SOUND/work/3.mp3",
    "./SOUND/work/4.mp3",
];

function getRandomWork() {
    if (work.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * work.length);
    var selectedSound = work[randomIndex];
    work.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomWork() {
    var work = getRandomWork();
    if (work !== null) {
        var audioPlayer = document.getElementById("workPlayer");
        audioPlayer.src = work;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

let technology = [
    "./SOUND/technology/1.mp3",
    "./SOUND/technology/2.ogg",
    "./SOUND/technology/3.ogg",
    "./SOUND/technology/4.ogg",
];

function getRandomTech() {
    if (technology.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * technology.length);
    var selectedSound = technology[randomIndex];
    technology.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomTech() {
    var technology = getRandomTech();
    if (technology !== null) {
        var audioPlayer = document.getElementById("techPlayer");
        audioPlayer.src = technology;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

let holiday = [
    "./SOUND/holiday/1.ogg",
    "./SOUND/holiday/2.ogg",
    "./SOUND/holiday/3.ogg",
    "./SOUND/holiday/4.ogg",
];

function getRandomHoliday() {
    if (holiday.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * holiday.length);
    var selectedSound = holiday[randomIndex];
    holiday.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomHoliday() {
    var holiday = getRandomHoliday();
    if (holiday !== null) {
        var audioPlayer = document.getElementById("holidayPlayer");
        audioPlayer.src = holiday;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

let product = [
    "./SOUND/product/1.ogg",
    "./SOUND/product/2.ogg",
    "./SOUND/product/3.ogg",
    "./SOUND/product/4.ogg",
];

function getRandomProduct() {
    if (product.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * product.length);
    var selectedSound = product[randomIndex];
    product.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomProduct() {
    var product = getRandomProduct();
    if (product !== null) {
        var audioPlayer = document.getElementById("productPlayer");
        audioPlayer.src = product;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

let history = [
    "./SOUND/history/1.ogg",
    "./SOUND/history/2.ogg",
    "./SOUND/history/3.ogg",
    "./SOUND/history/4.ogg",
];

function getRandomHistory() {
    if (history.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * history.length);
    var selectedSound = history[randomIndex];
    history.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomHistory() {
    var history = getRandomHistory();
    if (history !== null) {
        var audioPlayer = document.getElementById("historyPlayer");
        audioPlayer.src = history;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}

let nature = [
    "./SOUND/nature/1.ogg",
    "./SOUND/nature/2.ogg",
    "./SOUND/nature/3.ogg",
    "./SOUND/nature/4.ogg",
];

function getRandomnature() {
    if (nature.length === 0) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * nature.length);
    var selectedSound = nature[randomIndex];
    nature.splice(randomIndex, 1);
    return selectedSound;
}

function playRandomnature() {
    var nature = getRandomnature();
    if (nature !== null) {
        var audioPlayer = document.getElementById("naturePlayer");
        audioPlayer.src = nature;
        audioPlayer.play();
    } else {
        alert("No more sounds available!");
    }
}