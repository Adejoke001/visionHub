import NavBar from "./components/NavBar";
import Slider from "./slider/page";
import Services from "./services/page";
import Reviews from "./reviews/page";
import News from "./news/page"
import Resources from "./resources/page";
import File from "./file/page";


export default function Home() {
  return (
    <>
    <Slider/>
    <Services/>
    <Reviews/>
    <News/>
    <File/>
    <Resources/>
   
    </>
  );
}
