type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function CardServices(props: Props) {
  return (
    <div className="p-3 flex flex-col justify-between items-center h-56 text-black shadow-2xl mb-5">
      <div className={props.className}>
        {props.icon}
      </div>
      <h1>{props.title}</h1>
      <p className="text-[.8rem] w-40 text-center">{props.description}</p>
    </div>
  );
}


