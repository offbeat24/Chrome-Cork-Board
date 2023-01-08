const bg = ["/img/obscura_1_desktop.jpg",
"/img/obscura_2_desktop.jpg",
"/img/obscura_3_desktop.jpg",
"/img/obscura_4_desktop.jpg",
"/img/obscura_5_desktop.jpg"];

function bgrand() {
  return Math.floor(Math.random() * 5);
}

function makebg() {
  document.body.style.backgroundImage = `url("${bg[bgrand()]}")`;
}

makebg();