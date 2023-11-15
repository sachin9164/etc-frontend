import SimpleImageSlider from "react-simple-image-slider";
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'
const images = [
  { url: image1},
  { url: image2},
  { url: image3},
  { url: image2},
];

const SimpleSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default SimpleSlider;