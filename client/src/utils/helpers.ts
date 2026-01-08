export const SLIDES: { id: string; src: string }[] = [
  { id: "0", src: "/images/slide_1.jpg" },
  { id: "1", src: "/images/slide_2.jpg" },
  { id: "2", src: "/images/slide_3.jpg" },
];

export const cafeTables = Array.from({ length: 6 }, (_, row) =>
  Array.from({ length: 5 }, (_, col) => {
    const rowNumber = row + 1;
    const colLetter = String.fromCharCode(65 + col);
    return `${rowNumber}${colLetter}`;
  })
).flat();
export const bookedTables = ["1A", "3E", "5D"];

export const navs: { name: string; to: string }[] = [
  { name: "Hero", to: "hero" },
  { name: "About", to: "about" },
  { name: "Features", to: "features" },
  { name: "Menu", to: "menu" },
  { name: "Events", to: "events" },
  { name: "Reservation", to: "reservation" },
];

export const quotes: { id: number; comment: string; reviewer: string }[] = [
  {
    id: 0,
    comment:
      "“Cooking is an art, but all art requires knowing something about the techniques and materials”",
    reviewer: "Nathan Myhrvold",
  },
  {
    id: 1,
    comment:
      "“Give a man food, and he can eat for a day. Give a man a job, and he can only eat for 30 minutes on break.”",
    reviewer: "Lev L. Spiro",
  },
  {
    id: 2,
    comment:
      "“Find something you're passionate about and keep tremendously interested in it.”",
    reviewer: "Julia Child",
  },
  {
    id: 3,
    comment:
      "“Never work before breakfast; if you have to work before breakfast, eat your breakfast first.”",
    reviewer: "Josh Billings",
  },
];

export const featuredSnacks: {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}[] = [
  {
    id: 1,
    name: "Cheesy Loaded Fries",
    price: 149,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    description:
      "Crispy golden fries loaded with melted cheese and signature spices — comfort food at its best.",
  },
  {
    id: 2,
    name: "Classic Veg Burger",
    price: 129,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    description:
      "Soft buns, crunchy patty, fresh veggies and our in-house sauce for that perfect bite.",
  },
  {
    id: 3,
    name: "Crispy Chicken Popcorn",
    price: 179,
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Popcorn-Chicken.jpg",
    description:
      "Juicy bite-sized chicken coated in a crispy crunch — perfect for sharing (or not).",
  },
  {
    id: 4,
    name: "Masala Cheese Sandwich",
    price: 119,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    description:
      "Grilled sandwich packed with spicy masala, veggies, and gooey cheese layers.",
  },
  {
    id: 5,
    name: "Spicy Paneer Wrap",
    price: 159,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    description:
      "Soft wrap filled with spicy paneer, fresh veggies, and creamy sauces.",
  },
  {
    id: 6,
    name: "Chocolate Fudge Brownie",
    price: 99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description:
      "Rich, gooey chocolate brownie to end your snack cravings on a sweet note.",
  },
];

export const features: { title: string; description: string; icon: string }[] =
  [
    {
      title: "Made Fresh, always",
      icon: "/images/fresh-food.png",
      description:
        "No reheats, no frozen shortcuts — just fresh, flavor-packed snacks every time.",
    },
    {
      title: "Quick Cravings? Sorted",
      icon: "/images/delivery.png",
      description:
        "Fast delivery that keeps your food hot and your mood happier.",
    },
    {
      title: "Worth Every Bite",
      icon: "/images/money.png",
      description: "Big on taste, light on pocket — the perfect snack deal.",
    },
    {
      title: "Packed with care",
      icon: "/images/hygiene.png",
      description:
        "Secure, hygienic packaging so your food reaches you just the way it should.",
    },
  ];

