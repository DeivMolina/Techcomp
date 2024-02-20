import styled from "styled-components";
import { NieveEffect } from "../hooks/NieveEffect";
import { useRef } from "react";
export function NieveComponente() {
  const canvasRef = useRef(null);
  return (
    <Container >
      <canvas ref={canvasRef}></canvas>
      <NieveEffect canvasRef={canvasRef} />
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; // Para evitar interacciones con el usuario
  z-index: -1; // Para que esté detrás de otros elementos
  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
