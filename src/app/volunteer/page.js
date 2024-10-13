import React from 'react'
import VolunteerCard from '../components/VolunteerCard'

const Volunteer = () => {
  return (
    <>
    <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Volunteer</h2>
                    </div>
                    <div className="col-12">
                        <a href="/">Home</a>
                        <a href="">Volunteer</a>
                    </div>
                </div>
            </div>
        </div>
        <VolunteerCard/>
        </>
  )
}

export default Volunteer
