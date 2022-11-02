import styled from "styled-components";

const StyleHome = styled.div`
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
    box-shadow: 10px 10px 20px 0px rgba(255, 255, 255, 0.233);
    border-radius: 20px;
    padding: 1.5rem;
    h1 {
      color: white;
    }

    img {
      width: 50%;
    }

    button {
      border: 2px solid #963232;
      border-radius: 5px;
      width: 30%;
      padding: 10px 0;
      color: #963232;
      background-color: transparent;
      font-weight: 900;

      :hover {
        border-color: whitesmoke;

        color: whitesmoke;
        background-color: #963232;
        font-weight: 800;
      }
    }
  }
`;

export default function Home() {
  const handleClick = () => alert("Troquei");
  return (
    <StyleHome>
      <div className="div-left">
        <h1> Bem-vindo a Ferrari Industry</h1>

        <img src="./assets/images/logo.png" alt="logo" />
        <button onClick={handleClick}> Entrar</button>
      </div>
      <div className="div-right"></div>
    </StyleHome>
  );
}
