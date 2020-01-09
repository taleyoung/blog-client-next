import marked from "marked";
import xss from "xss";
import hljs from "highlight.js";
// 转化 md 语法为 html
export const translateMarkdown = (plainText: any, isGuardXss = false) => {
  return marked(plainText, {
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    // tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function(code) {
      /*eslint no-undef: "off"*/
      return hljs.highlightAuto(code).value;
    }
  });
};
