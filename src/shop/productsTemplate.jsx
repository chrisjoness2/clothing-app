import { Link } from "react-router-dom";




export const Products = (props) => {
    const {productName, price, Img, productPage} = props.data;
    return(
        <div>
            <div className="allTopsTemplate">
                <Link to={productPage}> {Img} </Link>
            </div>
            <div className="productNamePrice">
                <h3 className="topName"> {productName} </h3>
                <h3 className="miniPrice"> ${price}</h3>
            </div>   
        </div>
    )
}



export const DressProductTemplate = (props) => {
    const {productName, price, Img, productPage} = props.data;
    return(
        <div>
            <div className="allTopsTemplate">
                <Link to={productPage}> {Img} </Link>
            </div>
            <div className="productNamePrice">
                <h3 className="topName"> {productName} </h3>
                <h3 className="miniPrice"> ${price}</h3>
            </div> 

        </div>
    )
}

export const IndvidualTopsLayout = (props) => {
    return(
        <div className="entirePageDiv">
            <div className="detailDiv">
                <img className="individualImage" src={props.img} alt="image" />
                <img className="individualImage" src={props.img2} alt="image" />
            </div>
            <div className="detailDiv">
                <div className="individualNamePriceDiv">
                    <p className="name"> {props.name} </p>
                    <h1 className="individualPrice"> ${props.price} </h1>
                    <p className="description"> {props.description} </p>
                    <div> <button className="addBtn"> Add To Cart </button></div>
                </div>
            </div>
        </div>
    )
} 



