function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByClassName("nav-menu2").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("nav-menu2").style.marginLeft = "0";
}


function searchcard(){
    let input=document.getElementById("search").value.toUpperCase();
     console.log(input);

     const cardcon=document.getElementsByClassName("cards");
     const card=document.getElementsByClassName("card");
     console.log(card);
      
     for (let i = 0; i < card.length; i++) {
        let title=card[i].querySelector(".contain .cards .card  .c-info h1");

        if(title.innerText.toUpperCase().indexOf(input)> -1){
            card[i].style.display="";

        }

        else{
            card[i].style.display="none";
        }
        
        
     }

}

