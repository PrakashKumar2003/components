import Image from "next/image";
import styles from "./page.module.css";
import Box from "./_component/box";
import DivergencCalculator from "./_component/DivergenceCalculator";
import DMXBinaryConverter from "./_component/DMXAddressCalculator";
import AngleDistanceSizeCalculator from "./_component/AngleDistanceSizeCalculator";
import ComparisionTable from "./_component/ComparisionTable";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedColumnTable from "./_component/FixedColumnTable";
import BarGraph from "./_component/BarGraph";
import LineGraph from "./_component/LineGraph";
import Table from "./_component/Table/Tables";
import CommanSlider from "./_component/CommanSlider";
import WhyMotionLaserSection from "./_component/WhyMotionLaserSection";
const multiProductData = {
  chartID: "powerMulti_669cc35903331",
  products: [
    "Piko RGB 30 OPSL",
    "Piko RGB 28 mk2",
    "Piko RYGB 31 OPSL",
    "Piko RGB 26 OPSL",
    "Piko RGB 22 OPSL",
    "Piko RGB 20",
  ],
  modules: {
    242: {
      wavelength: "637nm",
      color: "#ff3000",
      powers: [
        [1721549657, 0],
        [1724228057, "8000"],
        [1726906457, 0],
        [1729498457, 0],
        [1732180457, 0],
        [1734772457, 0],
      ],
      valid: true,
    },
    237: {
      wavelength: "638nm",
      color: "#ff2600",
      powers: [
        [1721549657, "8000"],
        [1724228057, 0],
        [1726906457, "8000"],
        [1729498457, "8000"],
        [1732180457, "5500"],
        [1734772457, "5500"],
      ],
      valid: true,
    },
    191: {
      wavelength: "520nm",
      color: "#24FF00",
      powers: [
        [1721549657, 0],
        [1724228057, 0],
        [1726906457, 0],
        [1729498457, 0],
        [1732180457, 0],
        [1734772457, "5500"],
      ],
      valid: true,
    },
    321: {
      wavelength: "525nm",
      color: "#24FF00",
      powers: [
        [1721549657, 0],
        [1724228057, "9000"],
        [1726906457, 0],
        [1729498457, 0],
        [1732180457, 0],
        [1734772457, 0],
      ],
      valid: true,
    },
    190: {
      wavelength: "530nm",
      color: "#48FF00",
      powers: [
        [1721549657, "10000"],
        [1724228057, 0],
        [1726906457, "10000"],
        [1729498457, "10000"],
        [1732180457, "8000"],
        [1734772457, 0],
      ],
      valid: true,
    },
    163: {
      wavelength: "450nm",
      color: "#0033FF",
      powers: [
        [1721549657, "15000"],
        [1724228057, 0],
        [1726906457, "6000"],
        [1729498457, "6000"],
        [1732180457, "6000"],
        [1734772457, "6000"],
      ],
      valid: true,
    },
    320: {
      wavelength: "455nm",
      color: "#0033FF",
      powers: [
        [1721549657, 0],
        [1724228057, "15000"],
        [1726906457, 0],
        [1729498457, 0],
        [1732180457, 0],
        [1734772457, 0],
      ],
      valid: true,
    },
    188: {
      wavelength: "462nm",
      color: "#0070FF",
      powers: [
        [1721549657, 0],
        [1724228057, 0],
        [1726906457, "4000"],
        [1729498457, "4000"],
        [1732180457, "4000"],
        [1734772457, "4000"],
      ],
      valid: true,
    },
    192: {
      wavelength: "577nm",
      color: "#F4FF00",
      powers: [
        [1721549657, 0],
        [1724228057, 0],
        [1726906457, "6000"],
        [1729498457, 0],
        [1732180457, 0],
        [1734772457, 0],
      ],
      valid: true,
    },
  },
};
const singleProductData = {
  chartID: "powerChart_669cc35900ec5",
  0: { power: "5500", color: "#ff2600", key: "R" },
  1: { power: "5500", color: "#24FF00", key: "G" },
  2: { power: "6000", color: "#0033FF", key: "B" },
  3: { power: "4000", color: "#0070FF", key: "B" },
};
const singleProductData1 = [
  {
    product: "Single Product",
    visible_power: 1850,
    beam_diametre: 4,
    beam_divergence: 1.0,
  },
];

const multiProductData1 = [
  {
    product: "Piko RGB 30 OPSL",
    visible_power: 30000,
    beam_diametre: 4.5,
    beam_divergence: 1.0,
  },
  {
    product: "Piko RGB 28 mk2",
    visible_power: 28000,
    beam_diametre: 5,
    beam_divergence: 0.7,
  },
  {
    product: "Piko RYGB 31 OPSL",
    visible_power: 31000,
    beam_diametre: 4,
    beam_divergence: 1.0,
  },
  {
    product: "Piko RGB 26 OPSL",
    visible_power: 26000,
    beam_diametre: 4,
    beam_divergence: 1.0,
  },
  {
    product: "Piko RGB 22 OPSL",
    visible_power: 21000,
    beam_diametre: 4,
    beam_divergence: 1.0,
  },
  {
    product: "Piko RGB 20",
    visible_power: 18500,
    beam_diametre: 4,
    beam_divergence: 1.0,
  },
];

export default function Home() {
  return (
    <div className="  text-white" style={{ backgroundColor: "#000" }}>
      {/* <div className="row row-cols-2">

      <BarGraph chartData={singleProductData} />
      <BarGraph chartData={multiProductData} />
    </div> */}
      {/* <h1>Laser Power Chart - Multi Product</h1> */}
      {/* <h1>Laser Power Chart - Single Product</h1> */}
      {/* <h1>Laser Intensity Over Distance</h1>
      <h2>Single Product</h2>
      <LineGraph dataParams={singleProductData1} />
      <h2>Multiple Products</h2>
      <LineGraph dataParams={multiProductData1} /> */}
      {/* <Table/> */}
      {/* <CommanSlider
        settings={{
          slidesToShow: 1.5,
          slidesToScroll: 1,
          vertical: true,
          swipe: false,
          arrows: false,
          verticalSwiping: true,
        }}
      >
        {" "}
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div className="swiper">our comman slider ${index}</div>
        ))}
      </CommanSlider> */}
      <WhyMotionLaserSection />
    </div>
  );
}
