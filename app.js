$(document).ready(function(){
    var points = 0;
    var pointsplus = 1;
    var autopointPlus = 0;
    var autopointPrice = 100;
    var pointPrice = 1;
    var menu;

    $("#click").click(function(){
        points += pointsplus;
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
        function changeMarket(){
                if(points > 0){
                    
                }
        }

        }

        function switchMenu(menu){
            $(".menus").children().css("display", "none");
            $("." + menu).css("display", "block");
            return menu;
        }
    }
);