var _0xc1db = [
  "\x73\x68\x6F\x77",
  "\x2E\x62\x75\x79",
  "\x68\x69\x64\x65",
  "\x72\x61\x6E\x64\x6F\x6D",
  "\x66\x6C\x6F\x6F\x72",
  "\x2E\x73\x74\x75\x63\x6B",
  "\x76\x61\x6C",
  "\x69\x6E\x70\x75\x74",
  "\x63\x6F\x6B\x65",
  "\x49\x20\x64\x6F\x6E\x27\x74\x20\x68\x61\x76\x65\x20\x65\x6E\x6F\x75\x67\x68\x20\x6D\x6F\x6E\x65\x79\x20\x66\x6F\x72\x20\x63\x6F\x6B\x65",
  "\x68\x74\x6D\x6C",
  "\x23\x6D\x65\x73\x73\x61\x67\x65",
  "\x2E\x70\x65\x70\x73\x69",
  "\x49\x20\x62\x6F\x75\x67\x68\x74\x20\x61\x20\x63\x6F\x6B\x65\x20\x66\x6F\x72\x20\x24\x31\x2E\x35\x30",
  "\x63\x68\x69\x70\x73",
  "\x49\x20\x64\x6F\x6E\x27\x74\x20\x68\x61\x76\x65\x20\x65\x6E\x6F\x75\x67\x68\x20\x6D\x6F\x6E\x65\x79\x20\x66\x6F\x72\x20\x63\x68\x69\x70\x73",
  "\x2E\x63\x68\x69\x70",
  "\x49\x20\x62\x6F\x75\x67\x68\x74\x20\x63\x68\x69\x70\x73\x20\x66\x6F\x72\x20\x24\x31\x2E\x32\x35",
  "\x2E\x6E\x6F\x6D\x6F\x6E\x65\x79",
  "\x6C\x6F\x67",
  "\x49\x20\x68\x61\x76\x65\x20\x24",
  "\x23\x6D\x6F\x6E\x65\x79",
  "\x49\x20\x62\x6F\x75\x67\x68\x74\x20",
  "\x20\x63\x6F\x6B\x65\x73\x20\x61\x6E\x64\x20",
  "\x20\x63\x68\x69\x70\x73\x2E",
  "\x23\x70\x75\x72\x63\x68\x61\x73\x65\x73",
  "\x63\x6C\x69\x63\x6B",
  "\x23\x62\x75\x79",
];
var money = 10.0;
var cokes = 0;
var chips = 0;
var runningGif = true;
function boughtItem(_0x1f04x6) {
  if (runningGif === true) {
    $(_0xc1db[1])[_0xc1db[0]]();
    runningGif = false;
    setTimeout(() => {
      $(_0xc1db[1])[_0xc1db[2]]();
      $(_0x1f04x6)[_0xc1db[0]]();
      setTimeout(() => {
        $(_0x1f04x6)[_0xc1db[2]]();
      }, 5000);
      runningGif = true;
    }, 4000);
  }
}
function itemStuck() {
  if (Math[_0xc1db[4]](Math[_0xc1db[3]]() * 2) === 0) {
    $(_0xc1db[5])[_0xc1db[0]]();
  }
}
$(_0xc1db[27])[_0xc1db[26]](function() {
  var _0x1f04x6 = $(_0xc1db[7])[_0xc1db[6]]();
  if (_0x1f04x6 === _0xc1db[8]) {
    if (money < 1.5) {
      $(_0xc1db[11])[_0xc1db[10]](_0xc1db[9]);
    } else {
      boughtItem(_0xc1db[12]);
      money = money - 1.5;
      cokes = cokes + 1;
      $(_0xc1db[11])[_0xc1db[10]](_0xc1db[13]);
    }
  } else {
    if (_0x1f04x6 === _0xc1db[14]) {
      if (money < 1.25) {
        $(_0xc1db[11])[_0xc1db[10]](_0xc1db[15]);
      } else {
        boughtItem(_0xc1db[16]);
        money = money - 1.25;
        chips = chips + 1;
        $(_0xc1db[11])[_0xc1db[10]](_0xc1db[17]);
      }
    }
  }
  if (money <= 1) {
    $(_0xc1db[18])[_0xc1db[0]]();
  }
  console[_0xc1db[19]](money);
  $(_0xc1db[21])[_0xc1db[10]](_0xc1db[20] + money);
  $(_0xc1db[25])[_0xc1db[10]](_0xc1db[22] + cokes + _0xc1db[23] + chips + _0xc1db[24]);
});
