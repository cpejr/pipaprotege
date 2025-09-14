// src/components/Modal/ImageAndCloseModal.jsx
import { useState } from "react";
import styled from "styled-components";
import CustomModal from "./CustomModal";

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

function ImagemModal({ content, imageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <YellowButton onClick={handleOpenModal}>Modal Imagem</YellowButton>
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={imageUrl}
        showCloseButton={true}
        showOkButton={false}
      >
        {content}
      </CustomModal>
    </>
  );
}

export default ImagemModal;
