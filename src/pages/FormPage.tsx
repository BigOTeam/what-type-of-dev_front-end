/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const FormPage: React.FC = () => {
  return (
    <div id="container" css={container}>
      <div css={body}>
        <div className="inner" css={inner}>
          <div className="question__wrap" data-number="0">
            <div className="question__progress" css={question__progress}>
              <div className="progress__top" css={progress__top}>
                <p css={top__count}>1/12</p>

                <div className="show-768 hide-default">
                  <img
                    src="./image/test/progress_icon02_m.png"
                    alt=""
                    className="img--style01"
                  />
                </div>
                <div className="hide-768">
                  <img
                    src="./image/test/progress_icon02.png"
                    alt=""
                    className="img--style01"
                  />
                </div>
              </div>
              <div className="progress-bar" css={progress__bar}>
                <div className="bar__fill"></div>
              </div>
            </div>

            <div>
              <img src="/images/spannerCat.png" alt="" />
              <p css={question__main}>당신에 대해서 알려주세요😀</p>
            </div>

            {/* <p css={question__main}>당신은 개발자인가요?</p>
            <div className="question__btns" css={question__button}>
              <button className="btn btn01">네!</button>
              <button className="btn btn02">아니오</button>
            </div> */}

            <p css={question__main}>어느 분야의 개발자인가요?</p>
            <div tabIndex={-1} role="group" css={radioGrup}>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="0"
                  id="__BVID__34"
                />
                <label className="custom-control-label" htmlFor="__BVID__34">
                  웹
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="1"
                  id="__BVID__35"
                />
                <label className="custom-control-label" htmlFor="__BVID__35">
                  금융
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="2"
                  id="__BVID__36"
                />
                <label className="custom-control-label" htmlFor="__BVID__36">
                  응용소프트웨어
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="3"
                  id="__BVID__37"
                />
                <label className="custom-control-label" htmlFor="__BVID__37">
                  시스템소프트웨어
                </label>
              </div>
            </div>
            <p css={question__main}>어느 분야의 개발자인가요?</p>
            <div tabIndex={-1} role="group" css={radioGrup}>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="0"
                  id="__BVID__34"
                />
                <label className="custom-control-label" htmlFor="__BVID__34">
                  웹
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="1"
                  id="__BVID__35"
                />
                <label className="custom-control-label" htmlFor="__BVID__35">
                  금융
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="2"
                  id="__BVID__36"
                />
                <label className="custom-control-label" htmlFor="__BVID__36">
                  응용소프트웨어
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="3"
                  id="__BVID__37"
                />
                <label className="custom-control-label" htmlFor="__BVID__37">
                  시스템소프트웨어
                </label>
              </div>
            </div>
            <p css={question__main}>어느 분야의 개발자인가요?</p>
            <div tabIndex={-1} role="group" css={radioGrup}>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="0"
                  id="__BVID__34"
                />
                <label className="custom-control-label" htmlFor="__BVID__34">
                  웹
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="1"
                  id="__BVID__35"
                />
                <label className="custom-control-label" htmlFor="__BVID__35">
                  금융
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="2"
                  id="__BVID__36"
                />
                <label className="custom-control-label" htmlFor="__BVID__36">
                  응용소프트웨어
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  autoComplete="off"
                  className="custom-control-input"
                  value="3"
                  id="__BVID__37"
                />
                <label className="custom-control-label" htmlFor="__BVID__37">
                  시스템소프트웨어
                </label>
              </div>
            </div>
          </div>
          <div className="theme__wrap"></div>
        </div>
      </div>
    </div>
  );
};

const container = css`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #fff1f7;
  transition: all ease 0.3s;
`;

const body = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  height: 100%;
`;

const inner = css`
  margin: 20px 24px;
  /* padding: 0 16px; */
`;

const question__progress = css`
  width: 380px;
  margin: 0 auto;
`;

const progress__top = css`
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 20px;
`;

const top__count = css`
  font-size: 16px;
  font-weight: 600;
`;

const progress__bar = css`
  border-radius: 6px;
  height: 12px;
  position: relative;
  margin: 0 auto;
  background-color: #593137;

  & .bar__fill {
    position: absolute;
    width: 8.33333%;
    height: 100%;
    background-color: #ff9fbf;
    border-radius: 6px;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
  }

  & .bar__fill::before {
    content: '';
    background-image: url(/images/ribbit.png);
    width: 60px;
    height: 60px;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: -25px;
    right: -25px;
  }
`;

const question__main = css`
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;

  padding: 10px;

  font-size: 20px;
  box-sizing: border-box;
`;

const question__button = css`
  width: 350px;
  position: relative;
  margin: 0 auto;

  padding: 20px 0px;

  & .btn {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    width: 100%;
    height: 100px;

    background-color: #fff;
    border: 2px solid #593137;
    border-radius: 15px;

    letter-spacing: -0.02em;
    line-height: 1.2em;
    font-size: 20px;
    font-weight: bold;

    cursor: pointer;
  }

  & :first-child {
    margin-bottom: 18px;
  }
`;

const radioGrup = css`
  display: flex;
  flex-direction: row;

  padding: 20px 0px;

  box-sizing: border-box;

  & div {
    & .custom-control-input {
      padding: 20px 0px;
    }
  }
`;

export default FormPage;
