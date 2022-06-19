import type { NextPage } from "next";
import { useEffect } from "react";
import CardStory from "../components/Story/CardStory";
import Layout from "../layout/Layout";
import styles from "../styles/Home.module.css";
import { getDataProfile } from "../utils/FetchData";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IFullDataStory } from "../Types/Story-type";
import Prism from "prismjs";
import ReactMarkdown from "react-markdown";
import "prismjs/components/prism-css";
interface IProps {
  data: IFullDataStory;
}
const Home: NextPage<IProps> = ({ data }) => {
  const markdownContent = ` 
  # Heti
  ## Heti is a simple blog system
  ## Heti is a simple blog system`;
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      {/* <ReactMarkdown children={markdownContent} /> */}
      <h1>Tsting</h1>
    </div>
  );
};
// check
// export const getInitialProps = async () => {
//   const res = await getDataProfile("story/getAllStories");
//   const title = res.data.title;
//   // const title = res.data.title
//   return {
//     props: {
//       data: res.data,
//     },
//   };
// };

export default Home;
