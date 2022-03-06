import React, { Suspense } from "react";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./CenterPane.module.css";

import { ViewportWidth } from "../../../utils/viewport-width";

import Image from "../../UI/Image/Image";

const Images = React.lazy(() => import("../../UI/Image/Image"));
const ImageLoad = React.lazy(() => import("../ImageLoad/ImageLoad"));

const MainContent = () => {
  const { width } = ViewportWidth();
  const toggleMenu = width <= 1068;
  return (
    <Grid item xs={12} md={toggleMenu ? 12 : 6}>
      <div className={styles["center-pane"]}>
        {toggleMenu ? (
          <Swiper className="mySwiper" pagination={true} modules={[Pagination]}>
            <SwiperSlide>
              {" "}
              <Image
                src={require("../../../assets/data/images/image-409.jpg")}
                alt="cover1"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src={require("../../../assets/data/images/image-410.jpg")}
                alt="single"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src={require("../../../assets/data/images/image-411.jpg")}
                alt="single2"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src={require("../../../assets/data/images/image-408.jpg")}
                alt="cover1"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src={require("../../../assets/data/images/image-412.jpg")}
                alt="cover1"
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <ImageLoad>
              <Images
                src={require("../../../assets/data/images/image-409.jpg")}
                alt="cover1"
              />
            </ImageLoad>
            <ImageLoad>
              <Images
                src={require("../../../assets/data/images/image-410.jpg")}
                alt="single"
              />
              <Images
                src={require("../../../assets/data/images/image-411.jpg")}
                alt="single2"
              />
            </ImageLoad>
            <ImageLoad>
              <Images
                src={require("../../../assets/data/images/image-408.jpg")}
                alt="cover1"
              />
            </ImageLoad>
            <ImageLoad>
              <Images
                src={require("../../../assets/data/images/image-412.jpg")}
                alt="cover1"
              />
            </ImageLoad>
          </Suspense>
        )}
      </div>
    </Grid>
  );
};

export default MainContent;
