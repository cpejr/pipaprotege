import { useState, useCallback, useMemo } from "react";
import Button from "../../common/Button/Button";

import {
  PuzzleContainer,
  InstructionsTop,
  PalavrasBusca,
  GridWrapper,
  GridContainer,
  GridCell,
  FooterControls,
  LeftControls,
} from "./StyledCaca";

const GRID_IMAGEM_COMPLETA = [
  "AACFBALANCAKPIOLUTJLPISL".split(""),
  "PINLYKESQUELETOUNHIJKWQI".split(""),
  "PLOINHHHGVBNIUERWRADSFMJ".split(""),
  "TJUINGJSZSDEWQFQUIMICAGL".split(""),
  "UIMICROSCOPIOKFGHTYIJKIO".split(""),
  "BIJUDFCWERFVSABCATLMNBPI".split(""),
  "OIYHGFVAQEERRGVHIOIPJKLM".split(""),
  " ".split(""),
];

const NUM_COLUNAS = 24;

const CacaPalavrasComponent = ({ onFinish }) => {
  const palavrasReais = useMemo(
    () => ["BALANCA", "ESQUELETO", "QUIMICA", "TUBO", "MICROSCOPIO"],
    []
  );

  const [palavras] = useState(palavrasReais);
  const [grid] = useState(GRID_IMAGEM_COMPLETA);

  const [selecionando, setSelecionando] = useState(false);
  const [celulasSelecionadas, setCelulasSelecionadas] = useState([]);
  const [celulaInicial, setCelulaInicial] = useState(null);

  const [palavrasEncontradas, setPalavrasEncontradas] = useState([]);
  const [celulasEncontradas, setCelulasEncontradas] = useState([]);

  const isGameComplete = palavrasEncontradas.length === palavras.length;

  const handleMouseDown = useCallback((linha, coluna) => {
    setSelecionando(true);
    setCelulaInicial({ linha, coluna });
    setCelulasSelecionadas([{ linha, coluna }]);
  }, []);

  const handleMouseEnter = useCallback(
    (linha, coluna) => {
      if (!selecionando) return;

      const { linha: linhaInicial, coluna: colunaInicial } = celulaInicial;
      const deltaLinhaAbs = Math.abs(linha - linhaInicial);
      const deltaColunaAbs = Math.abs(coluna - colunaInicial);

      const ehLinhaReta = linha === linhaInicial;
      const ehColunaReta = coluna === colunaInicial;
      const ehDiagonalPerfeita = deltaLinhaAbs === deltaColunaAbs && deltaLinhaAbs > 0;

      if (!ehLinhaReta && !ehColunaReta && !ehDiagonalPerfeita) {
        return;
      }

      const novasCelulas = [];
      const deltaLinha = Math.sign(linha - linhaInicial);
      const deltaColuna = Math.sign(coluna - colunaInicial);
      let linhaAtual = linhaInicial;
      let colunaAtual = colunaInicial;

      while (true) {
        novasCelulas.push({ linha: linhaAtual, coluna: colunaAtual });
        if (linhaAtual === linha && colunaAtual === coluna) break;
        linhaAtual += deltaLinha;
        colunaAtual += deltaColuna;
      }
      setCelulasSelecionadas(novasCelulas);
    },
    [selecionando, celulaInicial]
  );

  const handleMouseUp = useCallback(() => {
    if (!selecionando) return;
    setSelecionando(false);

    const palavraSelecionada = celulasSelecionadas.map((c) => grid[c.linha][c.coluna]).join("");

    const palavraInvertida = palavraSelecionada.split("").reverse().join("");

    const palavraCorreta = palavras.find((p) => p === palavraSelecionada || p === palavraInvertida);

    if (palavraCorreta && !palavrasEncontradas.includes(palavraCorreta)) {
      setPalavrasEncontradas((prev) => [...prev, palavraCorreta]);
      setCelulasEncontradas((prev) => [...prev, ...celulasSelecionadas]);
    }

    setCelulasSelecionadas([]);
  }, [selecionando, celulasSelecionadas, grid, palavras, palavrasEncontradas]);

  const handleOkClick = () => {
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <PuzzleContainer onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
      <InstructionsTop>
        <PalavrasBusca>
          ENCONTRE:
          {palavras.map((p, index) => (
            <span
              key={p}
              style={{
                color: palavrasEncontradas.includes(p) ? "#aaa" : "#ff9900",
                textDecoration: palavrasEncontradas.includes(p) ? "line-through" : "none",
              }}
            >
              {p}
              {index < palavras.length - 1 ? ", " : ""}
            </span>
          ))}
        </PalavrasBusca>
        <p>DEPOIS CLIQUE EM "OK" PARA FINALIZAR O DESAFIO</p>
      </InstructionsTop>

      <GridWrapper>
        <GridContainer style={{ gridTemplateColumns: `repeat(${NUM_COLUNAS}, 1fr)` }}>
          {grid.map((linha, rowIndex) =>
            linha.map((letra, colIndex) => {
              const key = `${rowIndex}-${colIndex}`;

              const estaSelecionada = celulasSelecionadas.some(
                (c) => c.linha === rowIndex && c.coluna === colIndex
              );
              const estaEncontrada = celulasEncontradas.some(
                (c) => c.linha === rowIndex && c.coluna === colIndex
              );

              return (
                <GridCell
                  key={key}
                  isSelecting={estaSelecionada}
                  isFound={estaEncontrada}
                  onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                  onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                >
                  {letra}
                </GridCell>
              );
            })
          )}
        </GridContainer>
      </GridWrapper>

      <FooterControls>
        <LeftControls></LeftControls>

        <Button type='ok' onClick={handleOkClick} disabled={!isGameComplete}>
          OK
        </Button>
      </FooterControls>
    </PuzzleContainer>
  );
};

export default CacaPalavrasComponent;
