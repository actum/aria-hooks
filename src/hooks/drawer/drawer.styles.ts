import styled from 'styled-components';

export const StyledDrawer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  width: 50%;
  max-width: 400px;
  padding: 20px;
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .sample_text {
    font-size: 32px;
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
