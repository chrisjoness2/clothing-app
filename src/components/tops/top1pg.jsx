import { IndvidualTopsLayout } from "../../shop/productsTemplate"
import top1 from "../tops/topsImages/top1.jpeg";
import top1Hov from "../tops/topsImages/top1hover.jpg";




function Top1() {
    return(
        <div>
            <IndvidualTopsLayout
            img={top1}
            img2={top1Hov}
            name="Black Shirt"
            price={2.99}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget arcu efficitur nisl sagittis tristique."
            />
        </div>
    )
};

export default Top1;