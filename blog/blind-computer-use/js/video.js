/* Figure 5: run videos, one tab per task. */
(function () {
  "use strict";

  var VIDEOS = {
    enclosure: { file: "enclosure", stat: "MCP server: 18/21 in 16 min, 2.2M tokens. Computer use: 2/21 in 47 min, 21.4M tokens.", label: "the enclosure task" },
    plate: { file: "board-plate", stat: "Both 9/9 in 15 min. MCP server: 1.5M tokens. Computer use: 7.5M tokens.", label: "the board-plate task" },
    lid: { file: "lid-vent", stat: "MCP server: 13/13 in 4 min, 0.3M tokens. Computer use: 2/13 in 40 min, 17.2M tokens.", label: "the lid-vent task" }
  };
  var video = document.getElementById("vid");
  var vidStat = document.getElementById("vid-stat");
  var buttons = document.querySelectorAll("[data-vid]");
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var v = VIDEOS[b.getAttribute("data-vid")];
      video.pause();
      video.poster = "media/v6/" + v.file + ".jpg";
      video.src = "media/v6/" + v.file + ".mp4";
      video.setAttribute("aria-label", "Kimi K2.6 on " + v.label + ", computer use on the left and its MCP server on the right");
      vidStat.textContent = v.stat;
      buttons.forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
    });
  });
})();
