import { useNavigate } from "react-router-dom";
import BackgroundAzul from "../../../components/features/PadraoCap1/TelaAzul";
import Button from "../../../components/common/Button/Button";
import { MainContainer, CachorroImagem, BalaoImagem, TextoBalao } from "./Tela2";

const C1_Tela_03_2 = () => {
  const navigate = useNavigate();

  const handleFechar = () => {
    navigate("/");
  };

  const handleVoltar = () => {
    navigate("/capitulo1/tela-03_1");
  };

  const TextoDoBalao = "Tudo bem, sua vontade é o mais importante. Se quiser, volte mais tarde!";

  return (
    <BackgroundAzul>
      <MainContainer>
        <Button
          type='close'
          onClick={handleFechar}
          style={{ position: "absolute", top: "20px", left: "20px", zIndex: 20 }}
        >
          Fechar
        </Button>
        <Button
          type='voltar'
          onClick={handleVoltar}
          style={{ position: "absolute", bottom: "20px", left: "20px", zIndex: 20 }}
        >
          Voltar
        </Button>
        <CachorroImagem />
        <BalaoImagem>
          <TextoBalao>{TextoDoBalao}</TextoBalao>
        </BalaoImagem>
      </MainContainer>
    </BackgroundAzul>
  );
};

export default C1_Tela_03_2;
