import styled from 'styled-components';

export const StyledTabs = styled.div`
  max-width: 500px;
  .tablist {
    max-width: 100%;
    margin-bottom: -1px;

    button {
      text-transform: capitalize;
      font-size: 1rem;
      font-weight: 700;
      overflow: visible;
      background-color: white;
      padding: 0.5em 1em;
      margin-right: 1rem;
      outline: none;
      border: 1px solid #2e2d2c;
      &[aria-selected='true'] {
        border-bottom-color: white;
      }
      &:focus {
        color: #d93c31;
      }
    }
  }
  .tabpanel {
    border: 1px solid #2e2d2c;
    padding: 0.5em 1em;
  }
`;
