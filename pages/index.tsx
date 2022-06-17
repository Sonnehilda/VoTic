import Footer from "../src/component/Footer";
import Header from "../src/component/Header";
import { css } from "@emotion/react";
import List from "../src/component/PreviewList";
import LoginModal from "../src/component/LoginModal";
import { useState } from "react";

const wrapper = css`
  height: auto;
  min-height: calc(100vh - 6rem);
`;

export default function Home() {
  const [modalState, setModalState] = useState<string>("");

  return (
    <>
      <div css={wrapper}>
        {modalState === "login" && <LoginModal setModalState={setModalState} />}

        <Header setModalState={setModalState} />
        <List type={"popularity"} />
        <List type={"recent"} />
      </div>
      <Footer />
    </>
  );
}
