import { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button.jsx";

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #d0c2a9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBody = styled.div`
  position: relative;
  padding: 28px 28px 16px 28px;
`;
const Badge = styled.div`
  position: absolute;
  left: 18px;
  top: 18px;
  width: 38px;
  height: 38px;
  transform: rotate(45deg);
  background: #23d38e;
  border-radius: 8px;
  display: grid;
  place-items: center;
  &:after {
    content: "8";
    transform: rotate(-45deg);
    font-weight: 800;
    font-size: 18px;
    color: #0a0a0a;
  }
`;
const Question = styled.p`
  margin: 0;
  text-align: center;
  font-size: 18px;
  line-height: 1.35;
  color: #222;
  padding: 6px 36px;
`;
const StyledTextarea = styled.textarea`
  margin-top: 18px;
  padding: 18px;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  width: 100%;
  height: 180px;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  color: #222;
  resize: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ::placeholder {
    color: #8a8a8a;
    letter-spacing: 0.6px;
    line-height: 1.25;
  }
`;
const FooterRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

function Cap_perg8({
  question = "Fico no meio da perna e gosto de dobrar, sem mim fica difícil se agachar. Quem sou eu?",
  initialPlaceholder = 'DIGITE AQUI A SUA RESPOSTA\nELA COMEÇA COM A LETRA "J"\nDEPOIS CLIQUE EM "OK" PARA SALVAR',
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      alert("Por favor, digite uma resposta antes de salvar!");
      return;
    }
    if (!/^j/i.test(trimmed)) {
      alert('A resposta deve começar com a letra "J"!');
      return;
    }
    navigate("/capitulo2/pergunta9");
  };

  return (
    <Page>
      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={[
          <FooterRight key='footer'>
            <Button onClick={handleSave} type='ok' key='ok'>
              OK
            </Button>
          </FooterRight>,
        ]}
        closable={false}
        centered
        styles={{
          content: { borderRadius: 16, padding: 0, overflow: "hidden" },
          body: { padding: 0 },
        }}
      >
        <ModalBody>
          <Badge />
          <Question>{question}</Question>
          <StyledTextarea
            placeholder={initialPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </ModalBody>
      </Modal>
    </Page>
  );
}
export default Cap_perg8;
