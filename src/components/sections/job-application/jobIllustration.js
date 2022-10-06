import React from "react";
import Image from "../../elements/Image";
import DottedImage from '../../../assets/images/section/FrontendDescPage/dotted-main-section.svg';

export default function (){
    return (
        <div className="job-bottom-line" data-aos="fade-up">
            <Image
                className='job-dotted-apply'
                src={DottedImage}
                alt="Hero" 
            />
        </div>
    )
}