interface Item {
  title: string;
  description: string;
}

interface props {
  item: Item;
}

const TodoCards = ({ item }: props) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default TodoCards;
