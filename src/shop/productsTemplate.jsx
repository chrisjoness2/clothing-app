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



