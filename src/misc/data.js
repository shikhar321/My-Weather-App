export const data = {
  type: "node",
  name: "cities",
  value: 0,
  children: [
    {
      type: "node",
      name: "Hot Cities",
      value: 0,
      children: [
        {
          type: "leaf",
          name: "Tamil Nadu",
          value: 23,
          details: {
            temp: 23,
            population: 6000000,
            cities: [
              { name: "Salem", high: 33, low: 10, population: 1000000 },
              { name: "Chennai", high: 32, low: 9, population: 1500000 },
              { name: "Madurai", high: 32, low: 8, population: 1000000 },
              { name: "Coimbatore", high: 32, low: 11, population: 1000000 },
              {
                name: "Tiruchirappalli",
                high: 30,
                low: 10,
                population: 1500000,
              },
            ],
          },
        },
        {
          type: "leaf",
          name: "Telangana",
          value: 21,
          details: {
            temp: 21,
            population: 3000000,
            cities: [
              { name: "Karimnagar", high: "33", low: "10", population: 500000 },
              {
                name: "Bhuvanagiri",
                high: "32",
                low: "9",
                population: 1000000,
              },
              { name: "Hyderabad", high: "32", low: "8", population: 1000000 },
              { name: "Jangaon", high: "32", low: "11", population: 300000 },
              { name: "Warangal", high: "30", low: "10", population: 200000 },
            ],
          },
        },
        {
          type: "leaf",
          name: "Karnataka",
          value: 20,
          details: {
            temp: 20,
            population: 5000000,
            cities: [
              { name: "Bangalore", high: "33", low: "10", population: 1000000 },
              { name: "Mysore", high: "32", low: "9", population: 2000000 },
              { name: "Mangalore", high: "32", low: "8", population: 800000 },
              { name: "Udupi", high: "32", low: "11", population: 700000 },
              { name: "Kolar", high: "30", low: "10", population: 500000 },
            ],
          },
        },
        {
          type: "leaf",
          name: "Kerala",
          value: 21,
          details: {
            temp: 21,
            population: 2000000,
            cities: [
              { name: "Kochi", high: "33", low: "10", population: 500000 },
              {
                name: "Thiruvananthapuram",
                high: "32",
                low: "9",
                population: 200000,
              },
              { name: "Kozhikode", high: "32", low: "8", population: 300000 },
              { name: "Kannur", high: "32", low: "11", population: 500000 },
              { name: "Kollam", high: "30", low: "10", population: 500000 },
            ],
          },
        },
        {
          type: "leaf",
          name: "Andhra Pradesh",
          value: 24,
          details: {
            temp: 24,
            population: 3500000,
            cities: [
              { name: "Kurnool", high: "33", low: "10", population: 500000 },
              {
                name: "Visakhapatnam",
                high: "32",
                low: "9",
                population: 1000000,
              },
              { name: "Tirupati", high: "32", low: "8", population: 1000000 },
              { name: "Guntur", high: "32", low: "11", population: 600000 },
              { name: "Eluru", high: "30", low: "10", population: 400000 },
            ],
          },
        },
      ],
    },
    {
      type: "node",
      name: "Cool cities",
      value: 0,

      children: [
        {
          type: "leaf",
          name: "Uttar Pradesh",
          value: 12,
          details: {
            temp: 12,
            population: 100000000,
            cities: [
              { name: "Agra", high: "33", low: "10", population: 1000000 },
              { name: "Allahabad", high: "32", low: "9", population: 2000000 },
              { name: "Lucknow", high: "32", low: "8", population: 3000000 },
              { name: "Varanasi", high: "32", low: "11", population: 1000000 },
              { name: "Moradabad", high: "30", low: "10", population: 3000000 },
            ],
          },
        },
        {
          type: "leaf",
          name: "Punjab",
          value: 10,
          details: {
            temp: 10,
            population: 4000000,
            cities: [
              { name: "Mohali", high: "33", low: "10", population: 1000000 },
              { name: "Jalandhar", high: "32", low: "9", population: 1000000 },
              { name: "Patiala", high: "32", low: "8", population: 1000000 },
              { name: "Bathinda", high: "32", low: "11", population: 500000 },
              { name: "Rajpura", high: "30", low: "10", population: 500000 },
            ],
          },
        },
        {
          type: "leaf",
          name: "Madhya Pradesh",
          value: 15,
          details: {
            temp: 15,
            population: 4500000,
            cities: [
              { name: "Bhopal", high: "33", low: "10", population: 1000000 },
              { name: "Indore", high: "32", low: "9", population: 1000000 },
              { name: "Gwalior", high: "32", low: "8", population: 1000000 },
              { name: "Jabalpur", high: "32", low: "11", population: 1000000 },
              { name: "Ujjain", high: "30", low: "10", population: 500000 },
            ],
          },
        },
        {
          type: "leaf",
          name: "Uttarakhand",
          value: 8,
          details: {
            temp: 8,
            population: 3000000,
            cities: [
              { name: "Dehradun", high: "33", low: "10", population: 1000000 },
              { name: "Mussoorie", high: "32", low: "9", population: 500000 },
              { name: "Rishikesh", high: "32", low: "8", population: 500000 },
              { name: "Haridwar", high: "32", low: "11", population: 600000 },
              { name: "Nainital", high: "30", low: "10", population: 400000 },
            ],
          },
        },
        {
          type: "leaf",
          name: "Bihar",
          value: 11,
          details: {
            temp: 10,
            population: 8000000,
            cities: [
              { name: "Patna", high: "33", low: "10", population: 1000000 },
              { name: "Buxar", high: "32", low: "9", population: 1000000 },
              { name: "Katihar", high: "32", low: "8", population: 2000000 },
              { name: "Darbhanga", high: "32", low: "11", population: 2000000 },
              { name: "Gaya", high: "30", low: "10", population: 2000000 },
            ],
          },
        },
      ],
    },
  ],
};
