const carData = [
    {
      id: 1,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-front-three-quarter-74.jpeg?isig=0&q=80",
      images: [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/47051/compass-exterior-left-side-view.jpeg?q=80",
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/47051/compass-exterior-car-roof-14.jpeg?isig=0&q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/47051/compass-exterior-right-front-three-quarter-70.jpeg?q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/47051/compass-interior-rear-seats.jpeg?q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/47051/compass-interior-dashboard.jpeg?q=80'
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
      engineType: 'V6',
      colorOptions: ['Red', 'Blue', 'Black', 'White'],
      safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
      horsepower: 300,
      torque: '400 Nm',
      zeroToSixty: '5.5 seconds',
      reviews: [
        {
          id: 1,
          reviewer: "John Doe",
          date: "2024-10-01",
          comment: "Great car, very smooth ride!",
          rating: "4"
        },
        {
          id: 2,
          reviewer: "Jane Smith",
          date: "2024-09-29",
          comment: "The interior was clean and comfortable.",
          rating: "5"
        },
        {
          id: 3,
          reviewer: "Mike Brown",
          date: "2024-09-22",
          comment: "Handled really well on the highway.",
          rating: "5"
        }
      ]
    },
    {
      id: 2,
      image: "https://imgd.aeplcdn.com/664x374/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=80",
      images: [
        'https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-left-side-view-3.jpeg?isig=0&q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/102663/baleno-exterior-right-rear-three-quarter.jpeg?isig=0&q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/102663/baleno-interior-rear-seats.jpeg?isig=0&q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/102663/baleno-interior-dashboard-3.jpeg?isig=0&q=80'
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
      engineType: 'V6',
      colorOptions: ['Red', 'Blue', 'Black', 'White'],
      safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
      horsepower: 300,
      torque: '400 Nm',
      zeroToSixty: '5.5 seconds',
      reviews: [
        {
          id: 1,
          reviewer: "Alice Green",
          date: "2024-10-02",
          comment: "Amazing value for the price!",
          rating: "4"
        },
        {
          id: 2,
          reviewer: "Tom Hanks",
          date: "2024-09-15",
          comment: "Good mileage, but the ride could be smoother.",
          rating: "4"
        },
        {
          id: 3,
          reviewer: "Sarah Lee",
          date: "2024-09-28",
          comment: "Enjoyed driving it around the city.",
          rating: "5"
        }
      ]
    },
    {
      id: 3,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
      images: [
        ''
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
      engineType: 'V6',
      colorOptions: ['Red', 'Blue', 'Black', 'White'],
      safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
      horsepower: 300,
      torque: '400 Nm',
      zeroToSixty: '5.5 seconds',
      reviews: [
        {
          id: 1,
          reviewer: "Robert King",
          date: "2024-10-03",
          comment: "Perfect for city driving, very responsive.",
          rating: "5"
        },
        {
          id: 2,
          reviewer: "Emily Davis",
          date: "2024-09-27",
          comment: "Love the compact size and smooth handling.",
          rating: "5"
        },
        {
          id: 3,
          reviewer: "James Clark",
          date: "2024-09-30",
          comment: "Couldn’t ask for more from a rental.",
          rating: "5"
        }
      ]
    },
    {
      id: 4,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      images: [
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-2.jpeg?q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-1.jpeg?q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-4.jpeg?q=80'
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
      engineType: 'V6',
      colorOptions: ['Red', 'Blue', 'Black', 'White'],
      safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
      horsepower: 300,
      torque: '400 Nm',
      zeroToSixty: '5.5 seconds',
      reviews: [
        {
          id: 1,
          reviewer: "Olivia Williams",
          date: "2024-10-02",
          comment: "Best sedan I’ve rented so far!",
          rating: "5"
        },
        {
          id: 2,
          reviewer: "Jacob Wilson",
          date: "2024-09-24",
          comment: "Very comfortable seats, good for long drives.",
          rating: "5"
        },
        {
          id: 3,
          reviewer: "Sophia Miller",
          date: "2024-09-22",
          comment: "Handles well in traffic.",
          rating: "4"
        }
      ]
    },
    {
      id: 5,
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80",
      images: [
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/141115/creta-exterior-right-front-three-quarter-1.jpeg?q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/141115/creta-exterior-right-front-three-quarter-2.jpeg?q=80',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/141115/creta-exterior-right-front-three-quarter-3.jpeg?q=80'
      ],
      name: "Hyundai Creta 2021",
      price: "₹130/hr",
      distance: "5.5 km away",
      rating: "4.83 ★ | 60 Trips",
      type: "SUV",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "5 Seater",
      modelYear: 2021,
      offers: ["10% off"],
      addOns: ["Child seat", "Wi-Fi"],
      deliveryType: false,
      engineType: 'V6',
      colorOptions: ['Red', 'Blue', 'Black', 'White'],
      safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
      horsepower: 300,
      torque: '400 Nm',
      zeroToSixty: '5.5 seconds',
      reviews: [
        {
          id: 1,
          reviewer: "Chris Johnson",
          date: "2024-10-01",
          comment: "Great for family trips.",
          rating: "5"
        },
        {
          id: 2,
          reviewer: "Megan Lee",
          date: "2024-09-29",
          comment: "Very spacious and comfortable.",
          rating: "5"
        },
        {
          id: 3,
          reviewer: "David Anderson",
          date: "2024-09-28",
          comment: "The mileage could be better.",
          rating: "4"
        }
      ]
    },
    {
        id: 6,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/125717/fortuner-exterior-right-front-three-quarter-15.jpeg?isig=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/125717/fortuner-exterior-right-front-three-quarter-1.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/125717/fortuner-exterior-right-front-three-quarter-2.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/125717/fortuner-exterior-right-front-three-quarter-3.jpeg?q=80'
        ],
        name: "Toyota Fortuner 2022",
        price: "₹300/hr",
        distance: "2.5 km away",
        rating: "4.9 ★ | 28 Trips",
        type: "SUV",
        transmission: "Automatic",
        fuelType: "Diesel",
        seats: "7 Seater",
        modelYear: 2022,
        offers: ["15% off"],
        addOns: ["GPS", "Roof Rack"],
        deliveryType: false,
        engineType: 'V8',
        colorOptions: ['Black', 'Silver', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Blind Spot Monitoring', 'Hill Assist'],
        horsepower: 450,
        torque: '600 Nm',
        zeroToSixty: '4.8 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Sam Wilson",
            date: "2024-09-30",
            comment: "Perfect for long road trips with family.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Elena Richards",
            date: "2024-09-22",
            comment: "Loved the high seating position.",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Paul Brown",
            date: "2024-09-15",
            comment: "Could use a bit more legroom in the third row.",
            rating: "4"
          }
        ]
      },
      {
        id: 7,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/100853/venue-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/100853/venue-exterior-right-front-three-quarter-1.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/100853/venue-exterior-right-front-three-quarter-2.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/100853/venue-exterior-right-front-three-quarter-3.jpeg?q=80'
        ],
        name: "Hyundai Venue 2022",
        price: "₹140/hr",
        distance: "5.0 km away",
        rating: "4.75 ★ | 20 Trips",
        type: "SUV",
        transmission: "Manual",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2022,
        offers: ["10% off"],
        addOns: ["Wi-Fi", "Extra Storage"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Silver', 'Black'],
        safetyFeatures: ['Airbags', 'ABS', 'Lane Departure Warning', 'Rear Camera'],
        horsepower: 350,
        torque: '450 Nm',
        zeroToSixty: '6.2 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Charlie Adams",
            date: "2024-09-26",
            comment: "Great for city driving, very nimble.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Lucy Wright",
            date: "2024-09-12",
            comment: "Good storage space and comfortable ride.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "David Lee",
            date: "2024-09-20",
            comment: "Handles well, especially in tight spaces.",
            rating: "5"
          }
        ]
      },
      {
        id: 8,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/137839/hilux-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/137839/hilux-exterior-right-front-three-quarter-1.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/137839/hilux-exterior-right-front-three-quarter-3.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/137839/hilux-exterior-right-front-three-quarter-4.jpeg?q=80'
        ],
        name: "Toyota Hilux 2023",
        price: "₹320/hr",
        distance: "3.4 km away",
        rating: "4.8 ★ | 10 Trips",
        type: "Truck",
        transmission: "Manual",
        fuelType: "Diesel",
        seats: "5 Seater",
        modelYear: 2023,
        offers: ["20% off"],
        addOns: ["Off-road Tires", "Tow Package"],
        deliveryType: false,
        engineType: 'V8',
        colorOptions: ['Black', 'Red', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Hill Descent Control', 'Traction Control'],
        horsepower: 500,
        torque: '700 Nm',
        zeroToSixty: '5.2 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Jason Harris",
            date: "2024-09-28",
            comment: "Great for off-roading, lots of power.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Olivia Walker",
            date: "2024-09-25",
            comment: "Handled well on rough terrain.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "Henry Green",
            date: "2024-09-18",
            comment: "Perfect for hauling and towing heavy loads.",
            rating: "5"
          }
        ]
      },
      {
        id: 9,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115411/tiguan-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/115411/tiguan-exterior-right-front-three-quarter-1.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/115411/tiguan-exterior-right-front-three-quarter-3.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/115411/tiguan-exterior-right-front-three-quarter-4.jpeg?q=80'
        ],
        name: "Volkswagen Tiguan 2022",
        price: "₹210/hr",
        distance: "6.8 km away",
        rating: "4.7 ★ | 15 Trips",
        type: "SUV",
        transmission: "Automatic",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2022,
        offers: ["5% off"],
        addOns: ["Wi-Fi", "Child Seat"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Black', 'White', 'Silver', 'Blue'],
        safetyFeatures: ['Airbags', 'ABS', 'Blind Spot Monitoring', 'Rear Cross Traffic Alert'],
        horsepower: 400,
        torque: '500 Nm',
        zeroToSixty: '5.8 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Anna Cooper",
            date: "2024-09-30",
            comment: "Smooth ride, very spacious.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "James Martin",
            date: "2024-09-16",
            comment: "Great for long drives, very comfortable.",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Emma Evans",
            date: "2024-09-12",
            comment: "Could use better fuel economy.",
            rating: "4"
          }
        ]
      },
      {
        id: 10,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141530/gloster-exterior-right-front-three-quarter-14.jpeg?isig=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/141530/gloster-exterior-right-front-three-quarter-1.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/141530/gloster-exterior-right-front-three-quarter-2.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/141530/gloster-exterior-right-front-three-quarter-3.jpeg?q=80'
        ],
        name: "MG Gloster 2023",
        price: "₹280/hr",
        distance: "4.9 km away",
        rating: "4.9 ★ | 18 Trips",
        type: "SUV",
        transmission: "Automatic",
        fuelType: "Diesel",
        seats: "7 Seater",
        modelYear: 2023,
        offers: ["12% off"],
        addOns: ["Sunroof", "Heated Seats"],
        deliveryType: false,
        engineType: 'V8',
        colorOptions: ['White', 'Black', 'Blue'],
        safetyFeatures: ['Airbags', 'ABS', 'Adaptive Cruise Control', 'Lane Assist'],
        horsepower: 450,
        torque: '600 Nm',
        zeroToSixty: '5.0 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Laura Simmons",
            date: "2024-09-27",
            comment: "Luxury experience, worth the price.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Ben Foster",
            date: "2024-09-19",
            comment: "Spacious and powerful, loved the tech.",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Grace Nelson",
            date: "2024-09-14",
            comment: "Perfect for large families.",
            rating: "5"
          }
        ]
      },
      {
        id: 11,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/134287/city-exterior-right-front-three-quarter-78.jpeg?isig=0&q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/134287/city-exterior-right-front-three-quarter-79.jpeg?isig=0&q=80'
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
        offers: ["10% off"],
        addOns: [],
        deliveryType: true,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Alice Brown",
            date: "2024-10-10",
            comment: "Comfortable ride with great fuel efficiency.",
            rating: "4"
          },
          {
            id: 2,
            reviewer: "John Doe",
            date: "2024-10-11",
            comment: "Amazing features for the price!",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Emily White",
            date: "2024-10-12",
            comment: "Sleek design and smooth handling.",
            rating: "5"
          }
        ]
      },
      {
        id: 12,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80'
        ],
        name: "Mahindra XUV700 2023",
        price: "₹320/hr",
        distance: "8.9 km away",
        rating: "4.8 ★ | 16 Trips",
        type: "SUV",
        transmission: "Automatic",
        fuelType: "Diesel",
        seats: "7 Seater",
        modelYear: 2023,
        offers: ["20% off"],
        addOns: ["Zoom Plus"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Michael Green",
            date: "2024-10-09",
            comment: "Very spacious and powerful. Loved it!",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Sarah Johnson",
            date: "2024-10-10",
            comment: "Great value for a family car.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "Tom Wilson",
            date: "2024-10-11",
            comment: "Good performance but slightly expensive.",
            rating: "4"
          }
        ]
      },
      {
        id: 13,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/51909/a4-exterior-right-front-three-quarter-3.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/51909/a4-exterior-right-front-three-quarter-4.jpeg?q=80'
        ],
        name: "Audi A4 2023",
        price: "₹550/hr",
        distance: "14.2 km away",
        rating: "5.0 ★ | 10 Trips",
        type: "Luxury",
        transmission: "Automatic",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2023,
        offers: ["10% off"],
        addOns: ["FASTag"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Jessica Taylor",
            date: "2024-10-09",
            comment: "Luxurious ride, absolutely loved it!",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Daniel King",
            date: "2024-10-10",
            comment: "Top-notch performance and style.",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Kate Lopez",
            date: "2024-10-11",
            comment: "A bit pricey but worth every penny.",
            rating: "5"
          }
        ]
      },
      {
        id: 14,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/x1-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/140591/x1-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/140591/x1-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80'
        ],
        name: "BMW X1 2024",
        price: "₹400/hr",
        distance: "10.5 km away",
        rating: "4.7 ★ | 13 Trips",
        type: "SUV",
        transmission: "Automatic",
        fuelType: "Diesel",
        seats: "5 Seater",
        modelYear: 2024,
        offers: [],
        addOns: ["Zoom Plus"],
        deliveryType: true,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Rachel Adams",
            date: "2024-10-09",
            comment: "Great handling and comfort. Highly recommended.",
            rating: "4"
          },
          {
            id: 2,
            reviewer: "Kevin Martinez",
            date: "2024-10-10",
            comment: "Smooth ride but a bit on the higher side.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "Olivia Brown",
            date: "2024-10-11",
            comment: "Perfect for city driving.",
            rating: "5"
          }
        ]
      },
      {
        id: 15,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/174323/seltos-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/174323/seltos-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80'
        ],
        name: "Kia Seltos 2023",
        price: "₹280/hr",
        distance: "7.8 km away",
        rating: "4.6 ★ | 19 Trips",
        type: "SUV",
        transmission: "Automatic",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2023,
        offers: [],
        addOns: [],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "William Harris",
            date: "2024-10-09",
            comment: "Stylish and comfortable, perfect for my family.",
            rating: "4"
          },
          {
            id: 2,
            reviewer: "Sophia Clark",
            date: "2024-10-10",
            comment: "Great performance and fuel economy.",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Liam Lee",
            date: "2024-10-11",
            comment: "A good choice for city dwellers.",
            rating: "4"
          }
        ]
      },
      {
        id: 16,
        image: "https://imgd.aeplcdn.com/664x374/cw/ec/28376/Nissan-Terrano-Front-view-93548.jpg?v=201711021421&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/28376/Nissan-Terrano-Front-view-93549.jpg?v=201711021421&q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/28376/Nissan-Terrano-Front-view-93550.jpg?v=201711021421&q=80',
          'https://imgd.aeplcdn.com/664x374/n/cw/ec/28376/Nissan-Terrano-Back-view-93552.jpg?v=201711021421&q=80'
        ],
        name: "Nissan Terrano 2021",
        price: "₹230/hr",
        distance: "9.6 km away",
        rating: "4.8 ★ | 12 Trips",
        type: "SUV",
        transmission: "Manual",
        fuelType: "Diesel",
        seats: "5 Seater",
        modelYear: 2021,
        offers: ["10% off"],
        addOns: ["FASTag"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "James Smith",
            date: "2024-10-01",
            comment: "Great ride for off-roading.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Maria Johnson",
            date: "2024-10-05",
            comment: "Spacious and comfortable.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "David Brown",
            date: "2024-10-08",
            comment: "Fuel-efficient for a SUV.",
            rating: "4"
          }
        ]
      },
      {
        id: 17,
        image: "https://imgd.aeplcdn.com/664x374/cw/ec/12624/Fiat-Linea-Exterior-128099.jpg?wm=0&q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/12624/Fiat-Linea-Exterior-128100.jpg?wm=0&q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/12624/Fiat-Linea-Exterior-128101.jpg?wm=0&q=80',
          'https://imgd.aeplcdn.com/664x374/n/cw/ec/12624/Fiat-Linea-Interior-128102.jpg?wm=0&q=80'
        ],
        name: "Fiat Linea 2020",
        price: "₹140/hr",
        distance: "6.3 km away",
        rating: "4.5 ★ | 21 Trips",
        type: "Sedan",
        transmission: "Manual",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2020,
        offers: [],
        addOns: [],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Emily Davis",
            date: "2024-10-02",
            comment: "Smooth handling and good performance.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Michael Wilson",
            date: "2024-10-06",
            comment: "Stylish design and comfortable.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "Sarah Taylor",
            date: "2024-10-09",
            comment: "Good value for money.",
            rating: "4"
          }
        ]
      },
      {
        id: 18,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-2.jpeg?q=80",
        images: [
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-3.jpeg?q=80',
          'https://imgd.aeplcdn.com/370x208/n/cw/ec/40371/octavia-exterior-right-front-three-quarter-4.jpeg?q=80',
          'https://imgd.aeplcdn.com/664x374/n/cw/ec/40371/octavia-interior-128103.jpg?q=80'
        ],
        name: "Skoda Octavia 2023",
        price: "₹310/hr",
        distance: "11.0 km away",
        rating: "4.9 ★ | 8 Trips",
        type: "Sedan",
        transmission: "Automatic",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2023,
        offers: ["20% off"],
        addOns: ["Zoom Plus"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Jessica Martin",
            date: "2024-10-03",
            comment: "Exceptional driving experience.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Daniel Lee",
            date: "2024-10-07",
            comment: "Stylish and high-quality interior.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "Anna Gonzalez",
            date: "2024-10-10",
            comment: "Highly recommend for long trips.",
            rating: "5"
          }
        ]
      },
      {
        id: 19,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
        images: [
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/178535/c-class-exterior-right-front-three-quarter-2.jpeg?q=80",
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/178535/c-class-exterior-right-front-three-quarter-3.jpeg?q=80",
          "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-interior-128104.jpg?q=80"
        ],
        name: "Mercedes-Benz C-Class 2022",
        price: "₹600/hr",
        distance: "15.0 km away",
        rating: "5.0 ★ | 9 Trips",
        type: "Luxury",
        transmission: "Automatic",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2022,
        offers: ["10% off"],
        addOns: ["FASTag"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Sophia Martinez",
            date: "2024-10-04",
            comment: "Luxury and comfort combined.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Henry Robinson",
            date: "2024-10-08",
            comment: "Best car I've ever rented.",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Emma Walker",
            date: "2024-10-10",
            comment: "The ride quality is top-notch.",
            rating: "5"
          }
        ]
      },
      {
        id: 20,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/131131/xc60-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
        images: [
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/131131/xc60-exterior-right-front-three-quarter-2.jpeg?q=80",
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/131131/xc60-exterior-right-front-three-quarter-4.jpeg?q=80",
          "https://imgd.aeplcdn.com/664x374/n/cw/ec/131131/xc60-interior-128105.jpg?q=80"
        ],
        name: "Volvo XC60 2024",
        price: "₹500/hr",
        distance: "12.5 km away",
        rating: "4.8 ★ | 11 Trips",
        type: "SUV",
        transmission: "Automatic",
        fuelType: "Diesel",
        seats: "5 Seater",
        modelYear: 2024,
        offers: [],
        addOns: ["Zoom Plus"],
        deliveryType: true,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Lucas Harris",
            date: "2024-10-05",
            comment: "Powerful and smooth drive.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Isabella Clark",
            date: "2024-10-09",
            comment: "Spacious interior and great features.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "Ethan Lewis",
            date: "2024-10-12",
            comment: "Perfect for family trips.",
            rating: "5"
          }
        ]
      },
      {
        id: 21,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174975/wrangler-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
        images: [
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/174975/wrangler-facelift-exterior-right-front-three-quarter-2.jpeg?q=80",
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/174975/wrangler-facelift-exterior-right-front-three-quarter-3.jpeg?q=80",
          "https://imgd.aeplcdn.com/664x374/n/cw/ec/174975/wrangler-facelift-interior.jpg?q=80"
        ],
        name: "Jeep Wrangler 2023",
        price: "₹350/hr",
        distance: "14.8 km away",
        rating: "4.7 ★ | 7 Trips",
        type: "SUV",
        transmission: "Manual",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2023,
        offers: ["10% off"],
        addOns: ["FASTag"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Sophia Anderson",
            date: "2024-10-06",
            comment: "Amazing off-road capabilities!",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Jackson Lee",
            date: "2024-10-10",
            comment: "Comfortable for long drives.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "Mia Taylor",
            date: "2024-10-12",
            comment: "Love the rugged look and feel.",
            rating: "4"
          }
        ]
      },
      {
        id: 22,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/55215/defender-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
        images: [
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/55215/defender-exterior-right-front-three-quarter-2.jpeg?q=80",
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/55215/defender-exterior-right-front-three-quarter-4.jpeg?q=80",
          "https://imgd.aeplcdn.com/664x374/n/cw/ec/55215/defender-interior.jpg?q=80"
        ],
        name: "Land Rover Defender 2024",
        price: "₹450/hr",
        distance: "13.6 km away",
        rating: "4.9 ★ | 10 Trips",
        type: "SUV",
        transmission: "Automatic",
        fuelType: "Diesel",
        seats: "5 Seater",
        modelYear: 2024,
        offers: ["20% off"],
        addOns: ["Zoom Plus"],
        deliveryType: true,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Oliver Wilson",
            date: "2024-10-01",
            comment: "Best SUV I’ve ever driven!",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Emma Garcia",
            date: "2024-10-05",
            comment: "High quality and very comfortable.",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Liam Martinez",
            date: "2024-10-09",
            comment: "A bit pricey, but worth it for the features.",
            rating: "4"
          }
        ]
      },
      {
        id: 23,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/139465/rx-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
        images: [
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/139465/rx-exterior-right-front-three-quarter-2.jpeg?q=80",
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/139465/rx-exterior-right-front-three-quarter-3.jpeg?q=80",
          "https://imgd.aeplcdn.com/664x374/n/cw/ec/139465/rx-interior.jpg?q=80"
        ],
        name: "Lexus RX 2023",
        price: "₹420/hr",
        distance: "15.5 km away",
        rating: "5.0 ★ | 6 Trips",
        type: "Luxury",
        transmission: "Automatic",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2023,
        offers: [],
        addOns: ["FASTag"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Ava Robinson",
            date: "2024-10-02",
            comment: "Luxury at its best!",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "James Wright",
            date: "2024-10-08",
            comment: "Smooth ride and high tech features.",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Mason Scott",
            date: "2024-10-12",
            comment: "Perfect for business trips.",
            rating: "5"
          }
        ]
      },
      {
        id: 24,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47336/e-class-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80",
        images: [
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/47336/e-class-exterior-right-front-three-quarter-2.jpeg?q=80",
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/47336/e-class-exterior-right-front-three-quarter-3.jpeg?q=80",
          "https://imgd.aeplcdn.com/664x374/n/cw/ec/47336/e-class-interior.jpg?q=80"
        ],
        name: "Mercedes-Benz E-Class 2022",
        price: "₹550/hr",
        distance: "14.0 km away",
        rating: "4.9 ★ | 8 Trips",
        type: "Luxury",
        transmission: "Automatic",
        fuelType: "Petrol",
        seats: "5 Seater",
        modelYear: 2022,
        offers: ["10% off"],
        addOns: ["Zoom Plus"],
        deliveryType: false,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Charlotte Miller",
            date: "2024-10-03",
            comment: "Absolutely luxurious, feels premium.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Ethan Davis",
            date: "2024-10-07",
            comment: "Great comfort and features.",
            rating: "4"
          },
          {
            id: 3,
            reviewer: "Isabella Moore",
            date: "2024-10-10",
            comment: "Very smooth driving experience.",
            rating: "5"
          }
        ]
      },
      {
        id: 25,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/53591/q5-exterior-right-front-three-quarter-36.jpeg?isig=0&q=80",
        images: [
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/53591/q5-exterior-right-front-three-quarter-2.jpeg?q=80",
          "https://imgd.aeplcdn.com/370x208/n/cw/ec/53591/q5-exterior-right-front-three-quarter-3.jpeg?q=80",
          "https://imgd.aeplcdn.com/664x374/n/cw/ec/53591/q5-interior.jpg?q=80"
        ],
        name: "Audi Q5 2024",
        price: "₹480/hr",
        distance: "12.8 km away",
        rating: "5.0 ★ | 12 Trips",
        type: "Luxury",
        transmission: "Automatic",
        fuelType: "Diesel",
        seats: "5 Seater",
        modelYear: 2024,
        offers: ["20% off"],
        addOns: ["FASTag"],
        deliveryType: true,
        engineType: 'V6',
        colorOptions: ['Red', 'Blue', 'Black', 'White'],
        safetyFeatures: ['Airbags', 'ABS', 'Traction Control', 'Lane Assist'],
        horsepower: 300,
        torque: '400 Nm',
        zeroToSixty: '5.5 seconds',
        reviews: [
          {
            id: 1,
            reviewer: "Benjamin Hernandez",
            date: "2024-10-04",
            comment: "Luxury and performance in one.",
            rating: "5"
          },
          {
            id: 2,
            reviewer: "Harper Thomas",
            date: "2024-10-08",
            comment: "A premium feel, worth every penny.",
            rating: "5"
          },
          {
            id: 3,
            reviewer: "Lucas Rodriguez",
            date: "2024-10-11",
            comment: "Best SUV for long trips.",
            rating: "5"
          }
        ]
      }

    ]

    

