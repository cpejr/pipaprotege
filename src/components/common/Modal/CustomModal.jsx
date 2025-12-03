import { Modal } from "antd";
import styled, { css } from "styled-components";

const ModalContent = styled.div`
  text-align: center;
  padding: 50px;
  font-family: Arial, sans-serif;
  font-size: 25px;
  color: black;

  ${(props) =>
    props.$isBottomPositioned &&
    css`
      padding: 5px;
    `}
`;

const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const CustomModal = ({ children, isOpen, imageUrl, footer, isBottomPositioned = false }) => {
  let modalStyle = {};

  if (isBottomPositioned) {
    modalStyle = {
      top: 300,
    };
  } else {
    modalStyle = {
      top: 100,
    };
  }

  return (
    <Modal
      open={isOpen}
      footer={footer}
      title={null}
      closeIcon={false}
      mask={false}
      style={modalStyle}
    >
      <ModalContent $isBottomPositioned={isBottomPositioned}>
        {imageUrl && <ModalImage src={imageUrl} alt='Modal Visual' />}
        {children}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
