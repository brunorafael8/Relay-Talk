import React from 'react';
import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <Container type="button">{children}</Container>;
}
