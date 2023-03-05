import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';


import bano1 from '../../assets/images/BANO-1.png'
import bano2 from '../../assets/images/BANO-2.png'
import bano3 from '../../assets/images/BANO-3.png'
import bano4 from '../../assets/images/BANO-4.png'
import bano5 from '../../assets/images/BANO.png'
import bano6 from '../../assets/images/udemy.png'
import bano7 from '../../assets/images/SkillUP-2.png'
import bano8 from '../../assets/images/skillUP.png'
const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    // const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    // const getPortfolio = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
    //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    // }

    // const renderPortfolio = (portfolio) => {
    //     return (
    //         <div className="images-container">
    //             {
    //                 portfolio.map((port, idx) => {
    //                     return (
    //                         <div className="image-box" key={idx}>
    //                             <img 
    //                             src={port.image}
    //                             className="portfolio-image"
    //                             alt="portfolio" />
    //                             <div className="content">
    //                                 <p className="title">{port.name}</p>
    //                                 <h4 className="description">{port.description}</h4>
    //                                 <button
    //                                     className="btn"
    //                                     onClick={() => window.open(port.url)}
    //                                 >View</button>
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     );
    // }


    return (
        <>
            <div className="container portfolio-page">

                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
               

                <div className="cert-display">

                <div className="image-box" >
                    <img 
                    src={bano1}
                    className="portfolio-image"
                    alt="portfolio" />
                    <div className="content">
                        <p className="title"></p>
                        <h4 className="description">Android Working on Databases</h4>
                        
                    </div>
                </div>


                <div className="image-box" >
                    <img 
                    src={bano2}
                    className="portfolio-image"
                    alt="portfolio" />
                    <div className="content">
                        <p className="title"></p>
                        <h4 className="description">Database Normalization & SQL JOIN Queries</h4>
                        
                    </div>
                </div>

                <div className="image-box" >
                    <img 
                    src={bano3}
                    className="portfolio-image"
                    alt="portfolio" />
                    <div className="content">
                        <p className="title"></p>
                        <h4 className="description">Intro To UX Design</h4>
                        
                    </div>
                </div>

                <div className="image-box" >
                    <img 
                    src={bano4}
                    className="portfolio-image"
                    alt="portfolio" />
                    <div className="content">
                        <p className="title"></p>
                        <h4 className="description">IOT and Embedded System Development</h4>
                        
                    </div>
                </div>

                </div>

                <div className="cert-display">
                <div className="image-box" >
                    <img 
                    src={bano5}
                    className="portfolio-image"
                    alt="portfolio" />
                    <div className="content">
                        <p className="title"></p>
                        <h4 className="description">Industry Based Web Development</h4>
                        
                    </div>
                </div>

                <div className="image-box" >
                    <img 
                    src={bano6}
                    className="portfolio-image"
                    alt="portfolio" />
                    <div className="content">
                        <p className="title"></p>
                        <h4 className="description">Building Modern Web Applications With Go(GoLang)</h4>
                        
                    </div>
                </div>

                <div className="image-box" >
                    <img 
                    src={bano7}
                    className="portfolio-image"
                    alt="portfolio" />
                    <div className="content">
                        <p className="title"></p>
                        <h4 className="description">Agile Scrum Foundation</h4>
                        
                    </div>
                </div>

                <div className="image-box" >
                    <img 
                    src={bano8}
                    className="portfolio-image"
                    alt="portfolio" />
                    <div className="content">
                        <p className="title"></p>
                        <h4 className="description">Introduction To Data Analytics</h4>
                        
                    </div>
                </div>

                </div>

                </div>
               
                
            
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;