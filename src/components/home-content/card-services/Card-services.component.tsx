import { GrDeliver } from "react-icons/gr";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function CardServices(props: Props) {
  return (
    <div className="p-3 flex flex-col justify-between items-center h-56">
      <div className="w-32 h-32 bg-white flex justify-center items-center text-8xl p-5 shadow-lg rounded-tl-xl rounded-br-xl">
        {props.icon}
      </div>
      <h1>{props.title}</h1>
      <p className="text-[.8rem] w-40 text-center">{props.description}</p>
    </div>
  );
}
