import { TelaInicial } from "./styledteste";
import TextoModal from "../../components/common/Modal/TextoModal";
import ImagemModal from "../../components/common/Modal/ImagemModal";
import backgroundImage from "../../assets/tela-inicial.svg";
import Button from "../../components/common/Button/Button";
import InputModal from "../../components/common/Modal/InputModal";

export default function Teste() {
  const text1 = "Não é legal quando alguém mostra foto ou vídeos de pessoas sem roupa para você.";
  return (
    <TelaInicial>
      <TextoModal content={<p>{text1}</p>} />
      <ImagemModal imageUrl={backgroundImage} />
      <Button type='ok'>OK</Button>
      <InputModal placeholder='Digite seu nome' />
    </TelaInicial>
  );
}
