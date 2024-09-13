const carData = [
  {
    id: 1,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-front-three-quarter-74.jpeg?isig=0&q=80"
    ],
    name: "Jeep Compass 2021",
    price: "₹490/hr",
    distance: "3.0 km away",
    rating: "5.0 ★ | 13 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2021,
    offers: ["10% off"],
    addOns: ["FASTag"],
    deliveryType: false,
    reviews: [
      "Excellent car, very comfortable!",
      "Great experience, smooth ride."
    ],
    location: "XYZ Pickup Location",
    additionalCosts: "Protection Package: ₹100"
  },
  {
    id: 2,
    images: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=80"
    ],
    name: "Maruti Suzuki BALENO 2021",
    price: "₹98/hr",
    distance: "8.4 km away",
    rating: "4.66 ★ | 9 Trips",
    type: "Sedan",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2021,
    offers: [],
    addOns: [],
    deliveryType: false,
    reviews: [
      "Good car, value for money."
    ],
    location: "ABC Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 3,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
    ],
    name: "Hyundai i20 2023",
    price: "₹132/hr",
    distance: "10.1 km away",
    rating: "5.0 ★ | 99 Trips",
    type: "Hatchback",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2023,
    offers: ["20% off"],
    addOns: ["Zoom Plus"],
    deliveryType: false,
    reviews: [
      "Fantastic car, very efficient."
    ],
    location: "LMN Pickup Location",
    additionalCosts: "Protection Package: ₹150"
  },
  {
    id: 4,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
    ],
    name: "Honda Amaze 2023",
    price: "₹154/hr",
    distance: "6.7 km away",
    rating: "5.0 ★ | 5 Trips",
    type: "Sedan",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2023,
    offers: [],
    addOns: [],
    deliveryType: false,
    reviews: [
      "Smooth ride and reliable."
    ],
    location: "OPQ Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 5,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80"
    ],
    name: "Hyundai Creta 2024",
    price: "₹278/hr",
    distance: "12.0 km away",
    rating: "5.0 ★ | 11 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: "5 Seater",
    modelYear: 2024,
    offers: ["10% off"],
    addOns: ["FASTag"],
    deliveryType: true,
    reviews: [
      "Spacious and comfortable."
    ],
    location: "RST Pickup Location",
    additionalCosts: "Protection Package: ₹120"
  },
  {
    id: 6,
    images: [
      "https://imgd.aeplcdn.com/664x374/cw/ec/31676/Ford-EcoSport-New-Right-Front-Three-Quarter-111783.jpg?v=201711021421&q=80"
    ],
    name: "Ford EcoSport 2022",
    price: "₹215/hr",
    distance: "7.2 km away",
    rating: "4.8 ★ | 18 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2022,
    offers: [],
    addOns: ["FASTag"],
    deliveryType: false,
    reviews: [
      "Great performance and handling."
    ],
    location: "UVW Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 7,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
    ],
    name: "Renault Kwid 2021",
    price: "₹120/hr",
    distance: "5.8 km away",
    rating: "4.5 ★ | 22 Trips",
    type: "Hatchback",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "4 Seater",
    modelYear: 2021,
    offers: [],
    addOns: [],
    deliveryType: false,
    reviews: [
      "Compact and efficient."
    ],
    location: "XYZ Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 8,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80"
    ],
    name: "Toyota Innova Crysta 2023",
    price: "₹350/hr",
    distance: "9.3 km away",
    rating: "4.9 ★ | 14 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: "7 Seater",
    modelYear: 2023,
    offers: ["10% off"],
    addOns: ["Zoom Plus"],
    deliveryType: true,
    reviews: [
      "Spacious and family-friendly."
    ],
    location: "ABC Pickup Location",
    additionalCosts: "Protection Package: ₹200"
  },
  {
    id: 9,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    ],
    name: "Maruti Suzuki Swift 2022",
    price: "₹150/hr",
    distance: "6.1 km away",
    rating: "4.7 ★ | 17 Trips",
    type: "Hatchback",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2022,
    offers: [],
    addOns: [],
    deliveryType: false,
    reviews: [
      "Fun to drive and reliable."
    ],
    location: "LMN Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 10,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80"
    ],
    name: "Volkswagen Polo 2021",
    price: "₹175/hr",
    distance: "11.2 km away",
    rating: "4.6 ★ | 20 Trips",
    type: "Hatchback",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2021,
    offers: [],
    addOns: ["FASTag"],
    deliveryType: false,
    reviews: [
      "Stylish and efficient."
    ],
    location: "XYZ Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 11,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80"
    ],
    name: "Honda City 2024",
    price: "₹290/hr",
    distance: "13.0 km away",
    rating: "4.9 ★ | 15 Trips",
    type: "Sedan",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2024,
    offers: ["15% off"],
    addOns: ["Zoom Plus"],
    deliveryType: false,
    reviews: [
      "Luxurious and smooth."
    ],
    location: "OPQ Pickup Location",
    additionalCosts: "Protection Package: ₹180"
  },
  {
    id: 12,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/145492/seltos-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
    ],
    name: "Kia Seltos 2023",
    price: "₹275/hr",
    distance: "8.5 km away",
    rating: "5.0 ★ | 9 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: "5 Seater",
    modelYear: 2023,
    offers: ["10% off"],
    addOns: ["FASTag"],
    deliveryType: false,
    reviews: [
      "Excellent car with great features."
    ],
    location: "UVW Pickup Location",
    additionalCosts: "Protection Package: ₹160"
  },
  {
    id: 13,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/142840/altroz-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    ],
    name: "Tata Altroz 2022",
    price: "₹150/hr",
    distance: "7.0 km away",
    rating: "4.8 ★ | 21 Trips",
    type: "Hatchback",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2022,
    offers: [],
    addOns: [],
    deliveryType: false,
    reviews: [
      "Great handling and comfort."
    ],
    location: "XYZ Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 14,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/176947/tiago-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
    ],
    name: "Tata Tiago 2023",
    price: "₹120/hr",
    distance: "5.9 km away",
    rating: "4.6 ★ | 25 Trips",
    type: "Hatchback",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2023,
    offers: ["5% off"],
    addOns: ["FASTag"],
    deliveryType: false,
    reviews: [
      "Compact and fuel-efficient."
    ],
    location: "LMN Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 15,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/27216/sonet-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
    ],
    name: "Kia Sonet 2023",
    price: "₹200/hr",
    distance: "9.8 km away",
    rating: "4.9 ★ | 13 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2023,
    offers: [],
    addOns: ["Zoom Plus"],
    deliveryType: true,
    reviews: [
      "Stylish and comfortable."
    ],
    location: "OPQ Pickup Location",
    additionalCosts: "Protection Package: ₹140"
  },
  {
    id: 16,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/30792/creta-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
    ],
    name: "Hyundai Creta 2022",
    price: "₹260/hr",
    distance: "11.1 km away",
    rating: "4.8 ★ | 20 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2022,
    offers: ["10% off"],
    addOns: ["FASTag"],
    deliveryType: false,
    reviews: [
      "Comfortable and spacious."
    ],
    location: "UVW Pickup Location",
    additionalCosts: "Protection Package: ₹130"
  },
  {
    id: 17,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/22240/fortuner-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    ],
    name: "Toyota Fortuner 2023",
    price: "₹350/hr",
    distance: "14.2 km away",
    rating: "4.9 ★ | 8 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: "7 Seater",
    modelYear: 2023,
    offers: ["15% off"],
    addOns: ["Zoom Plus"],
    deliveryType: true,
    reviews: [
      "Luxurious and powerful."
    ],
    location: "XYZ Pickup Location",
    additionalCosts: "Protection Package: ₹220"
  },
  {
    id: 18,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32855/scala-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
    ],
    name: "Renault Scala 2022",
    price: "₹165/hr",
    distance: "6.5 km away",
    rating: "4.7 ★ | 12 Trips",
    type: "Sedan",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2022,
    offers: ["10% off"],
    addOns: ["FASTag"],
    deliveryType: false,
    reviews: [
      "Comfortable and smooth."
    ],
    location: "ABC Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 19,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/151260/tiago-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
    ],
    name: "Tata Tiago 2022",
    price: "₹130/hr",
    distance: "7.4 km away",
    rating: "4.6 ★ | 18 Trips",
    type: "Hatchback",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2022,
    offers: [],
    addOns: [],
    deliveryType: false,
    reviews: [
      "Great for city driving."
    ],
    location: "LMN Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 20,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141567/harrier-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"
    ],
    name: "Tata Harrier 2023",
    price: "₹295/hr",
    distance: "8.6 km away",
    rating: "4.8 ★ | 14 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: "5 Seater",
    modelYear: 2023,
    offers: ["5% off"],
    addOns: ["Zoom Plus"],
    deliveryType: false,
    reviews: [
      "Stylish and powerful."
    ],
    location: "XYZ Pickup Location",
    additionalCosts: "Protection Package: ₹180"
  },
  {
    id: 21,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/126795/harrier-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"
    ],
    name: "Tata Harrier 2022",
    price: "₹280/hr",
    distance: "10.3 km away",
    rating: "4.7 ★ | 10 Trips",
    type: "SUV",
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: "5 Seater",
    modelYear: 2022,
    offers: [],
    addOns: ["FASTag"],
    deliveryType: true,
    reviews: [
      "Great car with excellent features."
    ],
    location: "UVW Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 22,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/171981/kwid-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
    ],
    name: "Renault Kwid 2022",
    price: "₹115/hr",
    distance: "4.8 km away",
    rating: "4.5 ★ | 16 Trips",
    type: "Hatchback",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "4 Seater",
    modelYear: 2022,
    offers: ["10% off"],
    addOns: ["FASTag"],
    deliveryType: false,
    reviews: [
      "Compact and reliable."
    ],
    location: "XYZ Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 23,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/126812/polo-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
    ],
    name: "Volkswagen Polo 2022",
    price: "₹190/hr",
    distance: "12.0 km away",
    rating: "4.6 ★ | 11 Trips",
    type: "Hatchback",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2022,
    offers: [],
    addOns: ["Zoom Plus"],
    deliveryType: true,
    reviews: [
      "Excellent drive quality."
    ],
    location: "OPQ Pickup Location",
    additionalCosts: "Protection Package: ₹150"
  },
  {
    id: 24,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/147185/celerio-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"
    ],
    name: "Maruti Suzuki Celerio 2023",
    price: "₹140/hr",
    distance: "7.8 km away",
    rating: "4.7 ★ | 23 Trips",
    type: "Hatchback",
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2023,
    offers: ["10% off"],
    addOns: ["FASTag"],
    deliveryType: false,
    reviews: [
      "Good city car with great mileage."
    ],
    location: "UVW Pickup Location",
    additionalCosts: "None"
  },
  {
    id: 25,
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141978/etios-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
    ],
    name: "Toyota Etios 2022",
    price: "₹160/hr",
    distance: "9.5 km away",
    rating: "4.6 ★ | 14 Trips",
    type: "Sedan",
    transmission: "Manual",
    fuelType: "Petrol",
    seats: "5 Seater",
    modelYear: 2022,
    offers: [],
    addOns: [],
    deliveryType: false,
    reviews: [
      "Reliable and efficient."
    ],
    location: "XYZ Pickup Location",
    additionalCosts: "None"
  }
];

export default carData;