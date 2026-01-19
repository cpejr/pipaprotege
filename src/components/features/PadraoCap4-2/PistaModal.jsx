import { useState } from "react";
import styled from "styled-components";
import CustomModal from "../../common/Modal/CustomModal.jsx";
import Button from "../../common/Button/Button";
import { PistaButton } from "./TelaQuizStyled.js";
import SinalLaranja from "../../../assets/Capitulo4Img/SinalLaranja.png";

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalTextContainer = styled.div`
  font-size: 25px;
  line-height: 1.4;
  text-align: center;
  color: black;
`;

const HeaderFixo = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0;
  color: black;
`;

const TextoVariavel = styled.p`
  font-size: 28px;
  margin: 10px 0;
  color: #333;
`;

function PistaModalButton({ pistaText, ...rest }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const modalContent = (
    <ModalTextContainer>
      <HeaderFixo>Pista de Proteção:</HeaderFixo>

      <TextoVariavel>{pistaText}</TextoVariavel>
    </ModalTextContainer>
  );

  const modalFooter = [
    <FooterContainer key='footer-container'>
      <Button onClick={handleCloseModal} type='ok' key='ok'>
        OK
      </Button>
    </FooterContainer>,
  ];

  return (
    <>
      <PistaButton
        onClick={handleOpenModal}
        style={{ position: "absolute", bottom: "40px", right: "40px" }}
        {...rest}
      />

      <CustomModal isOpen={isModalOpen} imageUrl={SinalLaranja} footer={modalFooter}>
        {modalContent}
      </CustomModal>
    </>
  );
}

export default PistaModalButton;
