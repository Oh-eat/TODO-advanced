import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Spacer from '../common/Spacer';
import DateModalActionButtons from './DateModalActionButtons';
import Calendar from '../common/Calendar';

const SelectWrapper = styled.div`
  display: flex;
`;

const SelectBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 2rem;

  .name {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .setter {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    select {
      outline: none;
      border: none;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      width: 100%;
      text-align-last: center;
    }
  }
`;

const DateModal = ({ dDay, onHide, onConfirm }) => {
  const date = dDay || new Date();
  const [year, month, day, hour, minute] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  ];
  const [nextDate, setNextDate] = useState({ year, month, day, hour, minute });

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setNextDate(state => ({ ...state, [name]: parseInt(value, 10) }));
  }, []);
  const onClick = useCallback(
    i => setNextDate(state => ({ ...state, day: i })),
    [],
  );

  return (
    <Modal>
      <h2>날짜 선택</h2>
      <Spacer />
      <SelectWrapper>
        <SelectBlock>
          <div className="name">
            <h4>연도</h4>
          </div>
          <div className="setter">
            <select name={'year'} value={nextDate.year} onChange={onChange}>
              {[...Array(7).keys()]
                .map(i => i + new Date().getFullYear() - 3)
                .map(i => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
            </select>
          </div>
        </SelectBlock>
        <SelectBlock>
          <div className="name">
            <h4>월</h4>
          </div>
          <div className="setter">
            <select name={'month'} value={nextDate.month} onChange={onChange}>
              {[...Array(12).keys()]
                .map(i => i + 1)
                .map(i => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
            </select>
          </div>
        </SelectBlock>
      </SelectWrapper>
      <Spacer height="0.5rem" />
      <Calendar {...nextDate} onClick={onClick} />
      <Spacer height="0.5rem" />
      <SelectWrapper>
        <SelectBlock>
          <div className="name">
            <h4>시</h4>
          </div>
          <div className="setter">
            <select name={'hour'} value={nextDate.hour} onChange={onChange}>
              {[...Array(24).keys()].map(i => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </SelectBlock>
        <SelectBlock>
          <div className="name">
            <h4>분</h4>
          </div>
          <div className="setter">
            <select name={'minute'} value={nextDate.minute} onChange={onChange}>
              {[...Array(60).keys()].map(i => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </SelectBlock>
      </SelectWrapper>
      <Spacer />
      <DateModalActionButtons
        nextDate={nextDate}
        onHide={onHide}
        onConfirm={onConfirm}
      />
    </Modal>
  );
};

export default DateModal;
