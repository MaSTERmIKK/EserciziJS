function mostraData() {
    let a = new Date()
    document.getElementById("test").innerHTML = new Date()
}

let b = document.getElementById("bottone")
b.addEventListener("click", mostraData)
