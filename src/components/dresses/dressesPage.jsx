import { Products } from '../../shop/productsTemplate';
import { DressesProducts } from './dressesProducts';
import '../dresses/dresses.css';


function DressesPage() {
    return (
        <div className="container">
            <div className="topsTitle"> 
                <h1> Dresses </h1> 
            </div>
             <div className="topsProducts"> 
             {DressesProducts.map((product) => (
                    <Products data= {product} />
                ))}
            </div>
        </div>
    )
};

export default DressesPage;