import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { ThemeColorContext } from "../../context/Theme";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import LoginModal from "../../component/LoginModal";
import PolicyModal from "../../component/PolicyModal";
import RegisterModal from "../../component/RegisterModal";
import FullViewList from "../../component/FullViewList";

export default function Recent() {
  const [modalState, setModalState] = useState<string>("");
  const [listType, setListType] = useState<string>(undefined);

  const { themeColor, toggleThemeColor } = useContext(ThemeColorContext);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setListType(router.query.type[0]);
      if (
        localStorage.getItem("themeColor") &&
        themeColor !== localStorage.getItem("themeColor")
      )
        toggleThemeColor();
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

        {listType && (
          <FullViewList type={listType} themeId={`${themeColor}0`} />
        )}
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
