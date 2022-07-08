/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { css } from "@emotion/react";
import { ThemeColorContext } from "../../context/Theme";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import LoginModal from "../../component/LoginModal";
import PolicyModal from "../../component/PolicyModal";
import RegisterModal from "../../component/RegisterModal";
import VoteView from "../../component/VoteView";
import Vote from "../../component/Vote";

export default function Home() {
  const [modalState, setModalState] = useState<string>("");
  const [voteId, setVoteId] = useState<number>(undefined);
  const { themeColor, toggleThemeColor } = useContext(ThemeColorContext);

  const router: NextRouter = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setVoteId(parseInt(router.query.id[0]));
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

        {voteId && (
          <>
            <VoteView voteId={voteId - 1} themeId={`${themeColor}0`} />
            <Vote themeId={`${themeColor}0`} />
          </>
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
