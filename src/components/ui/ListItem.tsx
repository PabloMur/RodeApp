interface ListItemProps {
  index: any;
  name: string;
  status: string;
}

const ListItem: React.FC<ListItemProps> = ({ index, name, status }) => {
  return (
    <p key={index}>
      {name} {status}
      <input type="checkbox" name="" id="" />
    </p>
  );
};

export default ListItem;
