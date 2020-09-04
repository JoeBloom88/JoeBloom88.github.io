import React, { useState } from "react"
import Img from 'gatsby-image'
import style from './video.module.css'
const Video = ({ videoSrcURL, videoPlaceholderImage}) => {
    
   
    // {console.log(typeof(videoPlaceholderImage.id))}
    const[openState, setOpenState] = useState(false)
    const onButtonClick = () => {

    }


    return(
    <div className={style.videoContainer}>
        {/* {console.log(this.videoPlaceholderImage.id)} */}
        <>
        
            {!openState && 
            <>
                <Img className={style.videoPlaceholderImage} fluid={videoPlaceholderImage.fluid} alt={videoPlaceholderImage.description} style={{'height':'100%', 'width':'100%'}} imgStyle={{ objectFit: 'cover', 'height':'100%', 'width':'100%'}} />
                <h2 className={style.playButton} onClick={()  =>setOpenState(!openState)} > play </h2>
                </>
            }
            {openState && 
                <iframe
                    width="100%"
                    height="100%"
                    src={videoSrcURL}
                    // title={videoTitle}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                />
            }
       
        </>
    </div>

    )
}
export default Video