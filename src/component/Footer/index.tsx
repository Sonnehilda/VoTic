import { css } from "@emotion/react";

const Footer = () => {
  return <footer css={backgroundStyle}></footer>;
};

export default Footer;

const backgroundStyle = css`
  background-color: #f1f1f1;

  position: relative;

  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
