// 如果你看到这段文字了，你懂我什么意思吧。
window.requestAnimFrame = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) { window.setTimeout(a, 1E3 / 60) } }();

$(function () {

  var cf = document.createElement("canvas");
  var c = document.getElementById('startrack');

  let cw, ch;

  c.width = cf.width = cw = c.offsetWidth;
  c.height = cf.height = ch = c.offsetHeight;
  var longside = Math.max(cw, ch);
  cf.width = longside * 2.6
  cf.height = longside * 2.6

  var ctx = c.getContext('2d');
  var cftx = cf.getContext('2d');

  var centerX = cw;
  var centerY = 0//-ch;
  var stars = [];
  var drawTimes = 0;

  ctx.fillStyle = "rgba(21,21,21,1)";
  ctx.fillRect(0, 0, cw, ch);

  ctx.lineCap = 'round';

  function rand(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
  }

  function createStar() {
    stars.push({
      x: rand(-cf.width, cf.width),
      y: rand(-cf.height, cf.height),
      size: 1.2,
      color: randomColor(),
    })
  }

  function randomColor() {
    var r = rand(120, 255);
    var g = rand(120, 255);
    var b = rand(120, 255);
    var a = rand(30, 100) / 100;
    //var a = 1;
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }

  function drawStar() {
    var count = stars.length;
    while (count--) {
      var cs = stars[count];
      cftx.beginPath();
      cftx.arc(cs.x, cs.y, cs.size, 0, Math.PI * 2, true);
      cftx.fillStyle = cs.color;
      cftx.closePath();
      cftx.fill();
    }
  }

  function drawfromCache() {
    ctx.drawImage(cf, -cf.width / 2, -cf.height / 2);
  }

  function loop() {

    drawfromCache()

    drawTimes++;

    if (drawTimes > 400) {
      if (drawTimes % 8 == 0) {
        ctx.fillStyle = 'rgba(0,0,0,.04)';
        ctx.fillRect(-(longside * 3), -(longside * 3), longside * 6, longside * 6);
      }
    }
    rotateCanvas(0.025);

  }

  function rotateCanvas(deg) {
    ctx.rotate(deg * Math.PI / 180);
  }

  var count = 20000;
  while (count--) {
    createStar();
  }
  drawStar();

  var x = centerX;
  var y = centerY;
  ctx.translate(x, y);

  function fireAnimate() {
    requestAnimFrame(fireAnimate);
    loop();
  }

  fireAnimate();
})


function getMsg() {
  var slogan = [
    "希望能成为<br>有趣的人！",
    "给时光以生命，<br>给岁月以文明。",
    "你好，<br>请多指教！",
    "当你在凝视着网页的时候，<br>网页也正在凝视着你。",
    "平凡的日常<br>正奇迹的发生着",
    "さあ、<br>ゲームを始めよう",
    "敬畏之心！",
    "赞美之心！",
    "我很好奇！",
    "*舒缓的现代音乐*",
  ];
  var r = random(0, slogan.length - 1);
  $("#slogan").html(slogan[r])
}

let rollTimer = null;

function random(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range);
  return num;
}

$(function () {
  getMsg();
  console.log('Nekotora\'s Flag.Moe Homepage');
})

function nav(page) {
  switch (page) {
    case 'links':
      $(".gate-friends").toggle();
      break;

    default:
      break;
  }
}
