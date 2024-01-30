import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-light-gray">
      <div className="my-container">
        <div className="flex w-full items-center justify-between">
          <Link>
            <h1 className="flex items-center gap-1 font-open-sans">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="32"
                viewBox="0 0 28 32"
                fill="none"
              >
                <path
                  d="M7.10475 0.921875H0V7.25172H7.10475V0.921875Z"
                  fill="#00C65E"
                />
                <path
                  d="M0 9.75338H7.10074V25.955H10.1531C17.0021 25.955 20.4253 22.6273 20.4227 15.9718C20.4227 9.45232 17.2445 6.19377 10.8881 6.19615H9.60581V0.921875L10.5226 0.921875C15.99 0.921875 20.2379 2.23388 23.2662 4.8579C26.2944 7.48192 27.8072 11.1353 27.8045 15.8179C27.8045 20.8036 26.2369 24.6203 23.1015 27.2682C19.9661 29.9161 15.4278 31.2484 9.48639 31.2651H0V9.75338Z"
                  fill="#00C65E"
                />
              </svg>
              <span className="text-lg font-bold leading-tight text-bright-green">
                ily.uz
              </span>
            </h1>
          </Link>
          <div className="w-full max-w-xs rounded-full bg-white flex flex-col justify-start items-start">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M9.94886 9.97052L9.94892 9.97049L9.94886 9.97052Z"
                    fill="#363A45"
                    stroke="#363A45"
                    strokeWidth="2"
                  />
                </svg>
                <input type="text" className="outline-none" />
              </div>
            </div>
          </div>
          <button className="p-1 rounded transition-all hover:bg-light-green/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              className="rotate-180"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.000270024 1.3C0.000270024 0.58203 0.5823 0 1.30027 0H12.7003C13.4182 0 14.0003 0.58203 14.0003 1.3C14.0003 2.01797 13.4182 2.6 12.7003 2.6H1.30027C0.582299 2.6 0.000270024 2.01797 0.000270024 1.3ZM0 7.49727C0 6.7793 0.58203 6.19727 1.3 6.19727H12.7C13.418 6.19727 14 6.7793 14 7.49727C14 8.21524 13.418 8.79727 12.7 8.79727H1.3C0.582029 8.79727 0 8.21524 0 7.49727ZM1.3 12.3945C0.58203 12.3945 0 12.9766 0 13.6945C0 14.4125 0.58203 14.9945 1.3 14.9945H6.7C7.41797 14.9945 8 14.4125 8 13.6945C8 12.9766 7.41797 12.3945 6.7 12.3945H1.3Z"
                fill="#363A45"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
