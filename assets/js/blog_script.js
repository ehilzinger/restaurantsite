
window.onload = function () {
  getPostContent();
  //alert("JS aufruf hat geklappt");
}

function insertPost(nachricht, titel, author, datum, postList){
  debugger;
    datum = formatiereDatum(datum);
      let datumZuAlt = checkDatumIfNotTooOld(datum);
      if(datumZuAlt==true){
        return false;
      }


    let neuerPost = document.createElement("li");
    neuerPost.classList.add("blogeintrag");
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

    let neuerAuthor = document.createElement("div");
    neuerAuthor.textContent = "geschrieben von "+author;
    neuerAuthor.classList.add("kleinschrift");

    let datumText = document.createElement("div");
    datumText.textContent ="am "+datum;
    datumText.classList.add("kleinschrift");

    let unterschrift = document.createElement("div");
    unterschrift.classList.add("unterschrift");
    unterschrift.appendChild(neuerAuthor);
    unterschrift.appendChild(datumText);
    neuerPost.appendChild(unterschrift);

    };


function checkPost(){
       // Memotext vom Anwender abfragen
       let postButton = document.getElementById("postButton")
       let postList = document.querySelector("body > main > ul");
       let authorEingabe = document.getElementById("authorEingabe");
       let titelEingabe =document.getElementById("titelEingabe");
       let nachrichtEingabe = document.getElementById("nachrichtEingabe");
       debugger;
       if (nachrichtEingabe.value == "" | titelEingabe.value == "" | authorEingabe.value==""){
         popUp();
        // alert("Zuerst alle Felder ausfüllen");
         return false;
       }
       let nachricht = nachrichtEingabe.value;
       let author = authorEingabe.value;
       let titel = titelEingabe.value;


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

        ladeStringsInPost(xmlhttp.responseText);

       }
     }

     xmlhttp.open("GET","./assets/php/loadBlogeintraege.php?q=",true);
     xmlhttp.send();
      //alert("Methode aufgerufen, ajax überstanden");

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
       //debugger;
       if(posZaehler===5){
         insertPost(eintrag[3],eintrag[2], eintrag[1], eintrag[4], postList);
         posZaehler=0;
       }

        let substr = result.substring(i,i+5);
        if(substr==="/%$%/"){
         obereGr=i;
         eintrag[posZaehler]= result.substring(untereGr, obereGr);
         posZaehler++;
         untereGr=obereGr+5;
       }


     }
   };

     function formatiereDatum(datum){
       let jahr =datum.substring(0,4);
       let monat=datum.substring(5,7);
       let tage=datum.substring(8,10);
       let formatiert = tage+"."+monat+"."+jahr;
       return formatiert;

     }
     function checkDatumIfNotTooOld(datum){
       var aktuellesDatum = new Date();
       var dd = aktuellesDatum.getDate();
       var mm = aktuellesDatum.getMonth()+1;
       var yyyy = aktuellesDatum.getFullYear();

       //Wenn der Blogeintrag älter als ein Jahr zurückliegt, wird er nicht in die DOM aufgenommen
       if(yyyy>datum.substring(6,10)){
          return true;
       }
       else {
         return false;
       }
     }
