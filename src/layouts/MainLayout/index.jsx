import React from 'react'
import Header from '../../components/Home/Header'
import Footer from '../../components/Home/Footer/index'

function MainLayout(props) {
  return (
    <div>
      {/* Page Header */}
      <Header position={props.header} />
     
      {/* Content */}
      <main>{props.children}</main>

      {/* Page Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout