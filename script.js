$(document).ready(function() {
var money = 10.0;
var cokes = 0;
var chips = 0;

var runningGif = true;
function boughtItem(item) {
  if (runningGif === true) {
    $(".buy").show();
         runningGif = false;
    setTimeout(() => {
      $(".buy").hide();
      $(item).show();
      setTimeout(() => {
        $(item).hide();
            runningGif = true;
      }, 3000);
    }, 2000);
  }
}

function itemStuck() {
  if (Math.floor(Math.random() * 2) === 0) {
    $(".stuck").show();
  }
}
function noMoney(){
        if(runningGif){
        $('.nomoney').show();
          setTimeout(() => {
            $('.nomoney').hide();
          }, 3000);
        }
}

$("#buy").click(function() {
  var item = $("input").val();
  
    if (item === "coke") {
    if(money <=1.5){
        $("#message").html("<p style='color:red'>I don't have enough money for coke</p>");
    noMoney();
    }else {
      boughtItem('.pepsi');
      money = money - 1.5;
      cokes = cokes + 1;
      $("#message").html("I bought a coke for $1.50");
    }
  } else if (item === "chips") {
    if (money < 1.25) {
      $("#message").html("<p style='color:red'>I don't have enough money for chips</p>");
      noMoney();
    } else {
      boughtItem('.chip');
      money = money - 1.25;
      chips = chips + 1;
      $("#message").html("I bought chips for $1.25");
    }
  }

  $("#money").html("I have $" + money);
  $("#purchases").html("I bought " + cokes + " cokes and " + chips + " chips.");
});
});
