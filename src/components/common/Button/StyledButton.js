import styled, { css } from "styled-components";
import { Button as AntdButton } from "antd";

export const COLORS = {
  text: "#000000",
  purple: "#8C52FF",
  yellow: "#F5BD58",
  white: "#FFFFFF",
};

const monochromaticStyles = css`
  &.avancar,
  &.voltar {
    background-color: #171817;
    color: ${COLORS.white};
    border: 3px solid ${COLORS.white};

    div.yellow-wrapper {
      background-color: #171817;
      color: ${COLORS.white};
      padding: 0 10px;
    }

    .anticon {
      background-color: #171817;
      color: ${COLORS.white};
      border: 3px solid ${COLORS.white};
      width: 100px;
      height: 100%;
    }
  }
  &.avancar:hover,
  &.avancar:focus,
  &.avancar:active,
  &.voltar:hover,
  &.voltar:focus,
  &.voltar:active {
    background-color: #171817 !important;
    color: ${COLORS.white} !important;
    border: 3px solid ${COLORS.white} !important;

    div.yellow-wrapper {
      background-color: #171817 !important;
      color: ${COLORS.white} !important;
    }

    .anticon {
      background-color: ${COLORS.white} !important;
      color: #171817 !important;
      border: 3px solid ${COLORS.white} !important;
    }

    &.voltar:hover,
    &.voltar:focus,
    &.voltar:active {
      flex-direction: row-reverse !important;
    }
  }
`;

export const StyledButton = styled(AntdButton)`
  font-family: Arial;
  font-weight: bold;
  font-size: 28px;
  border-radius: 0;
  height: auto;
  padding: 0;
  display: flex;
  align-items: center;

  margin: ${(props) => props.margin || "0"};

  &.close,
  &.avancar,
  &.voltar,
  &.iniciar {
    width: 20vw;
    height: 70px;
    max-width: 350px;
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 480px) {
      width: 90vw;
      height: 70px;
      font-size: 16px;
    }
  }

  &.xis {
    background-color: ${COLORS.purple};
    color: ${COLORS.white};
    border: none;
    width: 7%;
    height: 13%;
    justify-content: center;

    .anticon {
      background-color: ${COLORS.purple};
      color: ${COLORS.white};
      padding: 0px 40px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;

      @media (max-width: 480px) {
        font-size: 25px;
        padding: 0 10px;
      }
    }
  }

  &.close {
    background-color: ${COLORS.yellow};
    color: ${COLORS.text};
    border: none;
    justify-content: flex-start;
    flex-direction: row-reverse;

    div.yellow-wrapper {
      background-color: ${COLORS.yellow};
      color: ${COLORS.text};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex-grow: 1;
    }

    .anticon {
      background-color: ${COLORS.purple};
      color: ${COLORS.white};
      padding: 0px 40px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;

      @media (max-width: 480px) {
        font-size: 25px;
        padding: 0 10px;
      }
    }
  }

  &.avancar,
  &.voltar {
    background-color: ${COLORS.yellow};
    color: ${COLORS.text};
    border: none;

    div.yellow-wrapper {
      background-color: ${COLORS.yellow};
      color: ${COLORS.text};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex-grow: 1;
    }

    .anticon {
      background-color: ${COLORS.purple};
      color: ${COLORS.white};
      width: 100px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
    }
  }

  &.voltar {
    flex-direction: row-reverse;
  }

  &.ok {
    background-color: ${COLORS.purple};
    color: ${COLORS.white};
    border: none;
    width: 6%;
    min-height: 60px;
    min-width: 120px;
    height: 12%;
    justify-content: center;
  }

  &.setaFrente,
  &.setaTras {
    background-color: ${COLORS.purple};
    color: ${COLORS.white};
    border: none;
    width: 7%;
    height: 13%;
    justify-content: center;

    .anticon {
      background-color: ${COLORS.purple};
      color: ${COLORS.white};
      width: 100px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
    }
  }

  &.setaTras {
    flex-direction: row-reverse;
  }

  &.iniciar {
    background-color: ${COLORS.purple};
    color: ${COLORS.white};
    border: 4px solid ${COLORS.white};
    width: 426px;
    height: 106px;
    justify-content: center;
  }

  &.close:hover,
  &.close:focus,
  &.close:active,
  &.avancar:hover,
  &.avancar:focus,
  &.avancar:active {
    background-color: ${COLORS.yellow} !important;
    color: ${COLORS.text} !important;
    border: none !important;
  }

  &.voltar:hover,
  &.voltar:focus,
  &.voltar:active {
    background-color: ${COLORS.yellow} !important;
    color: ${COLORS.text} !important;
    border: none !important;
    flex-direction: row-reverse !important;
  }

  &.ok:hover,
  &.ok:focus,
  &.ok:active,
  &.setaFrente:hover,
  &.setaFrente:focus,
  &.setaFrente:active,
  &.setaTras:hover,
  &.setaTras:focus,
  &.setaTras:active {
    background-color: ${COLORS.purple} !important;
    color: ${COLORS.white} !important;
    border: none !important;
  }

  &.iniciar:hover,
  &.iniciar:focus,
  &.iniciar:active {
    background-color: ${COLORS.purple} !important;
    color: ${COLORS.white} !important;
    border: 4px solid ${COLORS.white} !important;
  }

  ${(props) => props.monochromatic && monochromaticStyles}
`;
