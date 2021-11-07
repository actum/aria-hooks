import styled from 'styled-components';

export const StyledModal = styled.div`
  font-family: 'Roboto', sans-serif;
  background: white;
  width: 500px;
  height: 500px;
  max-height: 70vh;
  max-width: 70vw;
  padding: 20px;
  position: relative;
  .sample_text {
    font-size: 32px;
    opacity: 0.2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 8px;
  border-bottom: 1px solid #dbdbdb;
  .icon_btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;
