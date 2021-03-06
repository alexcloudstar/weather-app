import styled from 'styled-components';

export const WeatherBodyWrapper = styled.div`
  .WeatherBody {
    margin: 0 15px;
    padding: 10px 50px;
    transition: 0.3s all ease;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
      0 0 40px rgba(128, 128, 128, 0.1) inset;
  }
  .WeatherBody:hover {
    cursor: pointer;
    box-shadow: 0 15px 10px -10px rgba(31, 31, 31, 0.5);
  }
`;
