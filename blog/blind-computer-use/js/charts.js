/* Figures 4 and 6: per-task scores as % of checks passed. */
(function () {
  "use strict";

  /* ---------------- Figures 4 and 6: bar charts ---------------- */
  var TASKS = [
    { name: "board-plate", short: "Plate", total: 9, start: 3 },
    { name: "cable-slot", short: "Slot", total: 10, start: 2 },
    { name: "service-standoffs", short: "Stand\u00adoffs", total: 10, start: 2 },
    { name: "lid-vent", short: "Vents", total: 13, start: 2 },
    { name: "enclosure", short: "Enclo\u00adsure", total: 21, start: 2 }
  ];
  var RUNS = {
    kimiGui: { label: "Computer use", cls: "s-gui", counts: [9, 2, 2, 2, 2] },
    kimiRea: { label: "MCP server, built with REA", cls: "s-rea", counts: [9, 10, 5, 13, 18] },
    kimiMem: { label: "MCP server, written from memory only", cls: "s-mem", counts: [3, 2, 4, 4, 2] },
    glmRea: { label: "MCP server, built with REA", cls: "s-rea", counts: [9, 10, 10, 13, 21] },
    glmMem: { label: "MCP server, written from memory only", cls: "s-mem", counts: [3, 2, 2, 2, 2] }
  };
  var CHARTS = [
    { el: "chart-exp1", title: null, runs: ["kimiGui", "kimiRea"] },
    { el: "chart-glm", title: "GLM-5.3", runs: ["glmRea", "glmMem"] },
    { el: "chart-kimi", title: "Kimi K2.6", runs: ["kimiRea", "kimiMem", "kimiGui"] }
  ];
  var scoreMode = "raw";

  function value(run, i) {
    var t = TASKS[i], c = RUNS[run].counts[i];
    return scoreMode === "raw" ? c / t.total * 100 : (c - t.start) / (t.total - t.start) * 100;
  }
  function meanOf(run) {
    var s = 0;
    for (var i = 0; i < TASKS.length; i++) s += value(run, i);
    return s / TASKS.length;
  }
  function fmtMean(v) { var r = Math.round(v * 10) / 10; return (r === 100 || r === 0 ? r.toFixed(0) : r.toFixed(1)) + "%"; }

  function drawChart(cfg) {
    var root = document.getElementById(cfg.el);
    var h = "";
    if (cfg.title) h += '<p class="bc-title">' + cfg.title + '</p>';
    h += '<div class="bc-plot">';
    [0, 25, 50, 75, 100].forEach(function (y) {
      h += '<div class="bc-grid" style="bottom:' + y + '%"><span class="bc-yl">' + y + '%</span></div>';
    });
    h += '<div class="bc-groups">';
    TASKS.forEach(function (t, i) {
      h += '<div class="bc-group">';
      cfg.runs.forEach(function (r) {
        var v = value(r, i);
        var lab = scoreMode === "raw" ? (RUNS[r].counts[i] + "/" + t.total) : Math.round(v) + "%";
        h += '<div class="bc-bar ' + RUNS[r].cls + '" style="height:' + Math.max(v, 0.6) + '%"><span class="bc-val">' + lab + '</span></div>';
      });
      if (scoreMode === "raw") h += '<div class="bc-start" style="bottom:' + (t.start / t.total * 100) + '%"></div>';
      h += '</div>';
    });
    h += '<div class="bc-group mean">';
    cfg.runs.forEach(function (r) {
      var v = meanOf(r);
      h += '<div class="bc-bar ' + RUNS[r].cls + '" style="height:' + Math.max(v, 0.6) + '%"><span class="bc-val">' + fmtMean(v) + '</span></div>';
    });
    h += '</div></div></div>';
    h += '<div class="bc-x">';
    TASKS.forEach(function (t) { h += '<span><span class="lg">' + t.name + '</span><span class="sh">' + t.short + '</span></span>'; });
    h += '<span class="mean">Mean</span></div>';
    h += '<div class="bc-legend">';
    cfg.runs.forEach(function (r) { h += '<span><i class="sw ' + RUNS[r].cls + '"></i>' + RUNS[r].label + '</span>'; });
    if (scoreMode === "raw") h += '<span><i class="sw sw-start"></i>Starting file</span>';
    h += '</div>';
    root.innerHTML = h;
    var desc = (cfg.title ? cfg.title + ". " : "Kimi K2.6. ") + cfg.runs.map(function (r) {
      return RUNS[r].label + " mean " + fmtMean(meanOf(r));
    }).join("; ") + (scoreMode === "raw" ? " of checks passed." : " progress past the starting file.");
    root.setAttribute("role", "img");
    root.setAttribute("aria-label", desc);
  }
  function drawAll() { CHARTS.forEach(drawChart); }
  drawAll();


})();
