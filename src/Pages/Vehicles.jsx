import Card from "../Components/Card";
import { vehicles } from "../Helpers/toyloader";

export default function Vehicles() {
  return (
    <div className="collection">
      {vehicles.map((toy) => {
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
