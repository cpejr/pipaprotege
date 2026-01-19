import { BackgroundChoco } from "../../components/features/PadraoCap8/TelaChoco";
import InputModal from "../../components/common/Modal/InputModal";
import IconeFlutuante from "../../components/features/PadraoCap8/IconeFlutuante";

const C8_Tela_09 = () => {
  const iconesSequencia = ["oculos", "lingua", "escova", "oculos"];
  const respostaCorreta = "OLEO";

  const placeholderText = 'DIGITE AQUI A SUA RESPOSTA\nDEPOIS CLIQUE EM "OK" PARA SALVAR';
  const nextPath = "/capitulo8/tela-10";

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

export default C8_Tela_09;
