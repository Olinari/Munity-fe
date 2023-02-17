import { Vortex } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = () => (
  <Container>
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={[
        'var(--color-red)',
        'var(--color-green)',
        'var(--color-blue)',
        'var(--color-yellow)',
        'var(--color-purple)',
        'var(--color-gray-1)',
      ]}
    />
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
