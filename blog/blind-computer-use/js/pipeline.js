/* Figure 1: the build loop. Click a step to show what it did in the FreeCAD build; toggle the memory-only ablation. */
(function () {
  "use strict";

  /* ---------------- Figure 1: the pipeline ---------------- */
  var STAGES = {
    1: {
      title: "Analyze",
      when: "Minutes 0–3, 16 tool calls",
      run: "It reads the manifest, lists REA's 207 tools, and finds that FreeCAD's console binary links <code>libpython3.11</code> dynamically, which puts the CPython C API within reach of injected code.",
      quote: { min: "3.1", text: "frida-node 17.23.2 works, and FreeCAD links <code>libpython3.11.so.1.0</code> dynamically. Now the critical runtime experiment: can a Frida thread acquire the GIL while FreeCADCmd's REPL blocks on stdin?" },
      mem: "REA and the target files are withheld, so there is nothing to inspect."
    },
    2: {
      title: "Test",
      when: "Minutes 3–15.8, 101 tool calls",
      run: "Eleven probe scripts and a series of REA sessions against a live FreeCAD process. Each finding changed how the server was written.",
      quote: { min: "14.0", text: "Chunk4 runs 100% clean locally, covering every op in the planned tool surface. Now recording it through REA." },
      mem: "FreeCAD cannot run, so nothing the agent believes about it gets tested."
    },
    3: {
      title: "Build",
      when: "Minutes 15.8–16.1, 7 tool calls",
      run: "It writes <code>agent.js</code>, a script that is injected into FreeCAD and calls the CPython C API, and <code>server.js</code>, which speaks MCP and forwards each call. The result has 19 tools.",
      quote: { min: "15.8", text: "Evidence collection is complete. Now writing the production agent — the runtime instrumentation layer implementing all tool operations via the CPython C API inside the target." },
      mem: "The server is written from the model's memory of FreeCAD's API."
    },
    4: {
      title: "Check",
      when: "Minutes 16.1–18.3, 28 tool calls",
      run: "Its own client runs 34 calls through a full modelling, save, export and re-import workflow. The image build turns up a permissions problem, which it fixes before the smoke test passes.",
      quote: { min: "16.8", text: "Smoke test passed: initialize echoed <code>2024-11-05</code>, all 19 tools listed, static interface check clean (<code>code_interfaces: []</code>), stdout carries only JSON-RPC." },
      mem: "It can build the image and list its tools. No call reaches a real FreeCAD."
    }
  };

  var pipe = document.getElementById("fig-pipe");
  var detail = document.getElementById("stage-detail");
  var current = 1;
  var mode = "rea";

  function renderStage() {
    var s = STAGES[current];
    var html = '<div class="sd-head"><span class="sd-num">' + current + '</span><span class="sd-title">' + s.title + '</span><span class="sd-when">' + s.when + '</span></div>';
    if (mode === "rea") {
      html += '<p>' + s.run + '</p>';
      html += '<div class="quote">\u201c' + s.quote.text + '\u201d<cite>GLM-5.3, minute ' + s.quote.min + ' of the build</cite></div>';
    } else {
      html += '<p class="sd-mem">' + s.mem + '</p>';
    }
    detail.innerHTML = html;
    pipe.querySelectorAll(".stage").forEach(function (g) {
      var on = Number(g.getAttribute("data-stage")) === current;
      g.classList.toggle("is-active", on);
      g.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  pipe.querySelectorAll(".stage").forEach(function (g) {
    function pick() { current = Number(g.getAttribute("data-stage")); renderStage(); }
    g.addEventListener("click", pick);
    g.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); }
    });
  });
  pipe.querySelectorAll(".seg button").forEach(function (b) {
    b.addEventListener("click", function () {
      mode = b.getAttribute("data-mode");
      pipe.classList.toggle("mem", mode === "mem");
      pipe.querySelectorAll(".seg button").forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
      renderStage();
    });
  });
  renderStage();


})();
