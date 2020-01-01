window.renderPlayer = function(a, d, c, b, g) {
  b.save();
  if (a.skin && 0 < a.skin && a.skin <= playerSkins && !skinSprites[a.skin]) {
    var e = new Image;
    e.onload = function() {
      this.readyToDraw = !0;
      this.onload = null;
      g == currentSkin && changeSkin(0);
    };
    e.src = ".././img/skins/skin_" + (a.skin - 1) + ".png";
    skinSprites[a.skin] = e;
  }
  a.skin && skinSprites[a.skin] && skinSprites[a.skin].readyToDraw ? (e = a.size - b.lineWidth / 4, b.lineWidth /= 2, renderCircle(d, c, a.size, b, !1, !0)) : g || (b.fillStyle = "rgba(255, 255, 255, 0)", renderCircle(d, c, a.size, b));
  b.restore();
};
function moveSelUnits() {
  if (selUnits.length) {
    var a = player.x + targetDst * MathCOS(targetDir) + camX, d = player.y + targetDst * MathSIN(targetDir) + camY;
    for (var e = [], b = 0; b < selUnits.length; ++b) {
      e.push(selUnits[b].id);
    }
    socket.emit("5", UTILS.roundToTwo(a), UTILS.roundToTwo(d), e, 0, -1);
  }
}
;
