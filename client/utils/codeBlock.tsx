import React, { Component } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
// 设置高亮的语言
import {
  jsx,
  javascript,
  sass,
  scss
} from "react-syntax-highlighter/dist/esm/languages/prism";

interface Props {
  language: string;
  value: string;
}

class CodeBlock extends Component<Props> {
  static defaultProps = {
    language: null
  };

  componentWillMount() {
    // 注册要高亮的语法，
    // 注意：如果不设置打包后供第三方使用是不起作用的
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
  }

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;