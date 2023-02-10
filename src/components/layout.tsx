import styled from "styled-components";

interface FlexProps {
  direction?: string;
  justifyContent?: string;
  gap: Number;
}

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.direction ?? ""};
  justify-content: ${(props: FlexProps) =>
    props.justifyContent ?? "space-between"};
  gap: ${(props: FlexProps) => props.gap + "px"};
  align-items: ${(props: FlexProps) => props.alignItems ?? "center"};
`;
