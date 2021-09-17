import styled from 'styled-components';
import { PrimaryBtn } from '../shared_styled_components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const StyledBtn = styled(PrimaryBtn)`
  border-radius: 0;
  padding: 11px 15px;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  .btn__icon {
    transform: rotate(-90deg);
  }

  &:hover,
  &:focus {
    .btn__icon {
      transform: rotate(-90deg);
    }
  }

  &:not([aria-expanded='true']) {
    margin-bottom: 11px;
    .btn__icon {
      transform: rotate(90deg);
    }
  }
`;

export const StyledPanel = styled.div`
  width: 100%;
  max-width: 500px;
  font-size: 16px;
  padding: 11px 16px;
  font-family: Roboto, sans-serif;
`;
