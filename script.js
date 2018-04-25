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
      }, 5000);
      runningGif = true;
    }, 4000);
  }
}

function itemStuck() {
  if (Math.floor(Math.random() * 2) === 0) {
    $(".stuck").show();
  }
}

$("#buy").click(function() {
  var item = $("input").val();
  if (item === "coke") {
    if (money < 1.5) {
      $("#message").html("I don't have enough money for coke");
    } else {
      boughtItem(".pepsi");
      money = money - 1.5;
      cokes = cokes + 1;
      $("#message").html("I bought a coke for $1.50");
    }
  } else if (item === "chips") {
    if (money < 1.25) {
      $("#message").html("I don't have enough money for chips");
    } else {
      boughtItem(".chip");
      money = money - 1.25;
      chips = chips + 1;
      $("#message").html("I bought chips for $1.25");
    }
  }
  if (money <= 1) {
    $(".nomoney").show();
  }
  console.log(money);
  $("#money").html("I have $" + money);
  $("#purchases").html("I bought " + cokes + " cokes and " + chips + " chips.");
});
