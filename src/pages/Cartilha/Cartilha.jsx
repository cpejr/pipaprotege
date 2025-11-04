import { CloseOutlined } from "@ant-design/icons";
import gibiImg1 from "../../assets/gibi-1.png";
import gibiImg2 from "../../assets/gibi-2.png";
import gibiImg3 from "../../assets/gibi-3.png";
import { ContainerCartilha, ImageColumn, ComicImage, CloseButton } from "./Styles";

export default function Cartilha() {
  return (
    <ContainerCartilha>
      <CloseButton to='/'>
        <CloseOutlined />
      </CloseButton>

      <ImageColumn>
        <ComicImage src={gibiImg1} alt='Página 1 da cartilha PIPA' />
        <ComicImage src={gibiImg2} alt='Página 2 da cartilha PIPA' />
        <ComicImage src={gibiImg3} alt='Página 3 da cartilha PIPA' />
      </ImageColumn>
    </ContainerCartilha>
  );
}
