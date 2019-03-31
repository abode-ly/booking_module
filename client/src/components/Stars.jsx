import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';

const StarWrapper = styled.svg`
  viewBox: "0 0 1000 1000"
  height: 1em;
  width: 1em;
  fill: ${theme.palette.svg};
`;

const FullStar = () => 
<StarWrapper viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
  <path 
    d="M 971.5 379.5 c 9 28 2 50 -20 67 L 725.4 618.6 l 87 280.1 c 
    11 39 -18 75 -54 75 c -12 0 -23 -4 -33 -12
    l -226.1 -172 l -226.1 172.1 c -25 17 -59 12 -78 -12 
    c -12 -16 -15 -33 -8 -51 l 86 -278.1 L 46.1 446.5 c -21 -17 -28 -39 -19 -67 
    c 8 -24 29 -40 52 -40 h 280.1 l 87 -278.1 c 7 -23 28 -39 52 -39 c 25 0 47 17 54 41 
    l 87 276.1 h 280.1 c 23.2 0 44.2 16 52.2 40 Z">
  </path>
</StarWrapper>

const HalfStar = () => 
<StarWrapper viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
  <path
  d="M 510.2 23.3 l 1 767.3 l -226.1 172.2 c -25 17 -59 12 -78 -12 
  c -12 -16 -15 -33 -8 -51 l 86 -278.1 L 58 447.5 c -21 -17 -28 -39 -19 -67 
  c 8 -24 29 -40 52 -40 h 280.1 l 87 -278.1 c 7.1 -23.1 28.1 -39.1 52.1 -39.1 Z"
  ></path>
</StarWrapper>

const Stars = props  => {
  const stars = [];
  for (let i = 0; i < 4; i += 1) {
    stars.push(FullStar());
  }
  stars.push(HalfStar());
  return (
    <span id="bm-stars-container">
      {stars}
    </span>
  )
}

export default Stars;
