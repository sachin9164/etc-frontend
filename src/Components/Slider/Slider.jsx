import SimpleImageSlider from "react-simple-image-slider";
import job from '../Assets/job.jpg'
import startup from '../Assets/startup.jpg'
import teamwork from '../Assets/teamwork.jpg'
const images = [
  { url: job},
  { url: startup},
  { url: teamwork},
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
        slideDuration={1000}
      />
    </div>
  );
}
export default SimpleSlider;