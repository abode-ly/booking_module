import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ReportListing from './ReportListing';
import BookingContainer from './BookingContainer';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('./themes)
    font-family: 'Circular'
  }
  `;

const BookingParentContainer = styled.div`
  max-width: 430px;
  `;

const BookingModule = () => (
  <BookingParentContainer>
    <div id="bm-parent-container">
      <GlobalStyles />
      <BookingContainer />
      <ReportListing />
    </div>
  </BookingParentContainer>
);

export default BookingModule;
