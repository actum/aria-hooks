import React from 'react';
import { useAriaAccordion } from '.';
import { items } from './data';

import { Container, StyledTabBtn, StyledPanel } from './accordion.styles';
import { AccordionProps, AccordionReturnProps } from './types';

export const Accordion: React.FC<AccordionProps> = () => {
  const { accordionProps, buttonProps, panelProps } = useAriaAccordion({
    id: 'Accordion1',
  });

  return (
    <Container {...accordionProps}>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <StyledTabBtn
            className="acc_button"
            {...buttonProps(item.id, item.isOpen)}
          >
            {item.title}
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon btn__icon"
            >
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </StyledTabBtn>
          <StyledPanel {...panelProps(item.id, item.isOpen)}>
            {item.content}
          </StyledPanel>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default {
  title: 'Aria Component/Accordion',
  component: Accordion,
};

export const AccordionHookProps: React.FC<AccordionProps> = () => null;
export const AccordionHookReturnProps: React.FC<AccordionReturnProps> = () =>
  null;
