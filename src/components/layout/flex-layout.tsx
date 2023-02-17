import styled from 'styled-components';

interface FlexProps {
  direction?: string;
  justify?: string;
  gap?: Number;
  align?: string;
  wrap?: 'wrap' | 'nowrap';
  grow?: number;
  shrink?: number;
}

export const FlexLayout = styled.div`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.direction};
  justify-content: ${(props: FlexProps) => props.justify};
  gap: ${(props: FlexProps) => props.gap + 'px'};
  align-items: ${(props: FlexProps) => props.align};
  flex-wrap: ${(props: FlexProps) => props.wrap};
  flex-grow: ${(props: FlexProps) => props.grow};
`;
