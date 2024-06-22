import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

const Carousel = () => {
  return(
    <div className="flex flex-col gap-2">
    <Banner1 />
    <Banner2 />
    <Banner3 />
    </div>
  )
}

export default Carousel