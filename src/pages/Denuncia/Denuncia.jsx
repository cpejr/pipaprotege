import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { ContainerDenuncia, CloseButtonD } from "./Styles";

export default function Denuncia() {
  return (
    <ContainerDenuncia>
      <CloseButtonD to='/'>
        <CloseOutlined />
      </CloseButtonD>
    </ContainerDenuncia>
  );
}
