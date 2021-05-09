var fitpath = "";
function addItem(cardid){
    // Change Outfit Preview Window
    document.getElementById("outfitpreview").setAttribute("src", document.getElementById(cardid).getAttribute("src"));
}

function changeTab(tabid){
    // Change Item Select Cards
    switch(tabid){
        case "socks":
            document.getElementById("card1").setAttribute("src","Clothing/black-socks.png");
            document.getElementById("card2").setAttribute("src","Clothing/grey-socks.png");
            document.getElementById("card3").setAttribute("src","Clothing/white-socks.png");
            document.getElementById("card4").setAttribute("src","Clothing/khaki-socks.png");
            break;
        case "pants":
            document.getElementById("card1").setAttribute("src","Clothing/black-pants.png");
            document.getElementById("card2").setAttribute("src","Clothing/grey-pants.png");
            document.getElementById("card3").setAttribute("src","Clothing/green-pants.png");
            document.getElementById("card4").setAttribute("src","Clothing/blue-pants.png");
            break;
    }
}