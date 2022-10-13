import React from "react"

export default function Main() {
    return (
        <div className="main--content">
            <div className="main--content--header">
                <h1 className="content--heading">Habib-Ur-Rehman Bhatti</h1>
                <h2 className="content--title">Frontend Developer</h2>
                <a href="github.com/HabibUrRehmanBhattii" className="content--link">Github</a>
                <div className="content--social">
                <button className="content--button--email"><i className="fa-solid fa-envelope"></i>Email</button>
                <button className="content--button--linkedin"><i className="fa-brands fa-linkedin linkedin"></i> linkedin</button>
                </div>
                <div className="intro">
                    <div className="about--intro">
                        <h3 className="intro--heading">About Me</h3>
                        <p className="intro--para">I am a Frontend Developer with 1 year of experience in ReactJS. I have worked on multiple projects and have a good understanding of ReactJS. I am a quick learner and can adapt to new technologies quickly. I am looking for a job as a Frontend Developer.</p>
                    </div>
                    <div className="insterest--intro">
                        <h3 className="intro--heading">Interests</h3>
                        <p className="intro--para">I am interested in learning new technologies and working on new projects. I am also interested in learning new languages and cultures.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
