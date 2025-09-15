import { Modal } from "antd";
import styled from "styled-components";

const ModalContent = styled.div`
  text-align: center;
  padding: 50px;
  font-family: Arial, sans-serif;
  font-size: 25px;
  color: black;
`;

const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const CustomModal = ({ children, isOpen, imageUrl, footer }) => {
  return (
    <Modal open={isOpen} footer={footer} title={null} closeIcon={false}>
      <ModalContent>
        {imageUrl && <ModalImage src={imageUrl} alt='Modal Visual' />}
        {children}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
