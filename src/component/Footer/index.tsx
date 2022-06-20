import { css } from "@emotion/react";

const Footer = () => {
  return (
    <footer css={backgroundStyle}>
      <strong>ⓒ 2022 __Rals All rights reserved.</strong>
      <span>Front-End : __Rals</span>
      <span>Back-End : khcho0125</span>
    </footer>
  );
};

export default Footer;

const backgroundStyle = css`
  background-color: #f6f6f6;

  position: relative;

  width: 100%;
  height: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1rem;

  span {
    font-size: 0.75rem;

    :first-of-type {
      margin-top: 0.5rem;
    }
  }
`;
