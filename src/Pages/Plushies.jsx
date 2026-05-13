import Card from "../Components/Card";
import { plushies } from "../Helpers/toyloader";

export default function Plushies() {
  return (
    <div className="collection">
      {plushies.map((toy) => {
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
