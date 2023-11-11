import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://www.bendlawoffice.com/wp-content/uploads/2014/06/pexels-kehn-hermano-3584437-scaled.jpg" },
  { url: "https://www.bendlawoffice.com/wp-content/uploads/2014/06/pexels-vlada-karpovich-4449867-scaled.jpg" },
  { url: "https://www.bendlawoffice.com/wp-content/uploads/2014/06/pexels-kehn-hermano-3584437-scaled.jpg" },
  { url: "https://www.bendlawoffice.com/wp-content/uploads/2014/06/pexels-kehn-hermano-3584437-scaled.jpg" },
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