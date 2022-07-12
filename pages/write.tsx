import { useContext, useEffect, useRef, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { css } from "@emotion/react";
import { ThemeColorContext } from "../context/Theme";
import Header from "../component/Header";
import Footer from "../component/Footer";
import AdviseModal from "../component/AdviseModal";
import LoginModal from "../component/LoginModal";
import PolicyModal from "../component/PolicyModal";
import RegisterModal from "../component/RegisterModal";
import WriteVote from "../component/WriteVote";
import CreateOption from "../component/CreateOption";

export default function Write() {
  const titleRef = useRef<HTMLInputElement>(null);

  const [modalState, setModalState] = useState<string>("");

  const { themeColor, toggleThemeColor } = useContext(ThemeColorContext);

  const router: NextRouter = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (
        localStorage.getItem("themeColor") &&
        themeColor !== localStorage.getItem("themeColor")
      )
        toggleThemeColor();
      setModalState("advise");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <>
      <Header setModalState={setModalState} themeId={`${themeColor}0`} />
      <div css={wrapper}>
        {modalState === "login" && (
          <LoginModal
            setModalState={setModalState}
            themeId={`${themeColor}0`}
          />
        )}
        {modalState === "policy" && (
          <PolicyModal
            setModalState={setModalState}
            themeId={`${themeColor}0`}
          />
        )}
        {modalState === "register" && (
          <RegisterModal
            setModalState={setModalState}
            themeId={`${themeColor}0`}
          />
        )}
        {modalState === "advise" && (
          <AdviseModal
            setModalState={setModalState}
            themeId={`${themeColor}0`}
          />
        )}

        <WriteVote titleRef={titleRef} themeId={`${themeColor}0`} />
        <CreateOption titleRef={titleRef} themeId={`${themeColor}0`} />
      </div>
      <Footer themeId={`${themeColor}0`} />
    </>
  );
}

const wrapper = css`
  padding-top: 3rem;

  height: auto;
  min-height: calc(100vh - 6rem);
`;
