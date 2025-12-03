import styled from "styled-components";
import Cantina from "../../../assets/Capitulo8Img/Cantina.png";
import BalaoEsquerdo from "../../../assets/Capitulo9Img/BalaoEsquerdo.png";
import Balao_De_Fala from "../../../assets/Capitulo1Img/Balao_De_Fala.png";

import PipaChef from "../../../assets/Capitulo8Img/PipaChef.png";

import abacaxi from "../../../assets/Capitulo8Img/Icons/abacaxi.png";
import amor from "../../../assets/Capitulo8Img/Icons/amor.png";
import arvore from "../../../assets/Capitulo8Img/Icons/arvore.png";
import carro from "../../../assets/Capitulo8Img/Icons/carro.png";
import elefante from "../../../assets/Capitulo8Img/Icons/elefante.png";
import escada from "../../../assets/Capitulo8Img/Icons/escada.png";
import escolai from "../../../assets/Capitulo8Img/Icons/escolai.png";
import escova from "../../../assets/Capitulo8Img/Icons/escova.png";
import faca from "../../../assets/Capitulo8Img/Icons/faca.png";
import gato from "../../../assets/Capitulo8Img/Icons/gato.png";
import helicoptero from "../../../assets/Capitulo8Img/Icons/helicoptero.png";
import ianimal from "../../../assets/Capitulo8Img/Icons/ianimal.png";
import ima from "../../../assets/Capitulo8Img/Icons/ima.png";
import lapis from "../../../assets/Capitulo8Img/Icons/lapis.png";
import lingua from "../../../assets/Capitulo8Img/Icons/lingua.png";
import maca from "../../../assets/Capitulo8Img/Icons/maca.png";
import navio from "../../../assets/Capitulo8Img/Icons/navio.png";
import noite from "../../../assets/Capitulo8Img/Icons/noite.png";
import noiva from "../../../assets/Capitulo8Img/Icons/noiva.png";
import oculos from "../../../assets/Capitulo8Img/Icons/oculos.png";
import ovo from "../../../assets/Capitulo8Img/Icons/ovo.png";
import ilha from "../../../assets/Capitulo8Img/Icons/ilha.png";
import rato from "../../../assets/Capitulo8Img/Icons/rato.png";
import regua from "../../../assets/Capitulo8Img/Icons/regua.png";
import tesoura from "../../../assets/Capitulo8Img/Icons/tesoura.png";
import tv from "../../../assets/Capitulo8Img/Icons/tv.png";
import uva from "../../../assets/Capitulo8Img/Icons/uva.png";

export const CHARACTER_IMAGES = {
  variant1: PipaChef,
};

export const TelaCenario = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${Cantina});
  background-size: 100% 100%;
  background-position: center bottom;
  position: relative;
  overflow: hidden;
`;

export const ICONE_IMAGES = {
  abacaxi: abacaxi,
  amor: amor,
  arvore: arvore,
  carro: carro,
  elefante: elefante,
  escada: escada,
  escolai: escolai,
  escova: escova,
  faca: faca,
  gato: gato,
  helicoptero: helicoptero,
  ianimal: ianimal,
  ima: ima,
  lapis: lapis,
  lingua: lingua,
  maca: maca,
  navio: navio,
  noite: noite,
  noiva: noiva,
  oculos: oculos,
  ovo: ovo,
  ilha: ilha,
  rato: rato,
  regua: regua,
  tesoura: tesoura,
  tv: tv,
  uva: uva,
};

export const CachorroOverlay = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 55%;
  object-fit: contain;
`;

const BalaoBase = styled.div`
  position: absolute;
  width: 450px;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const BalaoImagemEsq = styled(BalaoBase)`
  top: 25%;
  left: 10%;
  background-image: url(${BalaoEsquerdo});
`;

export const BalaoImagemDir = styled(BalaoBase)`
  top: 25%;
  right: 10%;
  background-image: url(${Balao_De_Fala});
`;

export const TextoBalao = styled.p`
  position: absolute;
  top: 41%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  margin: 0;

  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial;
  line-height: 1.4;

  & strong {
    font-weight: 900;
  }
`;

export const BotaoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 60px;
`;

export const QuadroMensagem = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  width: 30%;
  max-height: 70%;
  padding: 2.5%;
  background-color: white;
  border: 5px solid #6caf5c;
  border-radius: 40px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  p {
    font-family: Arial, sans-serif;
    font-size: 2vw;
    color: #000;
    line-height: 1.6;
    text-align: left;
    margin: 0;
  }
`;

export const IconeImagem = styled.img`
  width: 6vw;
  height: 6vw;
  object-fit: contain;
`;

export const StyledSequenciaFlutuante = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #f86e32;
  padding: 15px 40px;
`;

export const IconeSequenciaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  color: black;
`;
