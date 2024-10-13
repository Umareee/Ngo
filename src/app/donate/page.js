import React from 'react'
import DonateCard from '../components/DonateCard'
import Marquee from '../components/SuccessMarquee'

const Donate = () => {
  return (
     <>
    <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Donate</h2>
                    </div>
                    <div className="col-12">
                        <a href="/">Home</a>
                        <a href="">Donate</a>
                    </div>
                </div>
            </div>
        </div>
                    <DonateCard/>
                    <Marquee/>
                   </>
  )
}

export default Donate
