import React from "react";
import Slider from "react-slick";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import Image1 from "../../images/image1.png";
import Image2 from "../../images/image2.png";
import Image3 from "../../images/image3.png";
import Image4 from "../../images/image4.png";
import Image5 from "../../images/image5.png";
import Image6 from "../../images/image6.png";
import Image7 from "../../images/image7.png";
import Image8 from "../../images/image8.png";
import useStyles from "./Style";

const Content = () => {
  const classes = useStyles();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    nextArrow: <SampleNextArrow className={classes.next} />,
    prevArrow: <SamplePrevArrow className={classes.prev} />,
  };

  const slides = [
    { name: "1", src: Image1 },
    { name: "2", src: Image2 },
    { name: "3", src: Image3 },
    { name: "4", src: Image4 },
    { name: "5", src: Image5 },
    { name: "6", src: Image6 },
    { name: "7", src: Image7 },
    { name: "8", src: Image8 },
  ];

  return (
    <div className={classes.content}>
      <h2 className={classes.heading}>İNOVASYON EĞİTİMİ 101</h2>
      <Slider {...settings} className={classes.slider}>
        {slides.map((item) => {
          return (
            <div>
              <Card
                className={classes.root}
                key={item.name}
                style={{ boxShadow: `0px 4px 10px rgba(0, 0, 0, 0.25)` }}
              >
                <CardContent>
                  <img src={item.src} className={classes.image} />
                </CardContent>
              </Card>
            </div>
          );
        })}
        <div className={classes.buttonBox}>
          <Button variant="contained" className={classes.continue}>
            Devam Et
          </Button>
        </div>
      </Slider>
      <div className={classes.arrows}>
        <KeyboardArrowLeftIcon className={classes.arrow} />
        <KeyboardArrowRightIcon className={classes.arrow} />
      </div>
    </div>
  );
};

export default Content;
