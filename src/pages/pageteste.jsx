import Button from "../components/common/Button";
import CustomModal from "../components/common/CustomModal";
import FormContainer from "../components/common/FormContainer";
import InputField from "../components/common/InputField";
import LinkButton from "../components/common/LinkButton";
import React, { useState } from "react";

export default function Teste() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleConfirm = () => {
    alert("Ação de modal confirmada");
    setIsOpen(false);
  };
  return (
    <div>
      <Button type='avancar'>Fechar</Button>
      <Button onClick={handleOpenModal}>Modal</Button>
      <CustomModal
        title='Modal teste'
        isOpen={isOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        okText='Confirmar'
        cancelText='Voltar'
      ></CustomModal>
      <FormContainer></FormContainer>
      <InputField></InputField>
      <LinkButton>Oi</LinkButton>
    </div>
  );
}
