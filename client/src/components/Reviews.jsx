import React from 'react';
import styled from 'styled-components';
import { Stars } from './Stars';
import theme from './themes/default';

const ReviewLabel = styled.span`
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: ${theme.fonts.size[3]};
  line-height: ${theme.fonts.lineHeight[1]};
  color: ${theme.fonts.color[0]};
`;

const Reviews = ({ numReviews, rating }) => (
  <div>
    <Stars rating={rating} />
    <ReviewLabel>
      { ` ${numReviews || 'No Reviews Yet'}` }
    </ReviewLabel>
  </div>
);

export {
  Reviews,
  ReviewLabel,
};
