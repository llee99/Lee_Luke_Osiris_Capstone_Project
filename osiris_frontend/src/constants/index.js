import { btrOSTshirt, crcOSTshirt, ethOSTshirt } from "../assets/index";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
];
// =================== NavBarList End here ======================

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: 1001,
    img: ethOSTshirt,
    productName: "Ethereal Oversized T-Shirt",
    price: "25.00",
    color: "Black and White",
    badge: true,
    des: "berserker armor",
  },
  {
    _id: 1002,
    img: crcOSTshirt,
    productName: "Crucible Oversized T-Shirt",
    price: "25.00",
    color: "Red and White",
    badge: true,
    des: "boiler room",
  },
  {
    _id: 1003,
    img: btrOSTshirt,
    productName: "Hades Oversized T-Shirt",
    price: "25.00",
    color: "Blue and White",
    badge: true,
    des: "fly",
  },
];
// =================== PaginationItems End here =================
