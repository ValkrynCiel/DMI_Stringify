/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const trans = keyframes`
  0% {
    background-color: black;
  }
  100% {
    background-color: white;
  }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  background-color: black;
  border-radius: 50%;
  margin: auto;
  animation: ${trans} 2s ease-in-ease-out infinite;
`;

export default function HomePage() {
  return <Circle />;
}
