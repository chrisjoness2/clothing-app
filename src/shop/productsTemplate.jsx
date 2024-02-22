import { Link } from "react-router-dom";




export const Products = (props) => {
    const {productName, price, topImg, tops} = props.data;
    return(
        <div>
            <div className="allTopsTemplate">
                <Link to={tops}> {topImg} </Link>
            </div>
            <div className="productNamePrice">
                <h3 className="topName"> {productName} </h3>
                <h3 className="miniPrice"> ${price}</h3>
            </div>
            
                    
        </div>
    )
}



