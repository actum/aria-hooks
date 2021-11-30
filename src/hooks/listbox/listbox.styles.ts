import { SELECTED_CLASS_NAME } from './controller';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 400px;
  color: #2e2d2c;

  button {
    cursor: pointer;
    &:focus,
    &:hover {
      color: #d93c31;
    }

    display: flex;
    align-items: center;
    border-radius: 0;
    padding: 12px;
    background-color: #fff;

    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    outline: 0;
    border: 1px solid transparent;

    transition-property: color, border, background-color, box-shadow;
    transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    transition-duration: 0.2s;
  }

  .listbox {
    margin: 0;
    padding: 0;
    min-width: 0;
    border: 1px solid #2e2d2c;
    border-radius: 0;
    background-color: white;
    list-style: none;
    box-sizing: border-box;

    position: absolute;
    top: calc(100% + 4px);

    li {
      padding: 4px 0;
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      border: 1px solid transparent;
      margin: -1px;
      position: relative;
      width: calc(100% + 2px);
      box-sizing: border-box;
      padding: 14px 12px;

      text-align: center;
      z-index: 1;

      &:hover,
      &.${SELECTED_CLASS_NAME} {
        text-decoration: none;
        border-color: #d93c31;
        background-color: #f5f5f5;
      }
    }

    &:focus {
      outline: none;
    }
  }

  .listbox[aria-hidden='true'] {
    display: none;
  }
`;
