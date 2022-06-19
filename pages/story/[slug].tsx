import { FunctionComponent, useEffect } from "react";
import CodeBlock from "../../components/Markdown/CodeBlog";
import Prism from "prismjs";
import ReactMarkdown from "react-markdown";
import "prismjs/components/prism-css";
export interface INode {
  className: string;
  children: React.ReactNode;
  inline: boolean;
  node: Element;
  props: object;
  code?: any;
  components: any;
}

const detail = () => {
  const markdownContent = ` 
  # Heti
  ## Heti is a simple blog system
  ## Heti is a simple blog system`;
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <ReactMarkdown children={markdownContent} />
    </div>
  );
};

export default detail;
