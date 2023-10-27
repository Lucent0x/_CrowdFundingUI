import { SectionTitle } from "components/sectionTitle";
import { Slider, SliderItem } from "components/slider/Slider";
import PartnerStyleWrapper from "./partner.style";
import data from "assets/data/partner/dataV1";

const Partner = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: "0px",
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <PartnerStyleWrapper>
      <div className="container">
        <SectionTitle isCenter={true} subtitle="Ecosystem" />

        <div className="row">
          <Slider {...sliderSettings}>
            {data?.map((item, i) => (
              <SliderItem key={i}>
                <img src={item} alt="partner thumb" />
              </SliderItem>
            ))}
          </Slider>
        </div>
      </div>
    </PartnerStyleWrapper>
  );
};

export default Partner;
