import React from 'react'
import './Profile.css'

function Profile() {


  return (
    <div className='profile-container'>
        <div className='section-1'>
            <h1 className='myname'>Hi my name is <span>Neil Ramchandani</span></h1>
            <img className='profile-img' alt='Profile' src='https://media.licdn.com/dms/image/v2/C4E03AQF-HH1j0J1jSQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649545767306?e=1729728000&v=beta&t=HUiRApi3jXb3v3F6Pcj_mVH4O92jC3MYFASEgTb8EcE'></img>
            <input 
                type='image'
                onClick={() => document.getElementById('section-2').scrollIntoView({ behavior: 'smooth' })}
                className='down-arrow' 
                src='https://img.icons8.com/?size=100&id=39977&format=png&color=22577a'>
            </input>
        </div>

        <div className='section-2' id='section-2'>
          
            <div className='about-me-text'>
                <h2>About me</h2>
                <p>I'm an MBA student with a passion for web development. I recently graduated with a B.S. in Management Information Systems from Central Connecticut State University (CCSU)</p>
            </div>

            <div className='about-me'>
                <h2>Skills</h2>
                <ul>
                    <li>Web Development</li>
                        <ul>
                            <li>HTML, CSS, & JavaScript</li>
                            <li>ASP.NET, Blazor.NET, React.js</li>
                            <li>HTML, CSS, & JavaScript</li>
                        </ul>
                    <li>Data Management</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

        <div className='section-3'>
            <div className='projects-container'>
                 <div className='project'>
                 <h2>React Website Clone </h2>

                    <div className='project-content'>
                    <p>A website clone of Treva, one of my favorite local italian restaurants</p>
                    </div>.
                 </div>
                 <div className='project'>
                 <h2>Blazor Productivity Web App</h2>

                 <div className='project-content'>
                    <p>Productivity application that allows the user to create a personalized to do profile.</p>

                </div>
                 </div>
                 <div className='project'>
                     <h2>.NET Ticket Event App</h2>
                 <div className='project-content'>
                    <p>Windows forms application that allows users to browse and purchase tickets to local events.</p>
                    </div>
                 </div>
            </div>
        </div>

    </div>

    
  )
}

export default Profile