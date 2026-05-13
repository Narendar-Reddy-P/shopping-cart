import jcb from "../assets/woodenToys/jcb.png";
import train from "../assets/woodenToys/train.png";
import helicopter from "../assets/woodenToys/helicopter.png";
import rattles from "../assets/woodenToys/rattles.png";
import tricycle from "../assets/woodenToys/tricycle.png";

import colorPuzzle from "../assets/learning/colorPuzzle.png";
import shapePuzzle from "../assets/learning/shapePuzzle.png";
import snakeLego from "../assets/learning/snakeLego.png";
import stackPuzzle from "../assets/learning/stackPuzzle.png";

import elephantPlushie from "../assets/plushies/elephant.png";
import giraffePlushie from "../assets/plushies/giraffe.png";
import lionPlushie from "../assets/plushies/lion.png";
import monkeyPlushie from "../assets/plushies/monkey.png";
import penguinPlushie from "../assets/plushies/penguin.png";
import puppyPlushie from "../assets/plushies/puppy.png";
import teddyPlushie from "../assets/plushies/teddy.png";

import carVehicle from "../assets/vehicles/car.png";
import helicopterVehicle from "../assets/vehicles/helicopter.png";
import jeepVehicle from "../assets/vehicles/jeep.png";
import scootyVehicle from "../assets/vehicles/scooty.png";
import tractorVehicle from "../assets/vehicles/tractor.png";
import vanVehicle from "../assets/vehicles/van.png";

export const woodenToys = [
  {
    id: crypto.randomUUID(),
    image: jcb,
    name: "JCB",
    description: "A wooden JCB",
    price: 20,
  },
  {
    id: crypto.randomUUID(),
    image: train,
    name: "Wooden Train",
    description: "A wooden train toy",
    price: 25,
  },
  {
    id: crypto.randomUUID(),
    image: helicopter,
    name: "Helicopter",
    description: "A wooden Helicopter",
    price: 30,
  },
  {
    id: crypto.randomUUID(),
    image: rattles,
    name: "Wooden Rattles",
    description: "Wooden rattles for babies",
    price: 15,
  },
  {
    id: crypto.randomUUID(),
    image: tricycle,
    name: "Wooden Tricycle",
    description: "A wooden tricycle",
    price: 35,
  },
];

export const educationalToys = [
  {
    id: crypto.randomUUID(),
    image: colorPuzzle,
    name: "Color Puzzle",
    description: "A colorful puzzle toy",
    price: 18,
  },
  {
    id: crypto.randomUUID(),
    image: shapePuzzle,
    name: "Shape Puzzle",
    description: "A puzzle for learning shapes",
    price: 22,
  },
  {
    id: crypto.randomUUID(),
    image: snakeLego,
    name: "Snake Lego",
    description: "A fun snake lego puzzle",
    price: 20,
  },
  {
    id: crypto.randomUUID(),
    image: stackPuzzle,
    name: "Stack Puzzle",
    description: "A stacking puzzle toy",
    price: 24,
  },
];

export const plushies = [
  {
    id: crypto.randomUUID(),
    image: elephantPlushie,
    name: "Elephant Plushie",
    description: "A soft and cuddly elephant stuffed animal",
    price: 16,
  },
  {
    id: crypto.randomUUID(),
    image: giraffePlushie,
    name: "Giraffe Plushie",
    description: "A tall and lovable giraffe stuffed animal",
    price: 19,
  },
  {
    id: crypto.randomUUID(),
    image: lionPlushie,
    name: "Lion Plushie",
    description: "A brave and fluffy lion stuffed animal",
    price: 18,
  },
  {
    id: crypto.randomUUID(),
    image: monkeyPlushie,
    name: "Monkey Plushie",
    description: "A playful and adorable monkey stuffed animal",
    price: 15,
  },
  {
    id: crypto.randomUUID(),
    image: penguinPlushie,
    name: "Penguin Plushie",
    description: "A cute and chubby penguin stuffed animal",
    price: 14,
  },
  {
    id: crypto.randomUUID(),
    image: puppyPlushie,
    name: "Puppy Plushie",
    description: "A sweet and snuggly puppy stuffed animal",
    price: 17,
  },
  {
    id: crypto.randomUUID(),
    image: teddyPlushie,
    name: "Teddy Bear",
    description: "A classic and cozy teddy bear stuffed animal",
    price: 20,
  },
];

export const vehicles = [
  {
    id: crypto.randomUUID(),
    image: carVehicle,
    name: "Car",
    description: "A classic toy car for little drivers",
    price: 16,
  },
  {
    id: crypto.randomUUID(),
    image: helicopterVehicle,
    name: "Helicopter",
    description: "A fun toy helicopter that spins and soars",
    price: 22,
  },
  {
    id: crypto.randomUUID(),
    image: jeepVehicle,
    name: "Jeep",
    description: "A rugged toy jeep for off-road adventures",
    price: 19,
  },
  {
    id: crypto.randomUUID(),
    image: scootyVehicle,
    name: "Scooty",
    description: "A zippy toy scooter for city rides",
    price: 14,
  },
  {
    id: crypto.randomUUID(),
    image: tractorVehicle,
    name: "Tractor",
    description: "A sturdy toy tractor for farm play",
    price: 18,
  },
  {
    id: crypto.randomUUID(),
    image: vanVehicle,
    name: "Van",
    description: "A spacious toy van for hauling cargo",
    price: 17,
  },
];
