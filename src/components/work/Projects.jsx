import React, {useState} from "react";
import {MoreInfoProject} from "./MoreInfoProject";

export const Projects = ({dataProjects}) => {
    const [modalProject, setModalProject] = useState();
    const [modal, setModal] = useState(false);
    const openModal = (project) => {
        if(modal) {
            setModal(false);
        } else {
            setModal(true)
            setModalProject(project)
        }
    }

    return (
        <>
            {
                dataProjects.map((project, index) => (
                    index === 1 ?
                        <div className="work__item _anim-items _anim-no-hide _active" key={project.title}>

                            <div className={`work__item_content ${index === 1 ? 'left' : ''}`}>
                                <div className="work__item_content_subtitle">{project.subtitle}</div>
                                <div className="work__item_content_title">
                                    {project.title}
                                </div>
                                <div className="work__item_content_text">
                                    {project.description}
                                </div>
                                <button onClick={() => openModal(project)} className="work__item_content_btn popup-link"  type="submit">
                                    View Project
                                </button>
                            </div>

                            <div className={`work__item_photo ${index === 1 ? 'left' : ''}`}>
                                <img src={project.img} alt=""/>
                            </div>
                        </div> :
                        <div className="work__item _anim-items _anim-no-hide _active" key={project.title}>

                            <div className={`work__item_photo`}>
                                <img src={project.img} alt=""/>
                            </div>

                            <div className={`work__item_content`}>
                                <div className="work__item_content_subtitle">{project.subtitle}</div>
                                <div className="work__item_content_title">
                                    {project.title}
                                </div>
                                <div className="work__item_content_text">
                                    {project.description}
                                </div>
                                <button onClick={() => openModal(project)} className="work__item_content_btn popup-link" type="submit">
                                    View Project
                                </button>
                            </div>
                        </div>
                    )
                )
            }
            {modal && <MoreInfoProject modalProject={modalProject} openModal={openModal}/>}
        </>
    )
}