import { useCallback, useState } from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Academics from '../components/home/Academics'
import LifeAtSchool from '../components/home/LifeAtSchool'
import Achievement from '../components/home/Achievement'
import LatestNews from '../components/home/LatestNews'
import CallToAction from '../components/home/CallToAction'
import AppDownload from '../components/home/AppDownload'
import ImageModal from '../components/home/ImageModal'

// Home page = Hero + one sub-component per section, in the same order as before.
export default function Home() {
  // Gallery and Achievement both open the same full-screen image preview
  const [selectedImage, setSelectedImage] = useState(null)
  const closeImage = useCallback(() => setSelectedImage(null), [])

  return (
    <>
      <Hero />
      <About />
      <Academics />
      <LifeAtSchool onSelectImage={setSelectedImage} />
      <Achievement onSelectImage={setSelectedImage} />
      <LatestNews />
      <CallToAction />
      <AppDownload />

      <ImageModal image={selectedImage} onClose={closeImage} />
    </>
  )
}
