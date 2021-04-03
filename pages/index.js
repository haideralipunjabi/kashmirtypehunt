import Head from 'next/head'
import Navbar from "../components/navbar";
import About from '../components/sections/about';
import Footer from '../components/sections/footer';
import Photos from '../components/sections/photos';
export default function Home({photos}) {
  return (
    <>
      <Navbar/>
      <Photos/>
      <About/>
      <Footer/>
    </>
  )
}