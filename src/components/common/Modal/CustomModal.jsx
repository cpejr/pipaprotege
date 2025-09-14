import { Modal } from "antd";
import styled from "styled-components";
import Button from "../Button/Button";

const ModalContent = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: black;
`;

const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const BotaoFechar = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  z-index: 1;
`;

const CustomModal = ({ children, isOpen, onClose, imageUrl, showCloseButton = false, footer }) => {
  return (
    <Modal open={isOpen} onCancel={onClose} footer={footer} title={null} closeIcon={false}>
      <ModalContent>
        {showCloseButton && (
          <BotaoFechar onClick={onClose}>
            <Button type='close' />
          </BotaoFechar>
        )}
        {imageUrl && <ModalImage src={imageUrl} alt='Modal Visual' />}
        {children}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
