const PRODUCTS = [
  {
    name: "Atta",
    id: Math.random(),
    items: [
      {
        brand: "patanjali",
        quantity: "1kg",
        img: "https://4.imimg.com/data4/WG/MH/ANDROID-9756963/product-500x500.jpeg",
      },
      {
        brand: "ashirwaad",
        quantity: "2kg",
        img: "https://4.imimg.com/data4/WG/MH/ANDROID-9756963/product-500x500.jpeg",
      },
    ],
  },
  {
    name: "Shampoo",
    id: Math.random(),
    items: [
      {
        brand: "ClinicAllClear",
        quantity: "1ltr",
        img: "https://i.pinimg.com/originals/d7/9e/fb/d79efb1601085fbc863d433e3cd66f21.jpg",
      },
      {
        brand: "Dove",
        quantity: "2ltr",
        img: "https://i5.walmartimages.com/asr/0136d733-bf73-42b9-ac0a-8fa65a3d67ad_1.0cdd10d61291e78268cbf3ac05a36ee4.jpeg",
      },
    ],
  },
];

export default PRODUCTS; // module can't have multiple default exports. so there shud be always one default export.
