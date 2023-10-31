$(document).ready(function(){
    var points = 0;
    var Ellas = 0;
    var pointsplus = 1;
    var autopointPlus = 0;
    var autopointPrice = 100;
    var EllasPrice = 50;
    var pointPrice = 1;
    var menu;


    setInterval(function(){
        points += autopointPlus;
        changeInventory();
        changeMarket();
    }, 1000);

    $("#click").click(function(){
        points += pointsplus;
        changeInventory();
        changeMarket();
    });

    $("#purchase1").click(function(){
        points--;
        pointsplus++;
        autopointPlus++;
        pointPrice ++;
        changeInventory();
        changeMarket();
    });
    $("#purchase10").click(function(){
        points -= 10;
        pointsplus + 10;
        autopointPlus + 10;
        pointPrice + 10;
        changeInventory();
        changeMarket();
    });
    $("#purchaseAll").click(function(){
        pointsplus += pointPrice * points;
        points = 0;
        changeInventory();
        changeMarket();
    });

    $("#autoclicker").click(function(){
        points -= autopointPrice;
        autopointPlus++;
        changeInventory();
        changeMarket();
    });
    $("BuyEllas").click(function(){
        points -= EllasPrice;
        Ellas++;
    });

    $("#buy").click(function(){
        menu = switchMenu("shop");
        changeMarket();
    });

    $("#return").click(function(){
        menu = switchMenu("main");
    })
    function changeInventory(){
        if(points == 1){
            $("#points").html("You have " + points + " Point!");
        }else{
            $("#points").html("You have " + points + " Points!");
        }

        if(Ellas > 0){
            $("#Ellas").html("You have the " + Ellas + " Ella equipted!");//Diff variable to add type of Ella, not number of Ellas
        }else{
            $("#points").html("You have the " + Ellas + " Ella equipted!");
        }
    }
    function changeMarket(){
        if(points > 0){
            $("#purchaseAll").css("display", "block");
        }else{
            $("#purchaseAll").css("display", "none");
        }
        if(points >= 1){
            $("#purchase1").css("display", "block");
        }else{
            $("#purchase1").css("display", "none");
        }
        if(points >= 10){
            $("#purchase10").css("display", "block");
        }else{
            $("#purchase10").css("display", "none");
        }

        if(points >= autopointPrice){
            $("#autoclicker").css("display", "block");
        }else{
            $("#autoclicker").css("display", "none");
        }

        if(points >= EllasPrice){
            $("#buyEllas").css("display", "block");//not sure if this is right, make sure it increases autoclicker, and get rid of autoclicker purchase.
        }else{
            $("#buyEllas").css("display", "none");
        }
    }




        function switchMenu(menu){
            $(".menus").children().css("display", "none");
            $("." + menu).css("display", "block");
            return menu;
        }
    }
);