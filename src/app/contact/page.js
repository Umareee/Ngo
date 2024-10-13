import React from 'react'
import Contactform from '../components/Contactform'

const Contacts = () => {
  return (
    <>
    <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="col-12">
                        <a href="/">Home</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <Contactform/>
        </>
  )
}

export default Contacts
