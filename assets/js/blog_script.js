

window.addEventListener("load", () => {
    let postButton = document.getElementById("postButton")
    let postList = document.querySelector("body > main > ul");
    let authorEingabe = document.getElementById("authorEingabe");
    let titelEingabe =document.getElementById("titelEingabe");
    let nachrichtEingabe = document.getElementById("nachrichtEingabe");

});
    let insertPost = (nachricht, titel, author) => {
        let neuerPost = document.createElement("li");
        postList.appendChild(liElement);

        let neuerTitel = document.createElement("h1");
        neuerTitel.textContent = titel;
        neuerPost.appendChild(neuerTitel);

        let neuerAbsatz = document.createElement("br");

        let neueNachricht = document.createElement("p");
        neueNachricht.textContent = nachricht;
        neuerPost.appendChild(neueNachricht);

        let neuerAuthor = document.createElement("p");
        neuerAuthor.textContent = "von "+nachircht;
        neuerPost.appendChild(neuerAuthor);

        // let deleteElement = document.createElement("a");
        // deleteElement.textContent = "Löschen";
        // deleteElement.classList.add("delete");
        // liElement.appendChild(deleteElement);

        // deleteElement.addEventListener("click", () => {
        //     liElement.parentNode.removeChild(liElement);
        // });
    };

    postButton.addEventListener("click", () => {

       // Memotext vom Anwender abfragen
       if (nachrichtEingabe.value === null || titelEingabe.value === null || authorEingabe.value===null) return;
       let nachricht = nachrichtEingabe.value;
       let author = authorEingabe.value;
       let titel = titelEingabe.value;

       // Neues Element in die HTML-Liste einfügen
       insertPost(nachricht, titel, author);
   });
