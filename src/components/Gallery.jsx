import { useSelector } from "react-redux";

export default function Gallery() {
  const { items, search } = useSelector((state) => state.animals);
  const filteredAnimals = items.filter((animal) =>
    animal.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {filteredAnimals.map((animal) => (
        <div key={animal.id}>
            <img src={animal.image} alt={animal.name} style={{width: '200px', height: '200px'}}/>
            <h3>{animal.name}</h3>
            <p>{animal.description}</p>
        </div>
      ))}
    </div>
  );
}
