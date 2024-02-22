import { Products } from '../../shop/productsTemplate';
import { TopsProducts } from './topsProducts';

function DressesPage() {
    return (
        <div className="container">
            <div className="topsTitle"> 
                <h1> Tops </h1> 
            </div>
             <div className="topsProducts"> 
             {TopsProducts.map((product) => (
                    <Products data= {product} />
                ))}
            </div>
        </div>
    )
};

export default DressesPage;