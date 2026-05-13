import Card from "../Components/Card";
import { woodenToys } from "../Helpers/toyloader";

export default function WoodenToys() {
  return (
    <div className="collection">
      {woodenToys.map((toy) => {
        return (
          <Card
            key={toy.id}
            image={toy.image}
            name={toy.name}
            description={toy.description}
            price={toy.price}
          />
        );
      })}
    </div>
  );
}
