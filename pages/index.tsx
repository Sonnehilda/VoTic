import Footer from "../src/component/Footer";
import Header from "../src/component/Header";
import { css } from "@emotion/react";
import PreviewList from "../src/component/PreviewList";
import LoginModal from "../src/component/LoginModal";
import { useState } from "react";
import PolicyModal from "../src/component/PolicyModal";
import RegisterModal from "../src/component/RegisterModal";
import FullViewList from "../src/component/FullViewList";

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
        {modalState === "policy" && (
          <PolicyModal setModalState={setModalState} />
        )}
        {modalState === "register" && (
          <RegisterModal setModalState={setModalState} />
        )}

        <Header setModalState={setModalState} />

        <PreviewList title={"인기 급상승 투표"} type={"popularity"} />
        <PreviewList title={"최근에 생성된 투표"} type={"recent"} />
        <FullViewList />
      </div>
      <Footer />
    </>
  );
}
