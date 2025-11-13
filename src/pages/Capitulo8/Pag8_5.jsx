import BackgroundLaranja from "../../components/features/PadraoCap8/TelaLaranja";
import InputModal from "../../components/common/Modal/InputModal";

const C8_Tela_05 = () => {
  const placeholderText = 'DIGITE AQUI O NOME\nDEPOIS CLIQUE EM "OK" PARA SALVAR';

  const nextPath = "/capitulo8/tela-06";

  return (
    <BackgroundLaranja>
      <InputModal
        defaultOpen={true}
        showButton={false}
        initialPlaceholder={placeholderText}
        nextPath={nextPath}
      />
    </BackgroundLaranja>
  );
};

export default C8_Tela_05;
