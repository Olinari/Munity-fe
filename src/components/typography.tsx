import styled from "styled-components";

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 24px;
`;

export const Heading = styled.h3`
  font-size: 16px;
  font-weight: 700;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Paragraph = styled.p``;

export const Small = styled.small`
  color: var(--color-blue-gray-65);
  font-size: var(--font-size-xs);
  font-weight: 300;
`;

export const Light = styled.span`
  font-weight: 300;
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const OrderedList = styled.ol`
  padding: 0 16px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const UnorderedList = styled.ul`
  padding: 0 16px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const EllipsisText = styled.span`
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const LinesEllipsisText = styled.span<{ lines?: number }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) =>
    props.lines ?? 2}; /* number of lines to show */
`;
