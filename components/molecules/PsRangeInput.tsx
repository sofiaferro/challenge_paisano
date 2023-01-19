import React, { useState } from 'react';
import styled from 'styled-components';

const StyledRangeInputWrapper = styled.div`
  /* styles for the wrapper */
  width: 100%;
  margin: 10px 0;
  position: relative;
  display: inline-block;
`;
const StyledRangeInput = styled.input`
  /* styles for the input */
  -webkit-appearance: none;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    animate: 0.2s;
    background: #ddd;
    border-radius: 10px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #ccc;
  }
  &:hover::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
`;
const PsRangeInput = ({
  value: initialValue,
  onChange: handleChange,
}: {
  value: number;
  onChange: (e: unknown) => void;
}) => {
  const [value, setValue] = useState(initialValue);
  const handleOnChange = (event: {
    target: { value: React.SetStateAction<number> };
  }) => {
    setValue(event.target.value);
    handleChange(event);
  };
  return (
    <StyledRangeInputWrapper>
      <StyledRangeInput type='range' value={value} onChange={handleOnChange} />
    </StyledRangeInputWrapper>
  );
};
export default PsRangeInput;
