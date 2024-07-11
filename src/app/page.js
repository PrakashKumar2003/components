import Image from "next/image";
import styles from "./page.module.css";
import Box from "./_component/box";
import DivergencCalculator from "./_component/DivergenceCalculator";
import DMXBinaryConverter from "./_component/DMXAddressCalculator";
import AngleDistanceSizeCalculator from "./_component/AngleDistanceSizeCalculator";

export default function Home() {
  return <AngleDistanceSizeCalculator />;
}
