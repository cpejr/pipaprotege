import BackgroundAzul from "../../components/features/PadraoCap1/TelaAzul";
import InputModal from "../../components/common/Modal/InputModal";
import TituloFlutuante from "../../components/features/PadraoCap9/TituloFlutuante";

const C9_Tela_11_1 = () => {
  const titleText = "Escreva o que você mais gostou.";
  const placeholderText = 'DIGITE AQUI CLIQUE EM "OK" PARA SALVAR';

  const nextPath = "/capitulo9/tela-12";

  return (
    <BackgroundAzul>
      <TituloFlutuante>{titleText}</TituloFlutuante>

      <InputModal
        defaultOpen={true}
        showButton={false}
        initialPlaceholder={placeholderText}
        nextPath={nextPath}
      />
    </BackgroundAzul>
  );
};

export default C9_Tela_11_1;
