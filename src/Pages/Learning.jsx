import Card from "../Components/Card";
import { educationalToys } from "../Helpers/toyloader";

export default function Learning() {
  return (
    <div className="collection">
      {educationalToys.map((toy) => {
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
