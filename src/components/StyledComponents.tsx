'use client';

import styled from '@emotion/styled';

const StyledHeader = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  background-size: cover;
  background-position: center;

  /* Default Desktop Background */
  background-image: url('/Home3.png');

  /* Mobile-specific styles */
  @media (max-width: 768px) {
    background-image: url('/cristofer.jpg') ; /* Mobile image */
    background-color: none ; /* Remove the fallback color */
  }

  /* Tablet-specific styles (iPads or similar) */
  @media (min-width: 769px) and (max-width: 1024px) {
    background-image: url('/cristofer.jpg'); /* Image for tablet view */
    background-size: cover;
    background-position: center;
  }
`;

export default StyledHeader;