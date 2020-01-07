import marked from "marked";
import hljs from "highlight.js";
import Tocify from "./Tocify";
import "highlight.js/styles/atelier-forest-dark.css";

const useTocify = (content: string) => {
  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level) {
    const anchor = tocify.add(text, level);
    return `<div id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></div>\n`;
  };
  marked.setOptions({
    renderer,
    highlight: code => hljs.highlightAuto(code).value
  });
  let output: string;
  const setOutput = (content: string) => {
    output = marked(content);
    // console.log("output", output);
  };
  return { tocify, output, setOutput };
};

export default useTocify;
