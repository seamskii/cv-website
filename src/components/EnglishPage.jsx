import '../App.css';
import React from "react";
import {MailOutlined,FileWordOutlined,HomeOutlined,PhoneOutlined  } from '@ant-design/icons';
import imgcv from '../images/cv.png';
import {Link} from "react-router-dom";



const EnglishPage=()=>{
    return (
    
        
          <div class="wrapper">
            <div class="resume">
                <div class="left">
                    <div class="img_holder"><img src={imgcv} alt="picture"/></div>
                     <div class="contact_wrap pb">
                       <div class="title">
                            Contact
                        </div>
                        <div class="contact">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><PhoneOutlined /></div>
                                        <div class="text2">(+972) 52-799-8790</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><MailOutlined /></div>
                                        <div class="text">evgenypavel91@gmail.com</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><HomeOutlined /></div>
                                        <div class="text2">Netanya, Israel</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="skills_wrap pb">
                        <div class="title">
                            Skills
                        </div>
                        <div class="skills">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-html5"></i></div>
                                        <div class="text">HTML</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-css3-alt"></i></div>
                                        <div class="text">CSS</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-js"></i></div>
                                        <div class="text">Javascript</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">React.JS</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">C</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">C++</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">CISCO</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><i class="fab fa-react"></i></div>
                                        <div class="text">SQL</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="hobbies_wrap pb">
                        <div class="title">
                        Languages
                        </div >
                        
                        
                        <div class="language">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><div class="text">Hebrew <span style={{ color: 'deepskyblue' }}>(fluent)</span></div></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><div class="text"> English <span style={{ color: 'deepskyblue' }}>(fluent)</span></div></div>								
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><div class="text">Russian <span style={{ color: 'deepskyblue' }}>(mother language)</span></div></div>								
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><div class="text">Romanian <span style={{ color: 'deepskyblue' }}>(mother language)</span></div></div>								
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    
                                    
                    </div>
                </div>
                <div class="right">
                    <div class="header">
                        <div class="name_role">
                        <div class="button">

                        <li><Link to={"/heb"} class="text" style={{ color: 'black' }}>עבר</Link></li>
                        <li><div style={{ color: 'deepskyblue' }}>eng</div></li>    
                                </div>
                            <div class="name">
                                <span style={{ color: 'black' }}>EVGENY</span> PAVEL
                            </div>	
                            <div class="role">
                            Full Stack Developer
                            </div>
                        </div>
                        <div class="about">
                        I am a software engineer with 2 years of experience. I've been working in different areas and
    with different technologies. Comfortable in a fast-paced, high-intensity work environment.
    Collaborator in smart decision-making initiatives.Experienced in diagnostics, troubleshooting
    and passionate about product’s quality.
    
                        </div>
                    </div>
                    <div class="right_inner">
                        <div class="exp">
                            <div class="title">
                                experience
                            </div>
                            <div class="exp_wrap">
                                <ul>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                                2018 - Present
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                Front End Developer  
                                                </p>
                                                <p class="info_com">
                                                Freelance
                                                </p>
                                                <p class="info_cont">
                                                Assistant to the chief engineer. Creation of Front-End Applications in React.JS.using
    JavaScript & ReactJS. Design, code, test, debug and implement front-end responsive development - <a href="https://hillel.ru">https://hillel.ru</a>.
    
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2016 - 2017
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                System Administrator
                                                </p>
                                                <p class="info_com">
                                                BAZAN Group - Oil Refineries Ltd
    
                                                </p>
                                                <p class="info_cont">
                                                    <ul>
                                                    <li>● Programs used: SQL, CISCO.</li>
                                                    <li>● Provided local communication between pressure and analyzing systems, by creating simulations with CISCO PACKET TRACER.</li>
                                                    <li>● Make calculations for modifications to improve refinery operations.</li>
                                                    <li>● Perform process hazard analysis.</li>
    
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2011 - 2012
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                    Junior Full Stack Developer
                                                </p>
                                                <p class="info_com">
                                                StarLab SRL | IT services company
                                                </p>
                                                <p class="info_cont">
                                                <ul>
                                                    <li>● Programs used: JavaScript, HTML/CSS.</li>
                                                    <li>● Responsible for creation advertising pages for telephone company - <a href="https://www.moldcell.md/">https://www.moldcell.md/</a>.</li>
                                                    <li>● Innovation and error correction in the work equipment program.</li>
                                                    <li>● Worked in computed diagnostics and tech support.</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="education">
                            <div class="title">
                            Academic Background
                            </div>
                            <div class="education_wrap">
                                <ul>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2017-2020
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                Practical Software Engineer
                                                </p>
                                                <p class="info_com">
                                                Technion - Israel Institute of Technology
                                                </p>
                                                <p class="info_cont">
                                                Final project - Educational website for children.
    
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2007-2011
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                BA in Computer Autodiagnostics
                                                </p>
                                                <p class="info_com">
                                                Transportation College, Moldova
                                                </p>
                                                <p class="info_cont">
                                                Final project - car with solar battery, design with AutoCAD, Vehicle-to-device (V2D) communication programs with C.
    
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="education">
                            <div class="title">
                            Army Service
                            </div>
                            <div class="education_wrap">
                                <ul>
                                <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                            2012-2015
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                Nachal Brigade, Combat medic 
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  
            </div>
        </div>
        </div>
      );

}

export default EnglishPage;