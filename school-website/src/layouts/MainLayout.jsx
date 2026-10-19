import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AppBanner from '../components/AppBanner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Scroll to the top on every page change, or to #section when the link has a hash.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // wait a tick so the new page has rendered
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      }, 0)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

// Shared frame for every page: banner + navbar on top, footer at the bottom.
export default function MainLayout() {
  return (
    <>
      <ScrollManager />
      <AppBanner />

      {/* On desktop the navbar floats over the page */}
      <div className="relative">
        <Navbar />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