type MenuType = {
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
};
export const menuData: MenuType[] = [
  {
    image:
      "https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg",
    title: "Classic French Fries",
    price: 99,
    description: "crispy salted",
    category: "fries",
  },
  {
    image:
      "https://images.raasakarts.com/insecure/fit/1000/1000/ce/0/plain/https://rasakart-assets.s3.ap-south-1.amazonaws.com/3fa229/prods/BR0RiU017jYgPZ4yWX3u3UmxyHuLDt9YcgxAiafA.jpg@webp",
    title: "Peri Peri Fries",
    price: 129,
    description: "spicy peri peri",
    category: "fries",
  },
  {
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    title: "Cheese Loaded Fries",
    price: 149,
    description: "cheesy delight",
    category: "fries",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeWfmCtM4gAALnbl1samrMkSbJkfZ_QWxmQ&s",
    title: "Garlic Fries",
    price: 139,
    description: "garlic butter",
    category: "fries",
  },
  {
    image:
      "https://greatcurryrecipes.net/wp-content/uploads/2016/07/masalafries-735x944.jpg",
    title: "Masala Fries",
    price: 119,
    description: "desi masala",
    category: "fries",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhY47tSNdgguzcqkseKsyELiHZZDynaNzdg&s",
    title: "Curly Fries",
    price: 149,
    description: "crispy curls",
    category: "fries",
  },
  {
    image:
      "https://pipingpotcurry.com/wp-content/uploads/2020/04/Paneer-Frankie-Kathi-Roll-Recipe-Piping-Pot-Curry.jpg",
    title: "Veg Paneer Wrap",
    price: 159,
    description: "paneer filling",
    category: "wraps",
  },
  {
    image:
      "https://brewbakes.co/wp-content/uploads/2020/12/Chicken-Tikka-Wrap-_636181716490858715.jpg",
    title: "Chicken Tikka Wrap",
    price: 189,
    description: "tikka chicken",
    category: "wraps",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8E0hetiaFUiv24Yc9RmPNjNTm7AM8H-swjw&s",
    title: "Cheese Corn Wrap",
    price: 149,
    description: "corn & cheese",
    category: "wraps",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGCzVwZ8h1Ix77k1DZLpQ3L56shFh2jdkKA&s",
    title: "BBQ Chicken Wrap",
    price: 199,
    description: "bbq flavour",
    category: "wraps",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/fuel-your-day-fresh-flavorful-salad-wrap-vibrant-veggie-delight-perfect-quick-craving-delicious-nutritious-lunch-371348326.jpg",
    title: "Veggie Delight Wrap",
    price: 139,
    description: "fresh veggies",
    category: "wraps",
  },
  {
    image:
      "https://images.ctfassets.net/uw7yiu2kuigc/1FjBKfzkYsNMkZaiDZBxii/038d24ce74937507e51a89ead827e136/Sweet-and-Spicy-Chicken-Wraps-with-Sriracha-Mayonnaise-Lead.jpg",
    title: "Spicy Mayo Wrap",
    price: 149,
    description: "mayo & spice",
    category: "wraps",
  },
  {
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    title: "Classic Veg Burger",
    price: 129,
    description: "veg patty",
    category: "burgers",
  },
  {
    image:
      "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg",
    title: "Crispy Chicken Burger",
    price: 169,
    description: "crispy chicken",
    category: "burgers",
  },
  {
    image: "https://cdn.uengage.io/uploads/6670/image-724468-1756363268.jpeg",
    title: "Cheese Burst Burger",
    price: 159,
    description: "extra cheese",
    category: "burgers",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Qk7Q5s5q0VkvVZf1E7_w3fDzPfBD_aD-g&s",
    title: "BBQ Chicken Burger",
    price: 179,
    description: "bbq flavour",
    category: "burgers",
  },
  {
    image:
      "https://www.thehealthfactory.in/cdn/shop/articles/Grilled_Tandoori_Paneer_Burger_with_Zero_Maida_Burger_Buns_6e1e8812-2c0c-47ca-8bba-495ec3eaa759.jpg?v=1763805465",
    title: "Paneer Tandoori Burger",
    price: 169,
    description: "tandoori paneer",
    category: "burgers",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFxw1LZ6aqQzmHKPWZkGDcpCswLTp9QkLRQ&s",
    title: "Double Patty Burger",
    price: 199,
    description: "double patty",
    category: "burgers",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Popcorn-Chicken.jpg",
    title: "Chicken Popcorn",
    price: 179,
    description: "12 pcs crispy",
    category: "snacks",
  },
  {
    image:
      "https://static.toiimg.com/thumb/84291091.cms?imgsize=407073&width=800&height=800",
    title: "Veg Nuggets",
    price: 129,
    description: "8 pcs crunchy",
    category: "snacks",
  },
  {
    image:
      "https://pipingpotcurry.com/wp-content/uploads/2022/10/Paneer-Pakora-Recipe-Piping-Pot-Curry.jpg",
    title: "Paneer Pakora",
    price: 149,
    description: "crispy bites",
    category: "snacks",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/5cef7b136434550001a53d10/1592904787982-5YKYYYNYKUC2VY93ZSYQ/cheeseballs2.JPG",
    title: "Cheese Balls",
    price: 139,
    description: "gooey inside",
    category: "snacks",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRm5m23DR86jy2tfdgWnCFJCp4kOcGDu5FNQ&s",
    title: "Onion Rings",
    price: 119,
    description: "golden fried",
    category: "snacks",
  },
  {
    image:
      "https://www.sugarandsoul.co/wp-content/uploads/2021/04/chocolate-milkshake-8.jpg",
    title: "Chocolate Shake",
    price: 129,
    description: "thick shake",
    category: "drinks",
  },
  {
    image:
      "https://leitesculinaria.com/wp-content/uploads/2021/06/mexican-mojito.jpg",
    title: "Mint Mojito",
    price: 109,
    description: "refreshing mint",
    category: "drinks",
  },
  {
    image: "https://funmoneymom.com/wp-content/uploads/2021/04/LR2-9422.jpg",
    title: "Strawberry Shake",
    price: 129,
    description: "fresh strawberry",
    category: "drinks",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlY6Jfic67txGqzawSw8wPmcG9FS9EZoVUg&s",
    title: "Oreo Milkshake",
    price: 139,
    description: "oreo blend",
    category: "drinks",
  },
  {
    image:
      "https://deliciousmadeeasy.com/wp-content/uploads/2018/04/chocoholic-cold-brew-coffee-1-of-1-7-scaled.jpg",
    title: "Cold Coffee",
    price: 99,
    description: "chilled coffee",
    category: "beverages",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIOfz3MgQnEBEMuiRsDr_s7XF_YNFPJ7W_g&s",
    title: "Lemon Iced Tea",
    price: 99,
    description: "cool lemon",
    category: "beverages",
  },
  {
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    title: "Chocolate Brownie",
    price: 119,
    description: "gooey brownie",
    category: "desserts",
  },
  {
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/416116214/ZW/QX/PC/132900754/chocolava-cake-500x500.jpeg",
    title: "Choco Lava Cake",
    price: 139,
    description: "lava center",
    category: "desserts",
  },
  {
    image:
      "https://creative-culinary.com/wp-content/uploads/black-forest-ice-cream-2.jpg",
    title: "Ice Cream Sundae",
    price: 129,
    description: "vanilla scoop",
    category: "desserts",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZArWNCDn0cVwlm7USmqniaNakVU0T58bvQ&s",
    title: "Chocolate Muffin",
    price: 89,
    description: "soft muffin",
    category: "desserts",
  },
  {
    image:
      "https://assets.giftalove.com/resources/common/giftimages/productimage2/tempting-heart-shaped-red-velvet-cake.jpg",
    title: "Red Velvet Cake",
    price: 149,
    description: "velvet slice",
    category: "desserts",
  },
  {
    image:
      "https://www.thespicehouse.com/cdn/shop/articles/Maple_Waffles_89a00241-086e-4724-918a-521f852e00ad_720x.jpg?v=1586286648",
    title: "Waffle with Syrup",
    price: 159,
    description: "crispy waffle",
    category: "desserts",
  },
  {
    image:
      "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1737368217&width=800",
    title: "Classic Margherita Pizza",
    price: 249,
    description: "cheese & basil",
    category: "pizza",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wYAPnVcoIqyL_7tiJn6i3RYBUL9OrSvRkw&s",
    title: "Farmhouse Veg Pizza",
    price: 299,
    description: "loaded veggies",
    category: "pizza",
  },
  {
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps5083_CS1988C62.jpg",
    title: "Pepperoni Chicken Pizza",
    price: 349,
    description: "pepperoni chicken",
    category: "pizza",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QKvmzjxgce5L2mCNZBRr0pmh6CN3W5I2_g&s",
    title: "BBQ Chicken Pizza",
    price: 369,
    description: "bbq chicken",
    category: "pizza",
  },
  {
    image: "https://cdn.dotpe.in/longtail/store-items/7885519/6oPcvMcG.jpeg",
    title: "Cheese Burst Pizza",
    price: 329,
    description: "extra cheese",
    category: "pizza",
  },
  {
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg",
    title: "Spicy Paneer Pizza",
    price: 319,
    description: "spicy paneer",
    category: "pizza",
  },
];

