import {
  StyledSequenciaFlutuante,
  IconeSequenciaContainer,
  ICONE_IMAGES,
  IconeImagem,
} from "./Tela8Styles";

const IconeFlutuante = ({ icones }) => {
  if (!icones || icones.length === 0) {
    return null;
  }

  return (
    <StyledSequenciaFlutuante>
      <IconeSequenciaContainer>
        {icones.map((variante, index) => {
          const imageSource = ICONE_IMAGES[variante];

          return imageSource ? (
            <IconeImagem key={index} src={imageSource} alt={`Ícone ${variante}`} />
          ) : null;
        })}
      </IconeSequenciaContainer>
    </StyledSequenciaFlutuante>
  );
};

export default IconeFlutuante;
