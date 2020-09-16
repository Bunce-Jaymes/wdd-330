 $(document).ready(function () {
     $("input.form").focusin(function () {
         $(this).css("background-color", "#1DD2FF");
     });
     $("input.form").focusout(function () {
         $(this).css("background-color", "white");
     });

     $("#purchase").click(function () {
         var total = 0;
         var amount = document.getElementById("xboxPUBG").checked;

         if (amount == true) {
             var price = 29.99;
             total = total + price;
         }

         var amount = document.getElementById("pcPUBG").checked;

         if (amount == true) {
             var price = 29.99;
             total = total + price;
         }

         var amount = document.getElementById("xboxDoom").checked;

         if (amount == true) {
             var price = 29.99;
             total = total + price;
         }

         var amount = document.getElementById("pcDoom").checked;

         if (amount == true) {
             var price = 29.99;
             total = total + price;
         }

         var amount = document.getElementById("playstationDoom").checked;

         if (amount == true) {
             var price = 29.99;
             total = total + price;
         }

         var amount = document.getElementById("xboxCod").checked;

         if (amount == true) {
             var price = 59.99;
             total = total + price;
         }

         var amount = document.getElementById("pcCod").checked;

         if (amount == true) {
             var price = 59.99;
             total = total + price;
         }

         var amount = document.getElementById("playstationCod").checked;

         if (amount == true) {
             var price = 59.99;
             total = total + price;
         }

         var amount = document.getElementById("xboxFriday").checked;

         if (amount == true) {
             var price = 29.99;
             total = total + price;
         }

         var amount = document.getElementById("pcFriday").checked;

         if (amount == true) {
             var price = 29.99;
             total = total + price;
         }

         var amount = document.getElementById("playstationFriday").checked;

         if (amount == true) {
             var price = 29.99;
             total = total + price;
         }

         var amount = document.getElementById("xboxBattle").checked;

         if (amount == true) {
             var price = 15.99;
             total = total + price;
         }

         var amount = document.getElementById("pcBattle").checked;

         if (amount == true) {
             var price = 15.99;
             total = total + price;
         }

         var amount = document.getElementById("playstationBattle").checked;

         if (amount == true) {
             var price = 15.99;
             total = total + price;
         }
         
         var amount = document.getElementById("tradexboxPUBG").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradepcPUBG").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradexboxDoom").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradepcDoom").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradeplaystationDoom").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradexboxCod").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradepcCod").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradeplaystationCod").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradexboxFriday").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradepcFriday").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradeplaystationFriday").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradexboxBattle").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradepcBattle").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("tradeplaystationBattle").checked;

         if (amount == true) {
             var price = 7;
             total = total + price;
         }

         var amount = document.getElementById("twoday").checked;

         if (amount == true) {
             var price = 10;
             total = total + price;
         }

         var amount = document.getElementById("fourday").checked;

         if (amount == true) {
             var price = 5;
             total = total + price;
         }

         var amount = document.getElementById("standard").checked;

         if (amount == true) {
             var price = 0;
             total = total + price;
         }

         //-----------------------------------------------recipet stuff
         var out = "Games Ordered:";

         var check = document.getElementById("xboxPUBG").checked;

         if (check == true) {
             out = out + "\n(Xbox) Player Unknow's Battlegrounds"
         }

         var check = document.getElementById("pcPUBG").checked;

         if (check == true) {
             out = out + "\n(PC) Player Unknow's Battlegrounds"
         }

         var check = document.getElementById("xboxDoom").checked;

         if (check == true) {
             out = out + "\n(Xbox) Doom 2016"
         }

         var check = document.getElementById("pcDoom").checked;

         if (check == true) {
             out = out + "\n(PC) Doom 2016"
         }

         var check = document.getElementById("playstationDoom").checked;

         if (check == true) {
             out = out + "\n(PlayStation) Doom 2016"
         }

         var check = document.getElementById("xboxCod").checked;

         if (check == true) {
             out = out + "\n(Xbox) Call of Duty: WWII"
         }

         var check = document.getElementById("pcCod").checked;

         if (check == true) {
             out = out + "\n(PC) Call of Duty: WWII"
         }

         var check = document.getElementById("playstationCod").checked;

         if (check == true) {
             out = out + "\n(PlayStation) Call of Duty: WWII"
         }

         var check = document.getElementById("xboxFriday").checked;

         if (check == true) {
             out = out + "\n(Xbox) Friday the 13th: The game"
         }

         var check = document.getElementById("pcFriday").checked;

         if (check == true) {
             out = out + "\n(PC) Friday the 13th: The game"
         }

         var check = document.getElementById("playstationFriday").checked;

         if (check == true) {
             out = out + "\n(PlayStation) Friday the 13th: The game"
         }

         var check = document.getElementById("xboxBattle").checked;

         if (check == true) {
             out = out + "\n(Xbox) Battlefield 1"
         }

         var check = document.getElementById("pcBattle").checked;

         if (check == true) {
             out = out + "\n(PC) Battlefield 1"
         }

         var amount = document.getElementById("playstationBattle").checked;

         if (check == true) {
             out = out + "\n(PlayStation) Battlefield 1"
         }
         
         var check = document.getElementById("tradexboxPUBG").checked;

         if (check == true) {
             out = out + "\nTrading: (Xbox) Player Unknow's Battlegrounds"
         }

         var check = document.getElementById("tradepcPUBG").checked;

         if (check == true) {
             out = out + "\nTrading: (PC) Player Unknow's Battlegrounds"
         }

         var check = document.getElementById("tradexboxDoom").checked;

         if (check == true) {
             out = out + "\nTrading: (Xbox) Doom 2016"
         }

         var check = document.getElementById("tradepcDoom").checked;

         if (check == true) {
             out = out + "\nTrading: (PC) Doom 2016"
         }

         var check = document.getElementById("tradeplaystationDoom").checked;

         if (check == true) {
             out = out + "\nTrading: (PlayStation) Doom 2016"
         }

         var check = document.getElementById("tradexboxCod").checked;

         if (check == true) {
             out = out + "\nTrading: (Xbox) Call of Duty: WWII"
         }

         var check = document.getElementById("tradepcCod").checked;

         if (check == true) {
             out = out + "\nTrading: (PC) Call of Duty: WWII"
         }

         var check = document.getElementById("tradeplaystationCod").checked;

         if (check == true) {
             out = out + "\nTrading: (PlayStation) Call of Duty: WWII"
         }

         var check = document.getElementById("tradexboxFriday").checked;

         if (check == true) {
             out = out + "\nTrading: (Xbox) Friday the 13th: The game"
         }

         var check = document.getElementById("tradepcFriday").checked;

         if (check == true) {
             out = out + "\nTrading: (PC) Friday the 13th: The game"
         }

         var check = document.getElementById("tradeplaystationFriday").checked;

         if (check == true) {
             out = out + "\nTrading: (PlayStation) Friday the 13th: The game"
         }

         var check = document.getElementById("tradexboxBattle").checked;

         if (check == true) {
             out = out + "\nTrading: (Xbox) Battlefield 1"
         }

         var check = document.getElementById("tradepcBattle").checked;

         if (check == true) {
             out = out + "\nTrading: (PC) Battlefield 1"
         }

         var amount = document.getElementById("tradeplaystationBattle").checked;

         if (check == true) {
             out = out + "\nTrading: (PlayStation) Battlefield 1"
         }


         var save = confirm("Please veryify the information below and then press ok:\n\n" + out + "\n\n" + "First Name: " + document.getElementById("firstname").value + "\nLast Name: " + document.getElementById("lastname").value + "\nEmail: " + document.getElementById("email").value + "\nAddress: " + document.getElementById("street").value + "\n" + document.getElementById("city").value + " , " + document.getElementById("state").value + " " + document.getElementById("zipcode").value + "\n\nTotal Cost: $" + total);

         if (save === true) {
             window.alert("Order was sucessfully sent!\nThank you for you time!");
         } else {
             window.alert("Data was not submitted");
         }
     });
 });
