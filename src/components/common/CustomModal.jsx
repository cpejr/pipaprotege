import React from "react";
import { Modal } from "antd";
import styled from "styled-components";
import Button from "./Button";

const ModalContent = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const CustomModal = ({ title, children, isOpen, onClose, onConfirm, okText, cancelText }) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={onConfirm}
      onCancel={onClose}
      footer={[
        <Button key='cancel' onClick={onClose} type='default'>
          {cancelText || "Cancelar"}
        </Button>,
        <Button key='ok' onClick={onConfirm} type='primary'>
          {okText || "OK"}
        </Button>,
      ]}
    >
      <ModalContent>
        {children} {/*conteúdo*/}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
