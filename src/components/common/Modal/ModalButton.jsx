import { useState } from "react";
import styled from "styled-components";
import CustomModal from "./CustomModal";
import Button from "../Button/Button";

const YellowButton = styled.button`
  background-color: #f5bd58;
  color: black;
  border: 1px solid #f5bd58;
  border-radius: 5px;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fdd866;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ModalButton({
  content,
  imageUrl,
  buttonText = "Abrir Modal",
  onOk,
  showButton = true,
  defaultOpen = false,
}) {
  const [isModalOpen, setIsModalOpen] = useState(defaultOpen);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (onOk) onOk();
  };

  return (
    <>
      {showButton && <YellowButton onClick={handleOpenModal}>{buttonText}</YellowButton>}
      <CustomModal
        isOpen={isModalOpen}
        imageUrl={imageUrl}
        footer={[
          <FooterContainer key='footer-container'>
            <Button onClick={handleCloseModal} type='ok' key='ok'>
              OK
            </Button>
          </FooterContainer>,
        ]}
      >
        {content}
      </CustomModal>
    </>
  );
}

export default ModalButton;
