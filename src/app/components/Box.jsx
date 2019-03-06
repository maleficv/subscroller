import styled from '@emotion/styled';

const Box = styled('div')`
  float: left;
  width: 33.33%;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    width: 50%;
  }
  
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
  
  &:hover {
    .image-links {
      opacity: 1;
    }
    
    .cloak {
      opacity: 0.3;
    }
  }
`;

export default Box;