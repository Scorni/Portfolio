import '../assets/css/experiences/experiences.css';
import previewWeather from "../assets/img/experiences/weatherApp.PNG"
import previewQuizz from "../assets/img/experiences/quizzApp.PNG"
import { Slide, Fade}  from 'react-reveal';


export default function Experiences() {
    return(
        <main>
            <Slide left>
                <section className="professionnal">
                    <h2 >Professionnal and Educationnal Experiences</h2>
                    <div className="stage">
                        <h3>
                            Bachelor Computer Sciences at Ephec.<br />
                            From 2017 to 2021
                        </h3>
                        <p>
                            Stage at IT-School  as fullstack php developper under symfony.<br/> 
                            February to may 2020.
                        </p>
                    </div>
                    <div className="wecodx">
                        <h3>
                            Student fullstack developper at Wecodx.<br/> 
                            August  2021                    
                        </h3>
                        <p>
                            Developping with PHP under symfony environment. <br />
                            Frontend was held by classic Javascript | Twig.                     
                        </p>
                    </div>
                    <div className="uliege">
                        <h3>
                            Master artificial intelligence at University of Liège.<br/> 
                            Septembre 2021 - February 2022
                        </h3>
                        <p>
                            Was the wrong way choosen !
                        </p>
                    </div>
                    <div className="hrorganizer">
                        <h3>
                            Fullstack developper at HrOrganizer. <br/>
                            Avril-may  2022
                        </h3>
                        <p>
                            Developping with PHP under symfony environment. <br/>
                            Frontend was held by Vue | Twig.                     
                        </p>
                    </div>
                </section>
            </Slide>
            <Slide right>
                <section className="personnal">
                    <h2 className="headTitle">Personnal Projects and Skills</h2>
                    <div className="description">
                        <h3>
                            Currently learning UX | UI and Web Design 
                        </h3>
                        <p>
                            By doing this portfolio for example <br/>
                            Or those side projects
                        </p>
                    </div>
                    <div>
                        <div className="sideProject">
                            <div className='firstRow'>
                                <div className="quizz">
                                    <img className='quizzPreview' src={previewQuizz}></img>
                                    <a href='https://scorni-usbe-aters-quizz.vercel.app' target={'_blank'}>
                                        <h4>
                                            Nerd quizz game
                                        </h4>
                                    </a>
                                    
                                    <p className='date'>
                                        03/06/2022
                                    </p>
                                </div>
                                <div className="weather">
                                    <img className='weatherPreview' src={previewWeather}></img>
                                    <a href='https://scorni.github.io/Weather/' target={'_blank'}>
                                        <h4>
                                            Weather app
                                        </h4>
                                    </a>
                                    
                                    <p className='date'>
                                        01/06/2022
                                    </p>
                                </div>
                            </div>
                            <div className='WIPRow'>
                                <div className='WIPProject'>
                                    <img className='weatherPreview'></img>
                                    <p> Work in Progress</p>
                                    <a href='https://scorni.github.io/Weather/' target={'_blank'}>
                                        <h4>
                                            Want to see ?
                                        </h4>
                                    </a>
                                    
                                    <p className='date'>
                                        ??/??/????
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Slide>
            
        </main>
    )
}