import styled from 'styled-components';

export const StyledTooltip = styled.div`
  display: initial;
  width: max-content;
  padding: 11px 15px;
  border-radius: 6px;
  background: black;
  color: white;
  position: absolute;
  left: 110%;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-right-color: black;
  }
`;

export const TooltipContainer = styled.div`
  width: max-content;
  position: relative;
`;
