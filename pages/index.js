import Head from 'next/head'
import Navbar from "../components/navbar";
import Main from '../components/sections/main';
import Photos from '../components/sections/photos';
import { getPhotos } from '../lib/api';
export default function Home({photos}) {
  return (
    <>
      <Navbar/>
      <Main/>
      <Photos photos={photos.slice(0,9)}/>
    </>
  )
}

export async function getStaticProps(context) {
  const photos = (await getPhotos()) || []
  return {
    props: {
      photos
    }
  }
}