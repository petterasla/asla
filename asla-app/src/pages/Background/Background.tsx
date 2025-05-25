import React from "react";
import './Background.css'
const Background = () => {
    return <div className="container">
        <div>
            <img className="flex-item" src="Petter.png" alt="Petter"/>
        </div>
        <div className="name flex-item">
            Petter Fagerlund Asla
        </div>
        <div className="title-about-me flex-item">
            Bakgrunn
        </div>
        <div className="about-me flex-item">
            Født og oppvokst på Hamar, og nå har jeg jammen meg flytta tilbake til Hamar. I mellomtiden ble det
            en sivilingeniørgrad i Datateknikk fra NTNU Trondheim med ett studieår i San Diego, UCSD. Deretter
            begynte arbeidslivet med fem år i Oslo som konsulent i Netcompany. Etter hvert som det ble barn,
            samt venner flyttet tilbake til Hamar, var det naturlig å følge etter.
            <br></br>
            <br></br>
            Som person er jeg rolig, avslappet og pragmatisk. Setter integritet høyt, samt glad i folk, teknologi,
            fotball og golf.
            Men like så viktig. Jeg liker å dra på jobb om morgenen for å løse verdens IT utfordringer.
        </div>
        <div className="CV-header flex-item">
            Arbeidserfaring
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Asla Engineering AS - NorgesGruppen Data</div>
            <div className="experience-date CV-item">2024.02 - d.d</div>
            <div className="experience-description CV-item">
                <ul>
                    <li>
                        Prosjekt Dovre: Tilpasse kjernesystemet for vare, kunde, leverandør, priser og avtaler i NorgesGruppen
                        til å gå fra master av data til slave av nytt kjernesystem (SAP). Prosjektet stiller store krav til
                        domenekunnskap, samt ferdigheter til å omstille seg raskt. Petter tiltrådte som senior utvikler,
                        med tett oppfølging mot forretning for å håndtere deres krav.
                    </li>
                </ul>
            </div>
            <div className="experience-summary CV-item"> Azure DevOps and Pipeline, Azure Function, Azure Bicep (IaC),
                Java EE, Oracle SQL, Weblogic, Webhook, JMS, EJB, Hibernate, Spring Boot, Logback, Bamboo, Jira, Bitbucket
            </div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Asla Engineering AS - SmartBehandling.no</div>
            <div className="experience-date CV-item">2024.01 - 2024.02</div>
            <div className="experience-description CV-item">
                <ul>
                    <li>
                        Oppstartsbedrift: Automatisere fakturautsending etter fullført kundebehandling gjennom en integrasjon mellom
                        bookingsystem og regnskapssystem. Petter fullautomatiserte dette med Github Actions og skyleverandøren AWS.
                    </li>
                </ul>
            </div>
            <div className="experience-summary CV-item"> Trafft bookingsystem, PowerOffice, Webhooks, OpenAPI, Github Action, Pulumi (IaC),
                AWS (ApiGateway, Lambda, Route53, System Manager, EventBridge, IAM, CloudWatch), Python
            </div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Norsk Tipping - Ansatt</div>
            <div className="experience-date CV-item">2021.08 - 2023.12</div>
            <div className="experience-description CV-item">
                <ul>
                    <li>
                        Løsningsrakitekt og utvikler i betalingsteamet.
                    </li>
                    <li>
                        Utviklet og vedlikeholdt betalingstjenester for kunder som betalingskort, Vipps og Apple Pay.
                    </li>
                    <li>
                        Utvikle APIier til utenlandske spilleverandører for håndtering av betaling og premie i forbindelse med spill.
                    </li>
                    <li>
                        Utvikle avstemmingsjobber mellom spillmotor og eksterne spilleverandører for å sikre korrekt
                    </li>
                </ul>
            </div>
            <div className="experience-summary CV-item">Løsningsarkitekt, backendutvikler, REST, Java/Kotlin, Spring
                Boot, Kafka, Jenkins, Confluence, Jira, AWS, Terraform, SQL, OpenAPI
            </div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Netcompany - OBOS IT</div>
            <div className="experience-date CV-item">2019.08 - 2021.08</div>
            <div className="experience-description CV-item">
                <ul>
                    <li>
                        API utvikling: Pakke inn eldre database-først APIer fra stormaskiner i REST APIer og tilgjengeliggjøre
                        disse for interne og eksterne kunder i organisasjonen. Petter sin rolle var senior utvikler,
                        ansvarlig for å være med i hele prosessen fra analyse av kundebehov, til utvikling og levering av produkt til kunde.
                    </li>
                </ul>
            </div>
            <div className="experience-summary CV-item">Seniorkonsulent, Java/Kotlin, mikrotjenester, Jenkins, REST,
                SQL,
                Confluence, Jira
            </div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Netcompany - NorgesGruppen Data</div>
            <div className="experience-date CV-item">2017.04 - 2018.12</div>
            <div className="experience-description CV-item">
                <ul>
                    <li>
                        Videreutvikling av NorgesGruppens eget økonomi og avstemmingssystem kalt Felles Avregning, skrevet
                        i Java EE backend og Java Swing frontend. Petter startet også fornyelse av frontend til en webløsning
                        skrevet i React/Redux. Oppdraget krevde god domenekunnskap og tett kommunikasjon med forretning ved ny og eksisterende funksjonalitet.
                    </li>
                </ul>
            </div>
            <div className="experience-summary CV-item">Seniorkonsulent, Java EE, Hibernate, Bamboo, Confluence, Jira,
                SQL,
                WebLogic React/Redux
            </div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Netcompany - Kommuneforlaget</div>
            <div className="experience-date CV-item">2018.01 - 2018.05</div>
            <div className="experience-summary CV-item">Tech lead - assisterte bachelorprosjekt med React/Redux, Spring
                Boot og PostgreSQL
            </div>
        </div>
        <div className="CV-bulk flex-item">
            <div className="experience-header CV-item">Netcompany - Mesta AS</div>
            <div className="experience-date CV-item">2016.08 - 2017.04</div>
            <div className="experience-summary CV-item">Konsulent, Java, Java Swing, Jira, SQL</div>
        </div>
    </div>
}

export default Background