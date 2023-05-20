import React from "react";
import styled, { keyframes } from "styled-components";

import RainAnimation from './Canvas';

const loadingAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.2);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.6);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 9999;
`;

const LoaderText = styled.p`
  letter-spacing: 0.06em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 44px;
  font-weight: bold;
  animation: ${loadingAnimation} 4s ease-in-out infinite;
`;


const Preloader = () => (
  <LoaderWrapper>
    <RainAnimation />
    <LoaderText>
      Tracking Platform &lt;/&gt;
    </LoaderText>
  </LoaderWrapper >
);
export default Preloader;
