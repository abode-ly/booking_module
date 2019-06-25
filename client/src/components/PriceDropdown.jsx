import React from 'react';
import styled from 'styled-components';
import PriceDDRow from './PriceDDRow';
import { daysBetween } from '../helpers/Dates';
import formatPrice from '../helpers/Prices';

const PriceContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 4px 0px;
  width: 100%;
`;

const PriceDropdown = ({
  price,
  checkInDate,
  checkOutDate,
  cleaningFee,
  accommodationTax,
  generalTax,
  overGuestThreshold,
  additionalGuestFee,
}) => {
  const numDays = daysBetween(checkInDate, checkOutDate);
  const finalPrice = overGuestThreshold ? (Number(additionalGuestFee) + Number(price)) : price;
  const subTotal = Math.ceil(finalPrice) * numDays;
  const tax = Number(accommodationTax) + Number(generalTax);
  const serviceFee = Math.ceil(subTotal * 0.08);

  let PriceRows = [];
  PriceRows.push([`$${Math.ceil(finalPrice)} x ${numDays} night${numDays > 1 ? 's' : ''}`, `$${formatPrice(subTotal)}`]);
  if (cleaningFee) PriceRows.push(['Cleaning fee', `$${Math.ceil(cleaningFee)}`]);
  if (tax > 0.01) PriceRows.push(['Occupancy taxes and fees', `$${Math.ceil(subTotal * (tax))}`]);
  PriceRows.push(['Service fee', `$${serviceFee}`]);
  PriceRows.push(['Total', `$${formatPrice(Math.ceil(subTotal + serviceFee + Number(cleaningFee) + (subTotal * tax)))}`, true]);

  PriceRows = PriceRows.map(val => <PriceDDRow label={val[0]} price={val[1]} Total={val[2] || false} />);
  return (
    <PriceContainer>
      {PriceRows}
    </PriceContainer>
  );
};

export default PriceDropdown;
