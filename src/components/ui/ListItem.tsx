interface ListItemProps {
  index: any;
  name: string;
  status: string;
}

const ListItem: React.FC<ListItemProps> = ({ index, name, status }) => {
  console.log(name);

  return (
    <p
      key={index}
      className="text-black text-xl w-full bg-orange-500 p-4 flex justify-between items-center rounded-xl mb-2"
    >
      {name}
      <div className="flex justify-center items-center gap-2">
        {status}
        <input type="checkbox" name="" id="" />
      </div>
    </p>
  );
};

export default ListItem;
