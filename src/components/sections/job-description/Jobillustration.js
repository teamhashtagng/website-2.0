import React from "react";
import Image from "../../elements/Image";
import DottedImage from '../../../assets/images/section/FrontendDescPage/dotted-main-section.svg';

export default function (){
    return (
        <div className="job-bottom-line">
            <Image
                className='job-dotted'
                src={DottedImage}
                alt="Hero" 
            />
        </div>
    )
}