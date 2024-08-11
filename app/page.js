import Image from "next/image";
import FrontUiList from './page_components/FrontUiList';
import BlogCardImg from './page_components/BlogCardImg';
import MediumAd from './page_components/MediumAd';

export default function Home() {
  return (
  <>
       <FrontUiList />
       <MediumAd/>
       <BlogCardImg />
       
  </>
  );
}