type EventType = {
  title: string;
  date: string;
  description: string;
  linkTo: string;
};
export const events: EventType[] = [
  {
    title: "Live Acoustic Night",
    date: "3 Jan, 2026",
    description:
      "Unplug, relax, and enjoy soulful acoustic performances while sipping on your favorite drinks and munching on our signature snacks.",
    linkTo: "#",
  },
  {
    title: "Weekend Snack Fiesta",
    date: "16 - 18 Feb, 2026",
    description:
      "A two-day celebration of our best-selling snacks, exclusive combo offers, and limited-time menu items you don't want to miss.",
    linkTo: "#",
  },
  {
    title: "Open Mic & Chill",
    date: "24 Mar, 2026",
    description:
      "Calling all singers, poets, and storytellers — grab the mic, express yourself, and vibe with an energetic crowd and cozy café vibes.",
    linkTo: "#",
  },
];

export function getToday() {
  const dt = new Date();
  const yyyy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, "0");
  const dd = String(dt.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function extractDate(date: string) {
  const dt = new Date(date);
  const dd = dt.getDate();
  const mm = dt.getMonth() + 1;
  const yy = dt.getFullYear() % 100;
  return `${dd}/${mm}/${yy}`;
}

const MONTHS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS: string[] = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
export function extractDate2(date: string) {
  const dt = new Date(date);
  const day = DAYS[dt.getDay()];
  const dd = dt.getDate();
  const mm = MONTHS[dt.getMonth()];
  return `${day}, ${dd} ${mm}`;
}

export function extractTime(time: string) {
  const t = time.split(":");
  let hr = Number(t[0]);
  let mm = t[1];
  let ampm = hr >= 12 ? "PM" : "AM";
  hr = hr > 12 ? hr - 12 : hr;
  return `${hr}:${mm} ${ampm}`;
}

export function getCpyRtYr() {
  const yy = new Date().getFullYear();
  const yyNext = yy % 100;
  return `${yy}-${yyNext + 1}`;
}

export const SEATS_PER_TABLE = 4;
export const TABLE_FEES = 50;
export const MAINTENANCE = 5;
export function calculateTables(
  baseTable: string,
  members: number,
  allTables: string[],
  reservedSet: Set<string>
) {
  const requiredTables = Math.ceil(members / SEATS_PER_TABLE);
  const startIndex = allTables.indexOf(baseTable);
  const selected: string[] = [];
  for (let i = startIndex; i < allTables.length; i++) {
    const table = allTables[i];
    if (reservedSet.has(table)) continue;
    selected.push(table);
    if (selected.length === requiredTables) break;
  }
  return selected;
}

export interface FormData {
  name: string | undefined;
  email: string | undefined;
  occasion: string | undefined;
  date: string | undefined;
  time: string | undefined;
  message: string | undefined;
}
