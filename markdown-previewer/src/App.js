import React, { useState } from "react";
// import insane from "insane";

import "./App.css";
const ReactMarkdown = require("react-markdown/with-html");

const App = () => {
  const [input, setInput] = useState(initMarkdown);
  const [loading, setLoading] = useState(true);

  React.useEffect((loading) => {
    if (loading === true) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="App min-h-screen flex justify-center items-center">
      <div
        className="container mx-4 p-4 flex flex-wrap justify-center items-center"
        style={{ backgroundColor: "#FFFF66" }}
      >
        <div className="row flex flex-wrap flex-row w-full align-center justify-center">
          <h2 className="text-6xl">Markdown Previewer</h2>
        </div>
        <div className="row flex flex-wrap flex-row w-full">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl">Markdown</h3>
            <div>
              <textarea
                id="editor"
                className="w-full focus:outline-none"
                rows="20"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text-area"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl">Result</h3>
            <div id="preview">
              {loading ? (
                <ReactMarkdown source={input}  />
              ) : (
                <pre>
                  <code>
                    <ReactMarkdown source={input}  />
                  </code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

let initMarkdown = `

Marked - Markdown Parser
========================

[I'm an inline-style link](https://www.google.com)

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

I think you should use an
\` <
  addr >
  \` element here instead.

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.

2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
`;
