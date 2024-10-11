import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 40px;
  padding-bottom: 40px;
  
  .sliders-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 40px;
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multiple-carousel__arrow--left {
    left: 60px;
    top: 10px;
    background-color: #9758a6;
  }

  .react-multiple-carousel__arrow--right {
    right: 100px;
    top: 20px;
    background-color: #9758a6;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 4px;
    background-color: #61a120;
  }
`;
