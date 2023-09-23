import React from 'react'
import { useLoaderData } from 'react-router-dom'
import '../About.css'

const About = (props) => {
    const about = useLoaderData();
  return (
    <div className='about-container'>
        <div className='about-header'>
            <h1>{about.name}</h1>
            <h3>{about.email}</h3>
        </div>
    <div>
        <img src={about.headshot} alt='Profile' className='profile-image'></img>
        <h2>{about.bio}</h2>
    </div>
    </div>
  )
}

export default About