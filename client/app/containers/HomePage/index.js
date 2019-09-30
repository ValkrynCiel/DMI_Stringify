/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import React from 'react';
import styled from 'styled-components';
import H2 from 'components/H2';
import PageWrapper from 'components/PageWrapper';

const BrandName = styled.span`
  color: teal;
`;

export default function HomePage() {
  return (
    <PageWrapper>
      <H2>
        Welcome to <BrandName>Stringify</BrandName>
        <br /> your home for string collection.
      </H2>
    </PageWrapper>
  );
}
