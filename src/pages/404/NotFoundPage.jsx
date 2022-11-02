import { Link } from "react-router-dom";
import styled from "styled-components";

const Style404 = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .div-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(175, 173, 173, 0.1);
    box-shadow: 10px 10px 20px 0px rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    color: white;
    width: 40%;
    height: 30%;
    h1 {
      font-size: 20rem;
      margin: 1.2rem 0;
    }
    .link {
      margin-top: 1rem;
      text-decoration: none;
      font-weight: 800;
      color: red;

      :hover {
        color: white;
      }
    }
  }
`;

export default function NotFoundPage() {
  return (
    <Style404>
      <div className="div-left">
        <h1>404</h1>

        <p>Pagina não encontrada</p>

        <Link className="link" to="/">
          {" "}
          Voltar
        </Link>
      </div>
    </Style404>
  );
}
