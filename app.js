$(document).ready(function(){
    var points = 0;
    var pointsplus = 1;
    var autopointPlus = 0;
    var Ellatype = " ";
    var Ellas1Price = 100;
    var Ellas2Price = 1000;
    var Ellas3Price = 10000;
    var Ellas4Price = 100000;
    var Ellas5Price = 1000000;
    var pointPrice = 1;
    var autopointSpeed = 1000;
    var menu;


    setInterval(function(){
        points += autopointPlus;
        changeInventory();
        changeMarket();
    }, autopointSpeed);

    $("#click").click(function(){
        points += pointsplus;
        changeInventory();
        changeMarket();
    });

    $("#purchase1").click(function(){
        points--;
        pointsplus++;
        pointPrice ++;
        changeInventory();
        changeMarket();
    });
    $("#purchase10").click(function(){//add a purchase 100, and more if needed
        points -= 10;
        pointsplus += 10;
        pointPrice += 10;
        changeInventory();
        changeMarket();
    });
    $("#purchaseAll").click(function(){
        pointsplus += pointPrice * points;
        points = 0;
        changeInventory();
        changeMarket();
    });

    $("#buyEllas1").click(function(){//this should be the new autoclicker.
        points -= Ellas1Price;
        autopointPlus++;
        autopointSpeed += 1000;
        Ellatype = "Sad";
        changeInventory();
        changeMarket();
    });
    $("#buyEllas2").click(function(){
        points -= Ellas2Price;
        autopointPlus += 10;
        autopointSpeed += 5000;
        Ellatype = "Happy";
        changeInventory();
        changeMarket();
    });
    $("#buyEllas3").click(function(){
        points -= Ellas3Price;
        autopointPlus += 100;
        autopointSpeed += 10000;
        Ellatype = "Confused";
        changeInventory();
        changeMarket();
    });
    $("#buyEllas4").click(function(){
        points -= Ellas4Price;
        autopointPlus += 1000;
        autopointSpeed += 15000;
        Ellatype = "Suprised";
        changeInventory();
        changeMarket();
    });
    $("#buyEllas5").click(function(){
        points -= Ellas5Price;
        autopointPlus += 10000;
        autopointSpeed += 20000;
        Ellatype = "Disapointed";
        changeInventory();
        changeMarket();
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
        
        $("#ellas").html("You have the " + Ellatype + " Ella equipted!");
        
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

        if(points >= Ellas1Price){
            $("#buyEllas1").css("display", "block");
        }else{
            $("#buyEllas1").css("display", "none");
        }
        if(points >= Ellas2Price){
            $("#buyEllas2").css("display", "block");
        }else{
            $("#buyEllas2").css("display", "none");
        }
        if(points >= Ellas3Price){
            $("#buyEllas3").css("display", "block");
        }else{
            $("#buyEllas3").css("display", "none");
        }
        if(points >= Ellas4Price){
            $("#buyEllas4").css("display", "block");
        }else{
            $("#buyEllas4").css("display", "none");
        }
        if(points >= Ellas5Price){
            $("#buyEllas5").css("display", "block");
        }else{
            $("#buyEllas5").css("display", "none");
        }
       
    }




        function switchMenu(menu){
            $(".menus").children().css("display", "none");
            $("." + menu).css("display", "block");
            return menu;
        }
    }
);