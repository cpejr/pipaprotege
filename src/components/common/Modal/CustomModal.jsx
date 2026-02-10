import { Modal } from "antd";
import styled, { css } from "styled-components";

const ModalContent = styled.div`
  text-align: center;
  padding: 20px;
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
  margin-bottom: 10px;
`;

const CustomModal = ({ children, isOpen, imageUrl, footer, isBottomPositioned = false, width }) => {
  let modalStyle = {};

  if (isBottomPositioned) {
    modalStyle = {
      top: 400,
    };
  } else {
    modalStyle = {
      top: 200,
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
      width={width}
    >
      <ModalContent $isBottomPositioned={isBottomPositioned}>
        {imageUrl && <ModalImage src={imageUrl} alt='Modal Visual' />}
        {children}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
