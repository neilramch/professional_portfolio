import React, { useEffect, useRef, useState } from 'react';
import './Profile.css';

function Profile() {
    const anchorRef = useRef(null);
    const pupilRefs = useRef(null); // Assuming you have two pupils
    const [angleDeg, setAngleDeg] = useState(0);

    useEffect(() => {
        const anchor = document.getElementById('anchor');
        const pupil = document.querySelector('.eyeball'); // Target the eyeball
    
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
    
            const rekt = anchor.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 2;
            const anchorY = rekt.top + rekt.height / 2;
    
            const angleDeg = Math.atan2(mouseY - anchorY, mouseX - anchorX) * (180 / Math.PI);
    
            pupil.style.transform = `rotate(${angleDeg}deg)`;
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    function calculateAngle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        return rad * 180 / Math.PI;
    }

    return (
        <div className='profile-container'>
            <div className='section-1'>
                <h1 className='myname'>Hi my name is <span>Neil Ramchandani</span></h1>
                <img className='profile-img' alt='Profile' src='https://media.licdn.com/dms/image/v2/C4E03AQF-HH1j0J1jSQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649545767306?e=1729728000&v=beta&t=HUiRApi3jXb3v3F6Pcj_mVH4O92jC3MYFASEgTb8EcE'></img>
                <img className='eye' id='anchor' ref={anchorRef} src='https://img.icons8.com/?size=100&id=89aNO2g7i5vJ&format=png&color=000000'></img>

                <div className='eyeball'>
                    {/* Apply rotation to each pupil */}
                    <img 
                        className='pupil' 
                        ref={pupilRefs[0]} 
                        style={{ transform: `rotate(${90 + angleDeg}deg)` }} 
                        src='https://img.icons8.com/?size=100&id=Fra0jAwRETVA&format=png&color=000000'
                        alt="Pupil"
                    />
                </div>

                <img 
                    onClick={() => document.getElementById('section-2').scrollIntoView({ behavior: 'smooth' })} 
                    className='down-arrow' 
                    src='https://img.icons8.com/?size=100&id=39977&format=png&color=22577a' 
                    alt='Scroll Down'
                />
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
                        </ul>
                        <li>Data Management</li>
                    </ul>
                </div>
            </div>

            <div className='section-3'>
                <h1>PROJECTS</h1>

                <div className='projects-container'>
                    <div className='project'>
                        <h2>React Website Clone</h2>
                        <div className='project-content'>
                            <h3>A website clone of Treva, one of my favorite local italian restaurants</h3>
                        </div>
                    </div>
                    <div className='project'>
                        <h2>Blazor Productivity Web App</h2>
                        <div className='project-content'>
                            <h3>Productivity application that allows the user to create a personalized to-do profile.</h3>
                        </div>
                    </div>
                    <div className='project'>
                        <h2>.NET Ticket Event App</h2>
                        <div className='project-content'>
                            <h3>Windows forms application that allows users to browse and purchase tickets to local events.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
