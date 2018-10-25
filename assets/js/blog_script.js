
 // $(document.getElementById("postButton")).click(function() {
 //     sendPost();
 //
 // });
window.onload = function () {
  getPostContent();
  alert("JS aufruf hat geklappt");
}

function insertPost(nachricht, titel, author, postList){
        let neuerPost = document.createElement("li");
        neuerPost.classList.add("blogeintrag");
      //  postList.appendChild(neuerPost);
        postList.insertBefore(neuerPost, postList.childNodes[0])



        let neuerTitel = document.createElement("h1");
        neuerTitel.textContent = titel;
        neuerPost.appendChild(neuerTitel);

        let Absatz = document.createElement("br");
        neuerPost.appendChild(Absatz);

        let neueNachricht = document.createElement("p");
        neueNachricht.textContent = nachricht;
        neuerPost.appendChild(neueNachricht);

          let neuerAbsatz2 = document.createElement("br");
          neuerPost.appendChild(neuerAbsatz2);

        let neuerAuthor = document.createElement("p");
        neuerAuthor.textContent = "geschrieben von "+author;
        neuerPost.appendChild(neuerAuthor);



        // let deleteElement = document.createElement("a");
        // deleteElement.textContent = "Löschen";
        // deleteElement.classList.add("delete");
        // liElement.appendChild(deleteElement);

        // deleteElement.addEventListener("click", () => {
        //     liElement.parentNode.removeChild(liElement);
        // });
    };

//    postButton.addEventListener("click", () => {
function sendPost(){
       // Memotext vom Anwender abfragen
       let postButton = document.getElementById("postButton")
       let postList = document.querySelector("body > main > ul");
       let authorEingabe = document.getElementById("authorEingabe");
       let titelEingabe =document.getElementById("titelEingabe");
       let nachrichtEingabe = document.getElementById("nachrichtEingabe");
       if (nachrichtEingabe.value === "" || titelEingabe.value === "" || authorEingabe.value===""){
         popUp();
         alert("Zuerst alle Felder ausfüllen");
         return;
       }
       let nachricht = nachrichtEingabe.value;
       let author = authorEingabe.value;
       let titel = titelEingabe.value;

       // Neues Element in die HTML-Liste einfügen
       insertPost(nachricht, titel, author, postList);
   };

   function getPostContent(){
     if (window.XMLHttpRequest)
     {
       // AJAX nutzen mit IE7+, Chrome, Firefox, Safari, Opera
       xmlhttp=new XMLHttpRequest();
     }
     else
     {
       // AJAX mit IE6, IE5
       xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
     }
     xmlhttp.onreadystatechange=function()
     {
       if (xmlhttp.readyState==4 && xmlhttp.status==200)
       {
         let postList = document.querySelector("body > main > ul");
        // insertPost("ja es tut", "ja es tut", xmlhttp.responseText, postList);
        ladeStringsInPost(xmlhttp.responseText);

       }
     }

     xmlhttp.open("GET","./assets/php/loadBlogeintraege.php?q=",true);
     xmlhttp.send();
      alert("Methode aufgerufen, ajax überstanden");

   }

   function ladeStringsInPost(result){
    let postList = document.querySelector("body > main > ul");
     let untereGr=0;
     let obereGr;
     let posZaehler=0;
     let i;
     var eintrag = ['blogID', 'name', 'titel', 'nachrichten', 'datum'];
     //eintrag[0]= BlogID
     //eintrag[1]=name
     //eintrag[2]= titel
     //eintrag[3]= nachricht
     //eintrag[4]= datum

     for(i=0; i < result.length; i++){
       debugger;
       if(posZaehler===5){
         insertPost(eintrag[3],eintrag[2], eintrag[1], postList);
         posZaehler=0;
       }
       // if(result.substring(i,(i+1))==="//"){
        let substr = result.substring(i,i+2);
        if(substr==="//"){
         obereGr=i;
         eintrag[posZaehler]= result.substring(untereGr, obereGr);
         posZaehler++;
         untereGr=obereGr+2;
       }


     }
   }
