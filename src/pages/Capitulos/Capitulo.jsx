import { useParams } from "react-router-dom";

export default function Capitulo() {
  const { numero } = useParams();

  return (
    <div>
      <h1>Capítulo {numero}</h1>
      <p>Conteúdo do capítulo {numero} .</p>
    </div>
  );
}
