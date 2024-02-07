import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css' 
import ztmyvid from "../../Assets/ZTMY.webm"
import insta from "../../Assets/insta.png"
import mart from "../../Assets/logo_mart.png"
import ztmylogo from "../../Assets/logo.png"
import twt1 from "../../Assets/twt1.png"
import twt2 from "../../Assets/twt2.png"
import youtube from "../../Assets/youtube.png"
import ztmybox from "../../Assets/ztmylogo.webp"
import controller from "../../Assets/game.gif"
import spotify from "../../Assets/spotify-logo.gif"

const HomePage = () => {

    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        // Set a timeout to reveal the images after a delay
        const timer = setTimeout(() => {
            setShowImages(true);
        }, 1600); // Adjust the delay as needed (in milliseconds)

        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []); // Run once on component mount
    
    return (
        <div id="mainSection">
            <div className = 'container'>
                <video playback={2.0} src={ztmyvid} autoPlay loop muted />

                <div className="ztmy_main">
                    <img src={ztmylogo} alt=""/>
                </div>
                <div className="mart_logo">
                    <a href="https://official-goods-store.jp/zutomayo/" style={{textDecoration: 'none', color: '#F9F6EE'}}><img src={mart} alt=""/></a>
                </div>
                <div className={`ztmy_logo ${showImages ? 'show' : ''}`}>
                <a href="https://zutomayo.net/" style={{textDecoration: 'none', color: '#F9F6EE'}}><img src={ztmybox} alt=""/></a>
                </div>
                <div class="socials">
                    <div className="twt1_logo">
                        <a href="https://twitter.com/zutomayo" style={{textDecoration: 'none', color: '#F9F6EE'}}><img src={twt1} alt=""/></a>
                    </div>
                    <div className="twt2_logo">
                        <a href="https://twitter.com/zutomayo_staff" style={{textDecoration: 'none', color: '#F9F6EE'}}><img src={twt2} alt=""/></a>
                    </div>
                    <div className="youtube_logo">
                        <a href="https://www.youtube.com/channel/UCv6P5nsS9rP4tDtFlqLU_QQ" style={{textDecoration: 'none', color: '#F9F6EE'}}><img src={youtube} alt=""/></a>
                    </div>
                    <div className="insta_logo">
                        <a href="https://www.instagram.com/zutomayo/?hl=ja" style={{textDecoration: 'none', color: '#F9F6EE'}}><img src={insta} alt=""/></a>   
                    </div>
                </div>

                <div class={`gifs ${showImages ? 'show' : ''}`}>
                    <div className="controller">
                            <a href="https://play.umusic.com/ztmy-tp" style={{textDecoration: 'none', color: '#F9F6EE'}}><img src={controller} alt=""/></a>
                        </div>
                        <div className="spotify">
                            <a href="https://open.spotify.com/artist/38WbKH6oKAZskBhqDFA8Uj?si=zs08DgCqSFaflwPX5dnYow" style={{textDecoration: 'none', color: '#F9F6EE'}}><img src={spotify} alt=""/></a>   
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default HomePage;