import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/palette';

const CalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
`;

const DateBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  margin: 0;
  padding: 0;
  text-align: center;
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
       {
        background: ${palette.gray[4]};
        border-radius: 100%;
      }
    `}
`;

const GridBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 220px;
  user-select: none;
`;

const Calendar = ({ year, month, day, onClick }) => {
  const blankCount = new Date(
    `${year}-${month < 10 ? '0' + month : month}-01`,
  ).getDay();
  const dayCount = new Date(year, month, 0).getDate();

  return (
    <CalendarBlock>
      <GridBlock>
        {['일', '월', '화', '수', '목', '금', '토'].map(day => (
          <DateBlock key={day}>{day}</DateBlock>
        ))}
        {[...Array(blankCount).keys()].map(i => (
          <DateBlock key={i}>　</DateBlock>
        ))}
        {[...Array(dayCount).keys()]
          .map(i => i + 1)
          .map(i => (
            <DateBlock selected={day === i} key={i} onClick={() => onClick(i)}>
              {i}
            </DateBlock>
          ))}
      </GridBlock>
    </CalendarBlock>
  );
};

export default Calendar;
