import BackgroundAzul from "../../components/features/PadraoCap1/TelaAzul";
import InputModal from "../../components/common/Modal/InputModal";
import TituloFlutuante from "../../components/features/PadraoCap9/TituloFlutuante";

const C9_Tela_08 = () => {
  const titleText = "Você conhece algum super amigo? Se sim, qual o nome dele?";
  const placeholderText = 'DIGITE AQUI O NOME\nDEPOIS CLIQUE EM "OK" PARA SALVAR';

  const nextPath = "/capitulo9/tela-09";

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

export default C9_Tela_08;
