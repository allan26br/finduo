import React, {DOMElement, useEffect, useState} from 'react'

import './styles/main/header.css'
import './styles/main/main.css'
import './styles/main/sections.css'
import './styles/main/camadas.css'
import './styles/main/animations.css'
import './styles/main/text-align.css'

import evy from './assets/images/evy.png'
import ig from './assets/images/iglogo.png'
import fin from './assets/images/findou.png'
import paloma from './assets/images/sla.png'
import logofinduo from './assets/images/loguinho.png'
import play from './assets/images/play.png'
import perfil from './assets/images/perfilpng.png'
import viper from './assets/images/viper.png'
import tri from './assets/images/triangulos.png'
import rato from './assets/images/ratinho.png'
import tri2 from './assets/images/triangulos2.png'
import filtrospng from './assets/images/filtrospng.png'
import coroa from './assets/images/coroa.png'
import podio from './assets/images/podio.png'
import mercy from './assets/images/mercy.png'
import dozeanos from './assets/images/classificacao-indicativa.png'

import {ImFilter} from 'react-icons/im'
import {GoMarkGithub} from 'react-icons/go'
import {FaFacebook} from 'react-icons/fa'
import {RiInstagramLine} from 'react-icons/ri'
import {FiYoutube} from 'react-icons/fi'

function Main(){
    const [classe, setClasse] = useState('no-bounce-in-right camada3')

    const comparaDistanciaDoTopo = (elemento: any, tolerance: number = 0) =>{
        if(!elemento){
            return
        }

        const pontoDeAmostragem = window.innerHeight - tolerance

        if(elemento.getBoundingClientRect().top < pontoDeAmostragem) {
            elemento.className = 'bounce-in-right camada3'
            console.log(elemento.getBoundingClientRect().top, pontoDeAmostragem)
        
        }
        /*else{
            setClasse('no-bounce-in-right')
        }
        */	
    }

    //window.onscroll = comparaDistanciaDoTopo

    setInterval(()=>{
        const evy = document.getElementById('evy')
        comparaDistanciaDoTopo(evy, 300)
    },50)
    

    return(
       <div className="main">
            <div className="top ">
                      <h1 className="animated animatedFadeInUp fadeInUp">Olá, Bem vindo a FinDuo!!</h1>


                      <img src={ig} alt="" id="igue"/>
                      {/*<img src={logofinduo} alt="" id="logo"/>*/}

                      <button className="btn-downloads">
                        Baixe agora
                        </button>

                     
                      <img src={paloma} alt="" id = 'paloma' className="parapaloma animated animatedFadeInUp fadeInUp camada2" /> 

                <svg xmlns="http://www.w3.org/2000/svg" className = 'camada1' viewBox="0 0 1440 645"><path fill="#963eeb" fill-opacity="1" 
                d="M-3 12L-3 51C7 109-16 179 -12 153C-19 278 370 84 535 71C1133 23 1349 420 1609 973L1479 172L1502-6L1360 0C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0L0 0Z"
                ></path></svg>

            </div>

            <div className="evy-container">
                <img src={evy} alt="" id = 'evy' className= {`${classe}`}/> 

                <div className="teste camada1">
                    <h1>Olá, nós somos a FinDuo</h1>
                    <p>Facilitamos a sua busca por um companheiro<br/> em seus jogos online.</p>
                    <img src={play} alt=""/>
                </div>
            </div>

             <div className="sobre" id="sobresobre">

                      <div className="perfil">
                      <img src={tri2} alt="" className="tricss"/>
                        <div id="revoltadinho">
                          <h1>Perfil</h1>
                          <p>Personalize seu perfil da forma que desejar</p>
                          </div>
                          <img src={perfil} alt="" className="perfilcss camada2"/>
                      </div>

                      <div className="toxidade">
                      <img src={viper} alt="" className="vipercss camada2"/>
                      <div id="revoltadinho">
                          <h1 className = 'align-right' >Toxidade </h1>
                          <p className = 'align-right' >Avalie a conduta de outros jogadores <br/> por meio do Nível de Toxidade</p>
                          </div>

                          <img src={tri} alt="" className="tri2css"/>
                      </div>

                    

                      <div className="filtros">
                      <img src={tri2} alt="" className="tricss"/>
                        <div id="revoltadinho">
                          <h1>Filtros</h1>
                          <p>Encontre o duo que se adapta ao seu estilo de jogo</p>
                          </div>
                          <img src={filtrospng} alt="" className="filtroscss camada2"/>
                      </div>


                      
                      <div className="recompensas">
                      <img src={coroa} alt="" className="coroacss camada2"/>
                      <div id="revoltadinho">
                          <h1 className = 'align-right' >Recompensas </h1>
                          <p className = 'align-right' >Seja recompensado caso tenha uma <br/>ótima reputação</p>
                          </div>

                          <img src={tri} alt="" className="tri2css"/>
                      </div>


                      <div className="competitivo">
                      <img src={tri2} alt="" className="tricss"/>
                        <div id="revoltadinho">
                          <h1>Competitivo</h1>
                          <p>Busque por pessoas que buscam evoluir Competitivamente</p>
                          </div>
                          <img src={mercy} alt="" className="mercycss camada3"/>
                      </div>

                      <div className="rodape camada 1">
                     
                      <img src={ig} alt="" className="logorodape"/>
                      <div className="btn-container">
                          <a className="face">
                          <FaFacebook />
                          </a>
                          <a className="instagram">
                          <RiInstagramLine/>
                          </a>
                          <a className="github">
                          <GoMarkGithub />
                          </a>
                           <a className="youtube">
                          <FiYoutube />
                           </a>
                      </div>
                      <img src={dozeanos} alt="" className="dozeanosrodape"/>
                      </div>

             </div>
             

            
 </div>
       
    );
}

export default Main;