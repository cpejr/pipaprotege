import { TelaInicial } from "./styledteste";
import ModalButton from "../../components/common/Modal/ModalButton";
import backgroundImage from "../../assets/tela-inicial.svg";
import Button from "../../components/common/Button/Button";
import InputModal from "../../components/common/Modal/InputModal";

export default function Teste() {
  const text1 = "Não é legal quando alguém mostra foto ou vídeos de pessoas sem roupa para você.";
  const text2 = "Texto aleatório";
  return (
    <TelaInicial>
      <ModalButton content={text1} buttonText='TextoModal' />
      <ModalButton content={text2} imageUrl={backgroundImage} buttonText='ImagemModal' />
      <Button type='avancar'>AVANCAR</Button>
      <InputModal placeholder='Digite seu nome' />
    </TelaInicial>
  );
}
