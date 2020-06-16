import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { ChevronIcon } from "../assets/icons/Chevron";

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 70%;
  margin-bottom: 50px;
`;

const Title = styled.h1<any>`
  color: #f6f6f6;
  font-size: 2.5em;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 500;
`;

const StockList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StockListItem = styled.li<any>`
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const StockName = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  margin-right: 0.625rem;
`;

const StockValue = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 20px;
  font-weight: 500;
`;

const StockButton = styled.button<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 50%;
  padding: 20px;
  background-color: #1f1f1f;
  color: white;
  border: 3px solid #383838;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
    ${StockName} {
      margin-bottom: 10px;
    }
  }
  ${(props) =>
    props.isOpen &&
    css`
      padding: 40px;
    `}
`;

const stockList = [
  { name: "Aker BP", currentValue: "184,20", valuta: "SEK" },
  { name: "Astra Zeneca", currentValue: "1013,00", valuta: "SEK" },
  { name: "Avanza Bank Holding", currentValue: "134,20", valuta: "SEK" },
  { name: "Industrivärden C", currentValue: "211,50", valuta: "SEK" },
  { name: "Investor B", currentValue: "512,20", valuta: "SEK" },
  { name: "Lundin Energy", currentValue: "232,10", valuta: "SEK" },
  { name: "Norwegian Air Shuttle", currentValue: "3,011", valuta: "NOK" },
  { name: "Paradox Interactive", currentValue: "188,00", valuta: "SEK" },
  { name: "SAS", currentValue: "8,96", valuta: "SEK" },
  { name: "Slack Technologies Inc", currentValue: "32,36", valuta: "USD" },
  { name: "Warner Music Group Corp", currentValue: "31,98", valuta: "USD" },
];

const StockItem = ({ stockName, stockValue, stockValuta }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StockListItem>
      <StockButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        isOpen={isOpen}
      >
        <StockName>{stockName}</StockName>
        <StockValue>
          {stockValue} {stockValuta}
        </StockValue>
        <ChevronIcon
          width={15}
          variant="fat"
          direction={isOpen ? "upward" : "downward"}
        />
      </StockButton>
    </StockListItem>
  );
};

const Stocks = () => {
  return (
    <StyledWrapper>
      <Wrapper>
        <Title>Current Stocks (on work)</Title>
        <StockList>
          {stockList.map((stock, index) => (
            <StockItem
              key={index}
              stockName={stock.name}
              stockValue={stock.currentValue}
              stockValuta={stock.valuta}
            />
          ))}
        </StockList>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Stocks;
