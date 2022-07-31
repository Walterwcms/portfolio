import styled from "styled-components";

export const Nav = styled.header`
  display: flex;
  position: sticky;
  top: 0;

  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  background: #272727;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-left: 2em;
  list-style: none;
  width: clamp(20rem, 23rem, 26rem);;

`;

export const Li = styled.li`

`;

export const Anchor = styled.a`
  text-decoration: none;
  color: white;
  font-style: normal;
  font-size: 1em;
  line-height: 19px;

  .Anchor::after {
    box-sizing: border-box;
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    background-color: blue;
    border-radius: 200px;

  }

  :hover {
    color: #A8CFEC;
  }

`;

export const H1 = styled.h1`
  margin-right: 18%;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9em;
  line-height: 15px;
  letter-spacing: 0.245em;
`;

