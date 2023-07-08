import React from 'react'
import Header from '../../components/Home/Header'
import Footer from '../../components/Home/Footer/index'

function MainLayout({children}) {
  return (
    <div>
      {/* Page Header */}
      <Header position="fixed" />

      {/* Content */}
      <main>{children}</main>

      {/* Page Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout