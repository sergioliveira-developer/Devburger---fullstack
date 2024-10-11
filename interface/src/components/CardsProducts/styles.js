import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    height: 80%;

    p {
      width: 100%;
      font-size: 18px;
      color: #ff8c05;
      line-height: 20px;
      font-weight: 700;
      margin-top: 40px;
      overflow: hidden;
    }

    strong {
      font-size: 22px;
      color: #363636;
      font-weight: 800;
      line-height: 20px;
      overflow: hidden;
    }
  }
`;

export const CardImage = styled.img`
  min-height: 100%;
  position: absolute;
  top: -50px;
`;
