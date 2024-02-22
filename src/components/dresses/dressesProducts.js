import dress1 from "../dresses/dressImages/dress1.webp";
import dress1Hov from "../dresses/dressImages/dress1hover.jpg";
import dress2 from "../dresses/dressImages/dress2.avif";
import dress2Hov from "../dresses/dressImages/dress2hover.jpg";
import dress3 from "../dresses/dressImages/dress3.webp";
import dress3Hov from "../dresses/dressImages/dress3hover.jpg";
import dress4 from "../dresses/dressImages/dress4.webp";
import dress4Hov from "../dresses/dressImages/dress4hover.jpg";
import dress5 from "../dresses/dressImages/dress5.jpeg";
import dress5Hov from "../dresses/dressImages/dress5hover.jpg";
import dress6 from "../dresses/dressImages/dress6.jpeg";
import dress6Hov from "../dresses/dressImages/dress6hover.jpg";
import dress7 from "../dresses/dressImages/dress7.jpeg";
import dress7Hov from "../dresses/dressImages/dress7hover.jpg";
import dress8 from "../dresses/dressImages/dress8.webp";
import dress8Hov from "../dresses/dressImages/dress8hover.jpg";
import { Link } from 'react-router-dom';


export const DressesProducts = [
    {
        id: 1,
        productName: <Link to="/dress1"> Blue Top </Link>,
        price: "22",
        productPage: '/dress1',
        Img: <img className="topsImgs" src={dress1Hov}
        onMouseOver={e => (e.currentTarget.src=dress1)}
        onMouseOut={e => (e.currentTarget.src=dress1Hov)} />
},
{
        id: 2,
        productName: <Link to="/dress2"> Orange Top </Link>,
        price: "22",
        productPage: "/dress2",
        Img: <img className="topsImgs" src={dress2Hov}
        onMouseOver={e => (e.currentTarget.src=dress2)}
        onMouseOut={e => (e.currentTarget.src=dress2Hov)} />


},
{
        id: 3,
        productName: <Link to="/dress3"> Green Top </Link>,
        price: "22",
        productPage: "/dress3",
        Img: <img className="topsImgs" src={dress3Hov}
        onMouseOver={e => (e.currentTarget.src=dress3)}
        onMouseOut={e => (e.currentTarget.src=dress3Hov)} />
},
{
        id: 4,
        productName: <Link to="/dress4"> Yellow Top </Link>,
        price: "22",
        productPage: "/dress4",
        Img: <img className="topsImgs" src={dress4}
        onMouseOver={e => (e.currentTarget.src=dress4Hov)}
        onMouseOut={e => (e.currentTarget.src=dress4)} />
},
{
        id: 5,
        productName: <Link to="/dress5"> Black Top </Link>,
        price: "22",
        productPage: "/dress5",
        Img: <img className="topsImgs" src={dress5}
        onMouseOver={e => (e.currentTarget.src=dress5Hov)}
        onMouseOut={e => (e.currentTarget.src=dress5)} />
},
{
        id: 6,
        productName: <Link to="/dress6"> White Top </Link>,
        price: "22",
        productPage: "/dress6",
        Img: <img className="topsImgs" src={dress6}
        onMouseOver={e => (e.currentTarget.src=dress6Hov)}
        onMouseOut={e => (e.currentTarget.src=dress6)} />
},
{
        id: 7,
        productName: <Link to="/dress7"> Pink Top </Link>,
        price: "22",
        productPage: "/dress7",
        Img: <img className="topsImgs" src={dress7}
        onMouseOver={e => (e.currentTarget.src=dress7Hov)}
        onMouseOut={e => (e.currentTarget.src=dress7)} />
},
{
        id: 8,
        productName: <Link to="/dress8"> Purple Top </Link>,
        price: "22",
        productPage: "/dress8",
        Img: <img className="topsImgs" src={dress8Hov}
        onMouseOver={e => (e.currentTarget.src=dress8)}
        onMouseOut={e => (e.currentTarget.src=dress8Hov)} />
},
]