import { BackgroundChoco } from "../../components/features/PadraoCap8/TelaChoco";
import InputModal from "../../components/common/Modal/InputModal";
import IconeFlutuante from "../../components/features/PadraoCap8/IconeFlutuante";

const C8_Tela_10 = () => {
  const iconesSequencia = ["carro", "escada", "noiva", "ovo", "uva", "regua", "amor"];
  const respostaCorreta = "CENOURA";

  const placeholderText = 'DIGITE AQUI A SUA RESPOSTA\nDEPOIS CLIQUE EM "OK" PARA SALVAR';
  const nextPath = "/capitulo8/tela-11";

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

export default C8_Tela_10;
