import React from "react";
import './Background.css'
const Background = () => {
    return <div className="container">
        <div>
            <img className="flex-item" src="Petter.png" alt="Petter" />
        </div>
        <div className="name flex-item">
            Petter Fagerlund Asla
        </div>
        <div className="title-about-me flex-item">
            Kort bakgrunn
        </div>
        <div className="about-me flex-item">
            Født og oppvokst på Hamar, og nå har jaggu flytta tebakat tell Hamar med kjærring, unger og stasjonsvogn.
            Jækla tell avslappa fyr. Glad i folk, teknologi, fotball og golf, men det beste er etter unga er sendt ut om morran,
            da kan endelig dagen starte med å løse verdens IT utfordringer.
        </div>
        <div className="CV-header flex-item">
            Arbeidserfaring
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Asla Engineering AS</div>
            <div className="experience-date CV-item">2024.01 - d.d</div>
            <div className="experience-summary CV-item">Søknader, dynamisk innkjøpsordning, regnskap, årsavslutning - all den moroa</div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Norsk Tipping</div>
            <div className="experience-date CV-item">2021.08 - 2023.12</div>
            <div className="experience-summary CV-item">Teknisk arkitekt, backendutvikler, REST, Java/Kotlin, Spring Boot, Kafka, Jenkins,
                Confluence, Jira, AWS, Terraform, SQL</div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Netcompany - OBOS IT</div>
            <div className="experience-date CV-item">2019.08 - 2021.08</div>
            <div className="experience-summary CV-item">Seniorkonsulent, Java/Kotlin, mikrotjenester, Jenkins, REST, SQL,
                Confluence, Jira</div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Netcompany - NorgesGruppen Data</div>
            <div className="experience-date CV-item">2017.04 - 2018.12</div>
            <div className="experience-summary CV-item">Seniorkonsulent, Java EE, Hibernate, Bamboo, Confluence, Jira, SQL,
                WebLogic React/Redux</div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Netcompany - Kommuneforlaget</div>
            <div className="experience-date CV-item">2018.01 - 2018.05</div>
            <div className="experience-summary CV-item">Tech lead - assisterte bachelorprosjekt med React/Redux, Spring Boot og PostgreSQL</div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Netcompany - Mesta AS</div>
            <div className="experience-date CV-item">2016.08 - 2017.04</div>
            <div className="experience-summary CV-item">Konsulent, Java, Java Swing, Jira, SQL</div>
        </div>
    </div>
}

export default Background