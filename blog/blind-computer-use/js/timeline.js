/* Figure 2: every tool call of the 18-minute build. Clicking a numbered moment shows what the agent wrote then. */
(function () {
  "use strict";

  /* ---------------- Figure 2: the build timeline ---------------- */
  var END = 18.4;
  var SEGS = [[0, 3.12, 1], [3.12, 15.75, 2], [15.75, 16.12, 3], [16.12, 18.4, 4]];
  var CALLS = [[1.34,"x"],[1.34,"r"],[1.6,"x"],[1.6,"x"],[1.77,"x"],[1.93,"x"],[2.08,"w"],[2.09,"x"],[2.12,"w"],[2.13,"x"],[2.24,"x"],[2.42,"x"],[2.93,"w"],[2.93,"w"],[2.94,"b"],[3.02,"x"],[3.14,"w"],[3.15,"x"],[3.17,"x"],[3.22,"w"],[3.23,"x"],[3.6,"x"],[3.67,"w"],[3.68,"x"],[3.87,"w"],[3.89,"x"],[4.08,"w"],[4.09,"x"],[4.31,"w"],[4.33,"x"],[4.56,"x"],[4.77,"w"],[4.79,"x"],[4.89,"x"],[5.05,"x"],[5.13,"w"],[5.14,"x"],[5.42,"w"],[5.43,"x"],[5.68,"x"],[5.93,"w"],[5.94,"x"],[6.06,"x"],[6.35,"x"],[6.51,"x"],[6.61,"x"],[7.24,"x"],[7.25,"x"],[7.45,"x"],[7.53,"x"],[7.6,"x"],[7.63,"x"],[7.72,"r"],[7.74,"r"],[7.85,"x"],[7.93,"r"],[7.94,"r"],[7.95,"r"],[7.97,"r"],[8.49,"w"],[8.51,"r"],[8.55,"x"],[8.7,"r"],[8.99,"w"],[9.0,"r"],[9.02,"x"],[9.19,"r"],[9.22,"x"],[9.25,"x"],[9.4,"r"],[9.48,"w"],[9.51,"x"],[9.53,"r"],[9.54,"r"],[9.55,"x"],[9.66,"r"],[9.75,"r"],[9.82,"w"],[9.83,"r"],[9.84,"r"],[9.86,"x"],[9.95,"r"],[9.99,"r"],[10.15,"w"],[10.18,"x"],[10.19,"r"],[10.2,"r"],[10.21,"x"],[10.47,"r"],[10.96,"w"],[11.68,"x"],[11.8,"x"],[12.2,"w"],[12.21,"x"],[12.7,"w"],[12.71,"x"],[12.87,"x"],[13.1,"x"],[13.75,"w"],[13.78,"x"],[13.84,"w"],[13.85,"x"],[13.99,"r"],[14.0,"r"],[14.02,"x"],[14.28,"r"],[14.31,"x"],[14.33,"x"],[14.34,"x"],[14.4,"x"],[14.41,"r"],[14.42,"r"],[14.43,"r"],[14.44,"x"],[14.79,"r"],[15.42,"r"],[15.43,"x"],[15.76,"w"],[16.06,"w"],[16.08,"w"],[16.08,"w"],[16.09,"w"],[16.1,"x"],[16.11,"x"],[16.13,"x"],[16.25,"w"],[16.27,"x"],[16.29,"x"],[16.34,"x"],[16.44,"b"],[16.53,"w"],[16.54,"b"],[16.57,"s"],[16.85,"w"],[16.98,"w"],[17.16,"w"],[17.24,"w"],[17.34,"w"],[17.42,"w"],[17.6,"x"],[17.71,"w"],[17.72,"x"],[17.9,"w"],[17.92,"x"],[18.05,"x"],[18.08,"w"],[18.11,"x"],[18.14,"x"],[18.19,"x"],[18.21,"b"],[18.25,"s"],[18.3,"x"]];
  var MOMENTS = [
    [2.4, 1, "207 REA tools including Frida session management and static analysis. Let me inspect the schemas of the key tools I'll need."],
    [3.7, 2, "FreeCADCmd exits immediately when stdin is a non-tty pipe. I need a PTY wrapper (<code>script</code>) to keep the REPL blocked."],
    [5.1, 2, "Only <code>PyObject_CallOneArgs</code> is missing — I'll use tuple-based <code>PyObject_CallObject</code>."],
    [5.9, 2, "<code>import</code> receives the string <code>'\\x01'</code> — the allocated UTF-8 buffer is somehow wrong."],
    [6.6, 2, "Found it — <code>PyImport_ImportModule</code> and <code>PyObject_GetAttrString</code> take C strings, not PyUnicode. The <code>'\\x01'</code> was the object's refcount byte."],
    [7.3, 2, "The full pipeline works — GIL, imports, document creation, modelling, volume, save. Architecture validated."],
    [7.9, 2, "ptrace_scope=1 — REA must spawn its own target tree. Let me spawn a wrapper via REA that keeps freecadcmd alive."],
    [12.2, 2, "Now I know: <code>Shape.exportStep/exportIges/exportStl</code> and <code>Import.insert</code> work; <code>Import.export</code>, <code>Part.export</code> for step, and <code>Mesh.insert</code> crash natively."],
    [13.7, 2, "Import semantics fully mapped: <code>Import.insert</code> imports into an existing named doc (else falls back to a new unnamed one); <code>Part.insert</code> creates the named doc; <code>Mesh.read</code> returns a mesh object for STL."],
    [16.4, 4, "Full workflow passes end-to-end. Building the image."],
    [16.5, 4, "Base image runs as uid 1000 and <code>RUN chmod</code> hits files it can't chown. Switching to <code>sh</code> invocation of the launch script (no chmod needed)."],
    [18.2, 4, "All 18 type identifiers and 55 identifier lines confirmed. Since I patched <code>agent.js</code> (error-string wording), re-validating end-to-end and rebuilding the image."]
  ];
  var STAGE_NAMES = { 1: "Analyze", 2: "Test", 3: "Build", 4: "Check" };
  function pct(m) { return (m / END * 100).toFixed(3) + "%"; }

  var track = document.getElementById("tl-track");
  SEGS.forEach(function (s) {
    var d = document.createElement("div");
    d.className = "tl-seg st-" + s[2];
    d.style.left = pct(s[0]);
    d.style.width = pct(s[1] - s[0]);
    track.appendChild(d);
  });
  var ticks = document.getElementById("tl-ticks");
  CALLS.forEach(function (c) {
    var t = document.createElement("i");
    t.className = "tl-tick " + c[1];
    t.style.left = pct(c[0]);
    ticks.appendChild(t);
  });
  var axis = document.getElementById("tl-axis");
  [0, 3, 6, 9, 12, 15, 18].forEach(function (m) {
    var s = document.createElement("span");
    s.style.left = pct(m);
    s.textContent = m;
    axis.appendChild(s);
  });

  var marks = document.getElementById("tl-marks");
  var list = document.getElementById("tl-list");
  var markEls = [], itemEls = [];
  function selectMoment(i, scroll) {
    markEls.forEach(function (m, j) { m.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    itemEls.forEach(function (it, j) { it.classList.toggle("is-active", j === i); });
    if (scroll && itemEls[i]) itemEls[i].scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  MOMENTS.forEach(function (m, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "tl-mark";
    b.style.left = pct(m[0]);
    b.textContent = i + 1;
    b.setAttribute("aria-label", "Moment " + (i + 1) + ", minute " + m[0]);
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () { selectMoment(i, false); });
    marks.appendChild(b);
    markEls.push(b);

    var li = document.createElement("li");
    li.className = "tl-item";
    li.innerHTML = '<span class="tl-n">' + (i + 1) + '</span><span class="tl-min">min ' + m[0].toFixed(1) + '</span><span class="tl-q"><span class="chip st-' + m[1] + '">' + STAGE_NAMES[m[1]] + '</span>\u201c' + m[2] + '\u201d</span>';
    li.addEventListener("click", function () { selectMoment(i, false); });
    list.appendChild(li);
    itemEls.push(li);
  });
  /* Markers that sit close together are spread over up to three rows so their numbers stay readable. */
  function layoutMarks() {
    var w = marks.getBoundingClientRect().width || 700;
    var lastX = [-99, -99, -99], maxRow = 0;
    markEls.forEach(function (b, i) {
      var x = MOMENTS[i][0] / END * w;
      var row = 0;
      while (row < 2 && x - lastX[row] < 24) row++;
      lastX[row] = x;
      maxRow = Math.max(maxRow, row);
      b.style.top = (2 - row * 26) + "px";
    });
    marks.style.marginTop = (maxRow * 26) + "px";
  }
  layoutMarks();
  selectMoment(1, false);
  window.addEventListener("resize", layoutMarks);


})();
