/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { useRef } from "react";

interface ListProps {
  type: string;
}

interface testCaseType {
  key: number;
  title: string;
  date: string;
  status: number;
  creator: string;
  image: string;
}

const List = ({ type }: ListProps) => {
  const popularityVoteWrapper = useRef<HTMLDivElement>(null);
  const recentVoteWrapper = useRef<HTMLDivElement>(null);

  const scrollNext = (refObj: React.MutableRefObject<HTMLDivElement>) => {
    if (
      refObj.current.scrollLeft ===
      refObj.current.scrollWidth - refObj.current.clientWidth
    )
      refObj.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    else if (
      refObj.current.scrollLeft +
        (refObj.current.scrollWidth - refObj.current.clientWidth) / 4 >
      refObj.current.scrollWidth - refObj.current.clientWidth
    )
      refObj.current.scrollTo({
        top: 0,
        left: refObj.current.scrollWidth - refObj.current.clientWidth,
        behavior: "smooth",
      });
    else
      refObj.current.scrollTo({
        top: 0,
        left:
          refObj.current.scrollLeft +
          (refObj.current.scrollWidth - refObj.current.clientWidth) / 4,
        behavior: "smooth",
      });
  };

  const scrollPrev = (refObj: React.MutableRefObject<HTMLDivElement>) => {
    if (refObj.current.scrollLeft === 0)
      refObj.current.scrollTo({
        top: 0,
        left: refObj.current.scrollWidth - refObj.current.clientWidth,
        behavior: "smooth",
      });
    else if (
      refObj.current.scrollLeft +
        (refObj.current.scrollWidth - refObj.current.clientWidth) / 4 <
      0
    )
      refObj.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    else
      refObj.current.scrollTo({
        top: 0,
        left:
          refObj.current.scrollLeft -
          (refObj.current.scrollWidth - refObj.current.clientWidth) / 4,
        behavior: "smooth",
      });
  };

  const testCase: testCaseType[] = [
    {
      key: 1,
      title: "대충 멋진 투표 이름",
      date: "2022-06-17",
      status: 24,
      creator: "username",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      key: 2,
      title: "대충 너무 길어서 어떻게 해야 될지도 모르겠는 투표 이름",
      date: "2022-06-17",
      status: 37,
      creator: "longusername123456789",
      image:
        "https://img.freepik.com/free-vector/galactic-astral-background_125540-407.jpg",
    },
    {
      key: 3,
      title: "대충 멋진 투표 이름",
      date: "2022-06-17",
      status: 15,
      creator: "username",
      image:
        "https://img3.goodfon.com/wallpaper/nbig/c/8e/space-universe-stars-1933.jpg",
    },
    {
      key: 4,
      title: "대충 멋진 투표 이름",
      date: "2022-06-17",
      status: 37,
      creator: "username",
      image: "https://wallpaperaccess.com/full/6084248.jpg",
    },
    {
      key: 5,
      title: "대충 멋진 투표 이름",
      date: "2022-06-17",
      status: 15,
      creator: "username",
      image:
        "https://media.istockphoto.com/photos/astral-pathways-picture-id177696002?k=20&m=177696002&s=612x612&w=0&h=LVfYWKvc_1enMYyeBc-lPmNQyTceaWg3J3s6uquXc9M=",
    },
  ];

  switch (type) {
    case "popularity":
      return (
        <div css={backgroundStyle}>
          <div css={titleStyle}>
            <span>인기 급상승 투표 →</span>
          </div>
          <div css={contentsWrapper} ref={popularityVoteWrapper}>
            {testCase.map((v) => {
              return (
                <div key={v.key} css={contentBackground}>
                  <img css={contentImage} src={v.image} alt="image" />
                  <div css={contentInfo}>
                    <span>{v.title}</span>
                    <span>{v.creator}</span>
                  </div>
                  <div css={contentInfo}>
                    <span>{v.status}</span>
                    <span>{v.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div css={scrollWrapper}>
            <div
              css={scrollStyle}
              onClick={() => scrollPrev(popularityVoteWrapper)}
            >
              ◀
            </div>
            <div
              css={scrollStyle}
              onClick={() => scrollNext(popularityVoteWrapper)}
            >
              ▶
            </div>
          </div>
        </div>
      );
    case "recent":
      return (
        <div css={backgroundStyle}>
          <div css={titleStyle}>
            <span>최근에 생성된 투표 →</span>
          </div>
          <div css={contentsWrapper} ref={recentVoteWrapper}>
            {testCase.map((v) => {
              return (
                <div key={v.key} css={contentBackground}>
                  <img css={contentImage} src={v.image} alt="image" />
                  <div css={contentInfo}>
                    <span>{v.title}</span>
                    <span>{v.creator}</span>
                  </div>
                  <div css={contentInfo}>
                    <span>{v.status}</span>
                    <span>{v.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div css={scrollWrapper}>
            <div
              css={scrollStyle}
              onClick={() => scrollPrev(recentVoteWrapper)}
            >
              ◀
            </div>
            <div
              css={scrollStyle}
              onClick={() => scrollNext(recentVoteWrapper)}
            >
              ▶
            </div>
          </div>
        </div>
      );
  }
};

const backgroundStyle = css`
  background-color: #f6f6f6;

  margin: 0 auto;
  margin-top: 1.5rem;
  padding-left: 1%;
  padding-right: 1%;

  width: 100%;
  height: 15rem;
`;

const titleStyle = css`
  height: 2rem;

  display: flex;
  align-items: center;

  color: #000;
  font-weight: 100;

  border-bottom: 0.1px solid #aaa;

  span {
    cursor: pointer;

    :hover {
      filter: opacity(50%);
    }
  }
`;

const contentsWrapper = css`
  position: relative;

  margin: 0 auto;
  margin-top: 0.5rem;

  width: 92%;

  overflow: overlay;
  overflow-x: auto;
  white-space: nowrap;
  z-index: 1;

  ::-webkit-scrollbar {
    height: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1.5rem;
    box-shadow: inset 0 0 6rem #00ffab;
  }
`;

const contentBackground = css`
  background-color: #efefef;

  margin-right: 0.5rem;

  width: 20rem;
  height: 11.5rem;
  border-radius: 0.5rem;

  display: inline-block;

  transition: filter 0.25s ease;
  user-select: none;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }

  :last-of-type {
    margin-right: 0;
  }
`;

const contentImage = css`
  width: 100%;
  height: 70%;

  transition: transform 0.25s ease;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const contentInfo = css`
  padding-left: 2.5%;
  padding-right: 2.5%;

  width: 100%;
  height: 12.5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    text-overflow: ellipsis;
    white-space: nowrap;

    overflow: hidden;

    :first-of-type {
      width: 70%;

      font-size: 1rem;
      font-weight: 400;
      text-align: left;
    }
    :last-of-type {
      width: 30%;

      font-size: 0.75rem;
      font-weight: 100;
      text-align: right;
    }
  }
`;

const scrollWrapper = css`
  position: absolute;

  transform: translateY(-12.5rem);

  margin-top: 0.5rem;

  width: 98%;

  display: flex;
  justify-content: space-between;

  z-index: 0;
`;

const scrollStyle = css`
  background-color: #efefef;

  width: 3%;
  height: 12rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  transition: filter 0.25s ease;
  user-select: none;
  cursor: pointer;

  :hover {
    filter: brightness(95%);
  }
`;

export default List;
