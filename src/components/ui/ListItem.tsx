import Dot from "./Dot";

interface ListItemProps {
  index: any;
  name: string;
  status: string;
}

const ListItem: React.FC<ListItemProps> = ({ index, name, status }) => {
  return (
    <div
      key={index}
      className="text-orange-500 text-xl w-full border-2 border-orange-500 p-4 flex justify-between items-center rounded-xl mb-2"
    >
      <h3>{name}</h3>
      <div className="flex justify-between items-center gap-2 w-40">
        <Dot status={status}></Dot>
        {status}
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
};

export default ListItem;
