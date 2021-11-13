import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
export default function Header() {
  const [menu, setMenu] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="/">{car}</a>{" "}
            </li>
          ))}
      </Menu>
      <RightMenu>
        <li>
          {" "}
          <a href="/">Shop</a>{" "}
        </li>
        <li>
          {" "}
          <a href="/">Tesla Account</a>{" "}
        </li>
        <li className="menu">
          <img
            src="https://img.icons8.com/ios-filled/30/000000/menu--v4.png"
            alt=""
            onClick={() => setMenu(true)}
          />
        </li>
      </RightMenu>
      <BurgerNav show={menu}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
        >
          <img
            src="https://img.icons8.com/ios-filled/30/000000/x.png"
            alt=""
            onClick={() => setMenu(false)}
          />
        </div>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="/">{car}</a>{" "}
            </li>
          ))}
        <li>
          <a href="/">Roadster</a>{" "}
        </li>
        <li>
          <a href="/">Existing Inventory</a>{" "}
        </li>
        <li>
          <a href="/">Trade In </a>{" "}
        </li>
        <li>
          <a href="/">Cybertruck</a>{" "}
        </li>
        <li>
          <a href="/">Semi</a>{" "}
        </li>
        <li>
          <a href="/">Charging</a>{" "}
        </li>
        <li>
          <a href="/">Used Inventory</a>{" "}
        </li>
        <li>
          <a href="/">About Us</a>{" "}
        </li>
      </BurgerNav>
    </Container>
  );
}
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  li {
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  font-weight: 600;
`;
const RightMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  li {
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
  }
  @media (max-width: "768px") {
    .menu {
      display: none;
    }
  }
  font-weight: 600;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
    border-bottom: 2px solid black;
    a {
      font-weight: 600;
    }
    img {
      padding: 0;
      float: right;
    }
  }
`;
