"use Client"
import Image from "next/image";
import Nav from "../app/components/nav";
import Landing from "./components/landing";
import Highlights from "./components/highlights";
import Featured from "./components/featured";
import Discounted from "./components/discounted";
import Explore from "./components/explore";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}
