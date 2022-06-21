/* eslint-disable @next/next/no-img-element */
import Footer from "../../src/component/Footer";
import Header from "../../src/component/Header";
import { css } from "@emotion/react";
import LoginModal from "../../src/component/LoginModal";
import { useEffect, useState } from "react";
import PolicyModal from "../../src/component/PolicyModal";
import RegisterModal from "../../src/component/RegisterModal";
import { NextRouter, useRouter } from "next/router";
import VoteView from "../../src/component/VoteView";
import Vote from "../../src/component/Vote";

const wrapper = css`
  height: auto;
  min-height: calc(100vh - 6rem);
`;

export default function Home() {
  const [modalState, setModalState] = useState<string>("");
  const [voteId, setVoteId] = useState<number>(undefined);

  const router: NextRouter = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setVoteId(parseInt(router.query.id[0]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

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

        {voteId && (
          <>
            <VoteView voteId={voteId - 1} />
            <Vote />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
