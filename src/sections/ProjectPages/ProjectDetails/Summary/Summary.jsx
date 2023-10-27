import { useState } from 'react';
import ModalVideo from 'react-modal-video'
import { FaPlay } from "react-icons/fa";
import videoThumb from "assets/images/project/project-video.jpg"
import SummaryStyleWrapper from "./Summary.style"

const Summary = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <SummaryStyleWrapper id="projectSummary">
            <h4 className="widget_title">Project Summary</h4>
            <p>Eastman Exports Pvt Ltd. Group is a prominent leader in the global manufacturing and export of Automotive Components and Light Engineering Goods. 

Their extensive reach spans worldwide, and proudly serve numerous OEMs, Tier 1, and Tier 2 companies in both the United States and Europe. 

Their products are esteemed in the assemblies of renowned automobile manufacturers. Their foundation is rooted in entrepreneurial acumen and a cohesive corporate philosophy, which has propelled the company to attain the distinguished status of a Star Export House, as recognized by the Government of India. They are steadfastly dedicated to international trade. 

Since the establishment in 1996, Eastman Exports Pvt Ltd. has solidified its reputation as a highly respected and trusted supplier in the global markets of Automotive Components and Light Engineering Goods.</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original</p>

            <div className="vedio_player">
                <img src={videoThumb} alt="video thumb" />
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='1vpzW13m_IM' onClose={() => setIsOpen(false)} />
                <span onClick={() => setIsOpen(true)}> <FaPlay /> </span>
            </div>
        </SummaryStyleWrapper>
    )
}

export default Summary;