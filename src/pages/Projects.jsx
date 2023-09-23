import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Projects = (props) => {
    const projects = useLoaderData();
  return (
    <div>
        <h1 style={{color: '#dda0dd', backgroundColor: '#e6e6fa', padding: '20px', borderRadius: '5px'}}>Projects</h1>
        {projects.map((project) => {
        return <div>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <a href={project.git}>
            <button>Github</button>
        </a>
        <a href={project.live}>
            <button>Live Site</button>
        </a>
        </div>
        
        })}

    </div>
  )
}

export default Projects