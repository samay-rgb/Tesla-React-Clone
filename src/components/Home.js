import React from "react";
import styled from "styled-components";
import Section from "./Section";
export default function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for contactless delivery"
        backgroundImg="model-s.jpg"
        leftText="Custom Order"
        rightText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order online for contactless delivery"
        backgroundImg="model-x.jpg"
        leftText="Custom Order"
        rightText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for contactless delivery"
        backgroundImg="model-y.jpg"
        leftText="Custom Order"
        rightText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order online for contactless delivery"
        backgroundImg="model-3.jpg"
        leftText="Custom Order"
        rightText="Existing Inventory"
      />
      <Section
        title="Low Cost Solar panels"
        description="Money back guarantee"
        backgroundImg="solar-panel.jpg"
        leftText="Order Now"
        rightText="Learn More"
      />
      <Section
        title="Best Solar Roofs"
        description="Solar roofs cost less than new roofs"
        backgroundImg="solar-roof.jpg"
        leftText="Order Now"
        rightText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftText="Order Now"
      />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
