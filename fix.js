const fs = require("fs");

// 1. javaQA.html
let java = fs.readFileSync("public/reference-source/javaQA.html", "utf8");
java = java.replace(/<\/script>\s*<\/body>/, "</script>\n  </main>\n  </body>");
fs.writeFileSync("public/reference-source/javaQA.html", java);

// 2. javascriptQA.html
let jsQA = fs.readFileSync("public/reference-source/javascriptQA.html", "utf8");
jsQA = jsQA.replace(
  /<\/div>\s*<footer id="footer">/,
  '</main>\n\n    <footer id="footer">',
);
fs.writeFileSync("public/reference-source/javascriptQA.html", jsQA);

// 3. javascript_programs.html
let jsProg = fs.readFileSync(
  "public/reference-source/javascript_programs.html",
  "utf8",
);
// the error was Unexpected closing tag "main" at 1118
// there might be a missing opening tag or extra closing tag.
// let's replace </main> with just nothing if there's no opening main, but there is one.
// Let's replace the Conclusion div and </main> to close everything properly
jsProg = jsProg.replace(/<\/div>\s*<\/main>/, "</div>\n</div>\n</main>");
fs.writeFileSync("public/reference-source/javascript_programs.html", jsProg);

// 4. python_programs.html
// Unexpected closing tag "code" at 568
let pyProg = fs.readFileSync(
  "public/reference-source/python_programs.html",
  "utf8",
);
pyProg = pyProg.replace(
  /<\/code><\/pre>\s*<\/div>\s*<\/div>\s*<!-- Program 4 -->/,
  "</div>\n      </div>\n\n       <!-- Program 4 -->",
);
fs.writeFileSync("public/reference-source/python_programs.html", pyProg);

// 5. reactJsQA.html
// corrupted line 283
let react = fs.readFileSync("public/reference-source/reactJsQA.html", "utf8");
react = react.replace(
  /<li>Use `shouldComponentUpdate`.*?<div class="qa">/s,
  `<li>Use \`shouldComponentUpdate\` in class components to avoid unnecessary re-renders.</li>
                </ul>
            </div>
        </div>
        <div class="qa">`,
);
fs.writeFileSync("public/reference-source/reactJsQA.html", react);

console.log("Fixes applied.");
