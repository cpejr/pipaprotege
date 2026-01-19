import ChapterScreen from "../../components/features/PadraoCap6/ChapterScreen";
import { useNavigate } from "react-router-dom";
import fundo from "./../../assets/Capitulo6Img/fundo_jogo.png";
import InputModal from "../../components/common/Modal/InputModal";

export default function C6_Tela_10() {
  const navigate = useNavigate();

  const nextPath = "/capitulo6/tela-12";

  const placeholderText = 'DIGITE AQUI\nDEPOIS CLIQUE EM "OK" PARA SALVAR';
  return (
    <>
      <ChapterScreen backgroundImage={fundo} />
      <InputModal
        defaultOpen={true}
        showButton={false}
        initialPlaceholder={placeholderText}
        nextPath={nextPath}
        width='60%'
      />
    </>
  );
}
