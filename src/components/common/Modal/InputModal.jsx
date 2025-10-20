import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

const StyledTextarea = styled.textarea`
  padding: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  color: #888;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  resize: none;
  &::placeholder {
    color: #888;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function InputModal({
  initialPlaceholder = 'DIGITE AQUI O SEU NOME DEPOIS CLIQUE EM "OK" PARA SALVAR',
  nextPath,
  backPath,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    console.log("Valor salvo:", inputValue);
    handleCloseModal();

    if (nextPath) {
      navigate(nextPath);
    } else if (backPath) {
      navigate(backPath);
    }
  };

  return (
    <>
      <YellowButton onClick={handleOpenModal}>InputModal</YellowButton>
      <CustomModal
        isOpen={isModalOpen}
        footer={[
          <FooterContainer key='footer-container'>
            <Button onClick={handleSave} type='ok' key='ok'>
              OK
            </Button>
          </FooterContainer>,
        ]}
      >
        <StyledTextarea
          placeholder={initialPlaceholder}
          value={inputValue}
          onChange={handleInputChange}
        />
      </CustomModal>
    </>
  );
}

export default InputModal;
