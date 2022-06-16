import { css } from "@emotion/react";
import { search, user } from "../../../public/images";

const header = css`
  background-color: #00ffab;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.15rem;

  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  user-select: none;

  div {
    display: flex;

    :first-of-type {
      width: 15%;
      justify-content: left;
    }
    :last-of-type {
      width: 15%;
      justify-content: right;
    }
  }

  span {
    margin-right: 0.5rem;

    color: white;
    font-size: 1rem;
    font-weight: 100;

    transition: filter 0.15s ease;
    cursor: pointer;

    :first-of-type {
      color: white;
      font-size: 1.5rem;
    }

    :hover {
      filter: brightness(90%);
    }

    strong {
      color: #e3fcbf;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  form {
    width: 16.25rem;

    border-bottom: 0.1px solid #fff;

    display: flex;
    align-items: center;
  }

  input {
    all: unset;

    padding-left: 1.25rem;
    padding-right: 0.25rem;

    width: 15rem;
    height: 1.75rem;

    color: #fff;
    font-weight: 100;
    text-align: center;

    ::placeholder {
      color: #fff;
    }
  }

  form img {
    position: absolute;
    margin-left: 0.25rem;

    width: 0.75rem;
    height: 0.75rem;

    transition: filter 0.15s ease;
    cursor: pointer;
    filter: invert(100%);

    :hover {
      filter: invert(100%) brightness(90%);
    }
  }

  div img {
    padding: 0.1rem;
    margin-top: 0.15rem;

    width: 1.5rem;
    height: 1.5rem;

    border: 0.1px solid #000;
    border-radius: 50%;
    transition: filter 0.15s ease;
    cursor: pointer;
    filter: invert(100%);

    :hover {
      filter: invert(100%) brightness(90%);
    }
  }
`;

const Header = () => {
  return (
    <nav css={header}>
      <div>
        <span>
          <strong>V</strong>o<strong>T</strong>ic
        </span>
      </div>
      <form>
        <img src={`${search.src}`} />
        <input type="text" placeholder="Search Vote" />
      </form>
      <div>
        <img src={`${user.src}`} />
      </div>
    </nav>
  );
};

export default Header;
