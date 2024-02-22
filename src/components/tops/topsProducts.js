import top1 from "../tops/topsImages/top1.jpeg";
import top1Hov from "../tops/topsImages/top1hover.jpg";
import top2 from "../tops/topsImages/top2.jpeg";
import top2Hov from "../tops/topsImages/top2hover.jpg";
import top3 from "../tops/topsImages/top3.jpeg";
import top3Hov from "../tops/topsImages/top3hover.jpg";
import top4 from "../tops/topsImages/top4.jpeg";
import top4Hov from "../tops/topsImages/top4hover.jpg";
import top5 from "../tops/topsImages/top5.jpeg";
import top5Hov from "../tops/topsImages/top5hover.jpg";
import top6 from "../tops/topsImages/top6.jpeg";
import top6Hov from "../tops/topsImages/top6hover.jpg";
import top7 from "../tops/topsImages/top7.jpeg";
import top7Hov from "../tops/topsImages/top7hover.jpg";
import top8 from "../tops/topsImages/top8.jpeg";
import top8Hov from "../tops/topsImages/top8hover.jpg";
import { Link } from 'react-router-dom';


export const TopsProducts = [
    {
        id: 1,
        productName: <Link to="/top1"> Blue Top </Link>,
        price: "22",
        productPage: '/top1',
        Img: <img className="topsImgs" src={top1Hov}
        onMouseOver={e => (e.currentTarget.src=top1)}
        onMouseOut={e => (e.currentTarget.src=top1Hov)} />
},
{
        id: 2,
        productName: <Link to="/top2"> Orange Top </Link>,
        price: "22",
        productPage: "/top2",
        Img: <img className="topsImgs" src={top2Hov}
        onMouseOver={e => (e.currentTarget.src=top2)}
        onMouseOut={e => (e.currentTarget.src=top2Hov)} />


},
{
        id: 3,
        productName: <Link to="/top3"> Green Top </Link>,
        price: "22",
        productPage: "/top3",
        Img: <img className="topsImgs" src={top3Hov}
        onMouseOver={e => (e.currentTarget.src=top3)}
        onMouseOut={e => (e.currentTarget.src=top3Hov)} />
},
{
        id: 4,
        productName: <Link to="/top4"> Yellow Top </Link>,
        price: "22",
        productPage: "/top4",
        Img: <img className="topsImgs" src={top4Hov}
        onMouseOver={e => (e.currentTarget.src=top4)}
        onMouseOut={e => (e.currentTarget.src=top4Hov)} />
},
{
        id: 5,
        productName: <Link to="/top5"> Black Top </Link>,
        price: "22",
        productPage: "/top5",
        Img: <img className="topsImgs" src={top5Hov}
        onMouseOver={e => (e.currentTarget.src=top5)}
        onMouseOut={e => (e.currentTarget.src=top5Hov)} />
},
{
        id: 6,
        productName: <Link to="/top6"> White Top </Link>,
        price: "22",
        productPage: "/top6",
        Img: <img className="topsImgs" src={top6Hov}
        onMouseOver={e => (e.currentTarget.src=top6)}
        onMouseOut={e => (e.currentTarget.src=top6Hov)} />
},
{
        id: 7,
        productName: <Link to="/top7"> Pink Top </Link>,
        price: "22",
        productPage: "/top7",
        Img: <img className="topsImgs" src={top7Hov}
        onMouseOver={e => (e.currentTarget.src=top7)}
        onMouseOut={e => (e.currentTarget.src=top7Hov)} />
},
{
        id: 8,
        productName: <Link to="/top8"> Purple Top </Link>,
        price: "22",
        productPage: "/top8",
        Img: <img className="topsImgs" src={top8Hov}
        onMouseOver={e => (e.currentTarget.src=top8)}
        onMouseOut={e => (e.currentTarget.src=top8Hov)} />
},
]
