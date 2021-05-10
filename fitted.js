function addItem(cardid,tabid){
    // Change Outfit Preview Window
    switch(tabid){
        case "socks":
            // Get the src path
            var fitpath = document.getElementById(cardid).getAttribute("src");
            fitpath = fitpath.split('-');
            // Create new path to replace the current slot
            var newpath = fitpath[0] + "-" + fitpath[1] + ".png";
            // Replace src
            document.getElementById("sock-slot").setAttribute("src", newpath);
            break;
        case "bottoms":
            // Get the src path
            var fitpath = document.getElementById(cardid).getAttribute("src");
            fitpath = fitpath.split('-');
            // Create new path to replace the current slot
            var newpath = fitpath[0] + "-" + fitpath[1] + ".png";
            // Replace src
            document.getElementById("bottom-slot").setAttribute("src", newpath);
            break;
        case "":
    }
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
        case "":
    }
}