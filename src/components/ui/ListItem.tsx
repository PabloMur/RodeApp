interface ListItemProps {
  index: any;
  name: string;
  status: string;
}

const ListItem: React.FC<ListItemProps> = ({ index, name, status }) => {
  return (
    <div>
      <div
        key={index}
        className="text-black text-xl w-full bg-orange-500 p-4 flex justify-between items-center rounded-xl mb-2"
      >
        <h3>{name}</h3>
        <div className="flex justify-center items-center gap-2">
          <div>dot</div>
          {status}
          <input type="checkbox" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
