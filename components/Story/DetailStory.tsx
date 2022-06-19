import Image from "next/image";
import { IDataStory } from "../../Types/Story-type";

interface IProps {
  data: IDataStory;
}

const DetailStory: React.FC<IProps> = ({ data }) => {
  return (
    <div className="">
      <div>
        <img
          src={data.image}
          //   height={100}
          //   width={100}
          //   layout="responsive"
          className="rounded-xl"
        />

        <div>
          {/* CONTENT */}
          {/* <CodeBlock content={data.content} /> */}
          {/* <ReactMarkdown components={CodeBlock}>{data.content}</ReactMarkdown> */}
        </div>
      </div>
    </div>
  );
};

export default DetailStory;
