import Navigate from "@components/Navigate";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atelier-forest-dark.css";

function useMdToHtml(content: string) {
  const navigate = new Navigate();
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level) {
    const anchor = navigate.add(text, level);
    return `<div id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></div>\n`;
  };
  marked.setOptions({
    renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: code => hljs.highlightAuto(code).value
  });

  const res = marked(content);
  const output = `<div>${res}<style> pre{background-color: #eee; border-radius: 5px; padding: 15px; margin-top:10px;} </style></div>`;
  return { output, navigate };
}

function useMdToBrief(content: string) {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: code => hljs.highlightAuto(code).value
  });

  return marked(content);
}
export { useMdToHtml, useMdToBrief };
