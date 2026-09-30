function fetchData() {
    fetch("/api/data")
        .then(response => response.json())
        .then(data => {
            document.getElementById("data-container").innerText = "Демонстрационные данные получены.";
        })
        .catch(error => console.error("Не удалось получить данные:", error));
}
