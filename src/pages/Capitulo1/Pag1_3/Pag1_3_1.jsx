import { useNavigate } from "react-router-dom";
import ChapterScreen from "../../../components/features/PadraoCap1/ChapterScreen";
import { useEffect, useState } from "react";

const C1_Tela_03_1 = () => {
  const navigate = useNavigate();

  const storedName = localStorage.getItem("userName");

  const handleAdvance = () => {
    navigate("/capitulo1/tela-04");
  };

  const contentText =
    "Prazer em te conhecer, [nome]! Minha missão é te ajudar a descobrir o mundo em segurança. Vamos juntos nessa?";

  const handleOtherButtonClick = () => {
    navigate("/capitulo1/tela-03_2");
  };

  const [nameText, setNameText] = useState(contentText);

  useEffect(() => {
    let finalContent = contentText;

    if (storedName) {
      finalContent = contentText.replace(/\[nome\]/g, storedName);
    }
    setNameText(finalContent);
  }, [storedName]);

  return (
    <ChapterScreen
      text={nameText}
      onAdvance={handleAdvance}
      characterVariant='variant1'
      showOtherButton={true}
      onOtherButtonClick={handleOtherButtonClick}
    />
  );
};

export default C1_Tela_03_1;
