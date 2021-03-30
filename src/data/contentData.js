import img1 from "../images/birthdaycake.svg";
import img2 from "../images/present.svg";
import donout from "../images/donout.jpg";
// import cake from "../../images/cake.jpg";
// import desert from "../../images/desert.jpg";
// import cupcakes from "../../images/cupcakes.jpg";
export const initSectionData = [
  {
    id: 1,
    title: "Who are we?",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        placeat cum perferendis nihil modi debitis voluptate sed autem
        cumque praesentium, nobis quia, itaque eum maxime corporis hic
        commodi est dignissimos?`,
    button: "Order now",
    img: img1,
    alt: "who-are-we",
    imgLeft: false,
  },
  {
    id: 2,
    title: "Send a sweet gift to a friend",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        placeat cum perferendis nihil modi debitis voluptate sed autem
        cumque praesentium, nobis quia, itaque eum maxime corporis hic
        commodi est dignissimos?`,
    button: "Order now",
    img: img2,
    alt: "send-gift",
    imgLeft: true,
  },
];

export const initProductData = [
  {
    id: 1,
    title: "Product One",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    img: donout,
    price: "$1.20",
  },
  {
    id: 2,
    title: "Product Two",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    img: donout,
    price: "$12.30",
  },
  {
    id: 3,
    title: "Product Three",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    img: donout,
    price: "$19.20",
  },
  {
    id: 4,
    title: "Product Four",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    img: donout,
    price: "$0.90",
  },
];
