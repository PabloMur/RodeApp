interface ListItemProps {
  index: any;
  name: string;
  status: string;
}

const ListItem: React.FC<ListItemProps> = ({ index, name, status }) => {
  console.log(name);

  return (
    <p key={index} className="text-white">
      {name} {status}
      <input type="checkbox" name="" id="" />
    </p>
  );
};

export default ListItem;
