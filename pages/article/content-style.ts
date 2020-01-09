import css from "styled-jsx/css";

const style = css`
  // ide
  .CodeMirror
    .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word) {
    background: #000 !important;
  }

  .article-detail {
    margin: 0 auto;
    font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
    color: #555;
    line-height: 2;
  }
  img {
    max-width: 100%;
    margin: 0 auto 25px;
    box-sizing: border-box;
    padding: 3px;
    border: 1px solid #ddd;
  }

  pre,
  code {
    font-family: consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace;
  }
  code {
    padding: 2px 4px;
    word-wrap: break-word;
    color: #ff502c;
    background: #fff5f5;
    border-radius: 3px;
    font-size: 13px;
  }
  pre {
    padding: 10px;
    overflow: auto;
    margin: 20px 0;
    font-size: 13px;
    color: #4d4d4c;
    background: #f7f7f7;
    line-height: 1.6;
  }
  pre code {
    padding: 0;
    color: #555;
    background: none;
    text-shadow: none;
    font-family: consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 20px 0 15px 0;
    padding-top: 10px;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    font-weight: bold;
    line-height: 1.5;
    font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
    color: #555;
  }
  h2 {
    font-size: 1.4em;
  }
  h3 {
    font-size: 1.3em;
    border-bottom: 1px dotted #eee;
  }
  h4 {
    font-size: 1.2em;
  }
  ul {
    padding-left: 20px;
  }
  li {
    line-height: 2;
    list-style: circle;
  }
  .hljs-comment,
  .hljs-quote {
    color: #575f6a;
  }
  blockquote {
    margin: 1em 0;
    border-left: 4px solid #ddd;
    padding: 0 1em;
    color: #666;
  }
  p {
    margin: 0.5em 0;
    line-height: 1.7em;
  }

  table {
    font-size: 0.8em;
    max-width: 100%;
    overflow: auto;
    border: 1px solid #f6f6f6;
    border-collapse: collapse;
    border-spacing: 0;
  }
  thead {
    background: #f6f6f6;
    color: #000;
    text-align: left;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  tr:nth-child(2n) {
    background-color: #fcfcfc;
  }
  th {
    padding: 0.8em 0.5em;
    line-height: 1.5em;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  td {
    min-width: 7.5em;
    padding: 0.8em 0.5em;
    line-height: 1.5em;
  }
  ol {
    list-style: decimal;
    margin: 5px 0 5px 15px;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #383a42;
    background: #fafafa;
  }

  .hljs-comment,
  .hljs-quote {
    color: #a0a1a7;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #a626a4;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e45649;
  }

  .hljs-literal {
    color: #0184bb;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #50a14f;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #c18401;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #986801;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #4078f2;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }
`;

export default style;