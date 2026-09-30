function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 1000000000) + 1;
    document.getElementById("randomNumber").innerHTML = "Подготовка результата…";
    
    
    setTimeout(function() {
        document.getElementById("randomNumber").innerHTML = "Случайное число: " + randomNumber;
    }, 5000);
}