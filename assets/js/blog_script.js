
 $(document.getElementById("postButton")).click(function() {
     sendPost();

 });
 

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
         return false;
       }
       let nachricht = nachrichtEingabe.value;
       let author = authorEingabe.value;
       let titel = titelEingabe.value;

       // Neues Element in die HTML-Liste einfügen
       insertPost(nachricht, titel, author, postList);
   };

   function getPostContent(blogID){
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
         neuerAuthor.textContent = "geschrieben von "+xmlhttp.responseText;
         neuerPost.appendChild(neuerAuthor);


       }
     }
     alert("Methode aufgerufen");
     xmlhttp.open("GET","./assets/php/loadBlogeintraege.php?q="+blogID,true);
     xmlhttp.send();

   }
