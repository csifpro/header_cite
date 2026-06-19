let level = 0; // починаємо з h1

function addText() {
    const title = document.getElementById("output");
    if (level < 6) {
        level++;
        title.outerHTML = `<h${level} id="output">Heders(h${level})</h${level}>`;
    }   else{
            title.outerHTML = `<p id="end">Кінець</p>`;
            document.body.style.backgroundImage = "url('8aba5216fb8c41d1bf322622e0e95ed6.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
    }

}
