const Incomplete = () => {
  return <div className="h-4 w-4 rounded-full bg-red-600"></div>;
};

const Complete = () => {
  return <div className="h-4 w-4 rounded-full bg-green-500"></div>;
};

export default function Dot({ status }: any) {
  return status == "incomplete" ? <Incomplete /> : <Complete />;
}
