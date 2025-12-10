import { BackgroundChoco } from "../../components/features/PadraoCap8/TelaChoco";
import InputModal from "../../components/common/Modal/InputModal";
import IconeFlutuante from "../../components/features/PadraoCap8/IconeFlutuante";

const C8_Tela_11 = () => {
  const iconesSequencia = ["faca", "arvore", "rato", "ima", "navio", "helicoptero", "arvore"];
  const respostaCorreta = "FARINHA";

  const placeholderText = 'DIGITE AQUI A SUA RESPOSTA\nDEPOIS CLIQUE EM "OK" PARA SALVAR';
  const nextPath = "/capitulo8/tela-12";

  return (
    <BackgroundChoco>
      <IconeFlutuante icones={iconesSequencia} />

      <InputModal
        defaultOpen={true}
        showButton={false}
        initialPlaceholder={placeholderText}
        nextPath={nextPath}
        isBottomPositioned={true}
        correctAnswer={respostaCorreta}
      />
    </BackgroundChoco>
  );
};

export default C8_Tela_11;
