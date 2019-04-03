import styled from 'styled-components';

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: auto;
  padding: 25px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
`;

export const GraphHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px 15px 10px;
    margin: 0 10px 5px 10px;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
    h2{
        font-size: 1.2rem;
        margin-bottom: 5px;
        font-weight: 100;
        i{
            font-size: 1rem;
            margin-left: 5px;
        }
    }
    h3{
        font-size: 0.85rem;
        color: #7F8081;
    }
    .percentage{
        color: #0CB200;
    }
`;