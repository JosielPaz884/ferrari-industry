import styled from "styled-components";

const Style404 = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
`;

export default function NotFoundPage() {
  return (
    <Style404>
      <div className="div-letf"></div>
      <div className="div-right"></div>
    </Style404>
  );
}
