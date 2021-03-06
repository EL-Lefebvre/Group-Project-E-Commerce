import React, { useState, useEffect } from "react";

import { spinner6 } from "react-icons-kit/icomoon/spinner6";
import { Icon } from "react-icons-kit";
import { COLORS } from "../constants";
import styled, { keyframes } from "styled-components";

const moment = require("moment");

const Confirmation = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const receivedData = localStorage.getItem("received");
    console.log("receivedData", JSON.parse(receivedData));
    setData(JSON.parse(receivedData));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("data", data);

  if (!data) {
    return (
      <div>
        <StyledIcon size={50} icon={spinner6} />
      </div>
    );
  }

  return (
    <Wrapper>
      <Logos>
        <Logo1
          src={require("../assets/ThankYou.jpg")}
          alt="WearTek"
          height="200px"
        ></Logo1>
        <Logo1
          src={require("../assets/wearteklogo.png")}
          alt="WearTek"
          height="200px"
        ></Logo1>
      </Logos>
      <Main>Thank you for your order!</Main>
      <Processing>
        We are processing your order now, here are the details:
      </Processing>

      <Divider />

      <ConfirmationWrapper>
        <Details>Confirmation will be sent to</Details>
        <Details2>{data.email}</Details2>
      </ConfirmationWrapper>

      <ConfirmationWrapper>
        <Details>Order number</Details>
        <Details2>{data.id.substring(0, 8)}</Details2>
      </ConfirmationWrapper>

      <ConfirmationWrapper>
        <Details>Order date </Details>
        <Details2>{moment().format("LL")}</Details2>
      </ConfirmationWrapper>

      <ConfirmationWrapper>
        <Details>Delivery address</Details>
        <Details2>
          <div>{data.AddressLine1}</div>
          <div>{data.City}</div>
          <div>{data.Province}</div>
          <div>{data.Country}</div>
          <div>{data.Postcode}</div>
        </Details2>
      </ConfirmationWrapper>

      <ConfirmationWrapper>
        <Details>Expected delivery date:</Details>
        <Details2>{moment().add(7, "days").format("LL")}</Details2>
      </ConfirmationWrapper>

      <ConfirmationWrapper>
        <Details>Your Order Summary:</Details>
        <FlexWrapper>
          {data.newItems.map((item) => (
            <Details2>
              {item.name} - Quantity ({item.quantity})
            </Details2>
          ))}
        </FlexWrapper>
      </ConfirmationWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
`;

const Main = styled.div`
  font-size: 40px;
  margin-bottom: 50px;
`;

const Processing = styled.div`
  margin-bottom: 50px;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 2px;
  background-color: ${COLORS.fourth};
  margin-bottom: 50px;
`;

const ConfirmationWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  width: 100%;
`;

const FlexWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Details = styled.div`
  display: flex;
  width: 50%;
  font-weight: bold;
  justify-content: flex-end;
  padding-right: 40px;
`;

const Details2 = styled.div`
  padding-bottom: 10px;
  color: ${COLORS.secondary};
`;
const Logo1 = styled.img``;
const Logos = styled.div`
  margin-top: 40px;
  display: flex;
  margin-bottom: 30px;
`;
const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledIcon = styled(Icon)`
  margin: 5% auto;
  animation: ${spinner} linear 1000ms infinite;
`;

export default Confirmation;
