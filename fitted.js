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
        case "shirts":
            // Get the src path
            var fitpath = document.getElementById(cardid).getAttribute("src");
            fitpath = fitpath.split('-');
            // Create new path to replace the current slot
            var newpath = fitpath[0] + "-" + fitpath[1] + ".png";
            // Replace src
            document.getElementById("top-slot").setAttribute("src", newpath);
            break;
    }
}

function changeTab(tabid){
    // Change Item Select Cards
    switch(tabid){
        case "socks":
            document.getElementById("card1").setAttribute("src","Clothing/black-socks-display.png");
            document.getElementById("card1").setAttribute("onclick","addItem('card1', 'socks')");
            document.getElementById("card2").setAttribute("src","Clothing/grey-socks-display.png");
            document.getElementById("card2").setAttribute("onclick","addItem('card2', 'socks')");
            document.getElementById("card3").setAttribute("src","Clothing/white-socks-display.png");
            document.getElementById("card3").setAttribute("onclick","addItem('card3', 'socks')");
            document.getElementById("card4").setAttribute("src","Clothing/sand-socks-display.png");
            document.getElementById("card4").setAttribute("onclick","addItem('card4', 'socks')");
            break;
        case "bottoms":
            document.getElementById("card1").setAttribute("src","Clothing/black-pants-display.png");
            document.getElementById("card1").setAttribute("onclick","addItem('card1', 'bottoms')");
            document.getElementById("card2").setAttribute("src","Clothing/grey-pants-display.png");
            document.getElementById("card2").setAttribute("onclick","addItem('card2', 'bottoms')");
            document.getElementById("card3").setAttribute("src","Clothing/green-pants-display.png");
            document.getElementById("card3").setAttribute("onclick","addItem('card3', 'bottoms')");
            document.getElementById("card4").setAttribute("src","Clothing/blue-pants-display.png");
            document.getElementById("card4").setAttribute("onclick","addItem('card4', 'bottoms')");
            break;
        case "shirts":
            document.getElementById("card1").setAttribute("src","Clothing/black-shirt-display.png");
            document.getElementById("card1").setAttribute("onclick","addItem('card1', 'shirts')");
            document.getElementById("card2").setAttribute("src","Clothing/grey-shirt-display.png");
            document.getElementById("card2").setAttribute("onclick","addItem('card2', 'shirts')");
            document.getElementById("card3").setAttribute("src","Clothing/white-shirt-display.png");
            document.getElementById("card3").setAttribute("onclick","addItem('card3', 'shirts')");
            document.getElementById("card4").setAttribute("src","Clothing/sand-shirt-display.png");
            document.getElementById("card4").setAttribute("onclick","addItem('card4', 'shirts')");
            break;
    }
}