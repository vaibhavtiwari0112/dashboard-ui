import React from "react";

const BottomCard = ({ id, heading, location, date, text, svg }) => {
  return (
    <div className="bg-white rounded-md ml-10 mr-5 shadow-2xl w-6/12 mx-auto mb-4 p-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {id == "1" ? (
            <svg
              width="36"
              className="mr-2 mt-1"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2_63)">
                <rect
                  x="2"
                  y="2"
                  width="32"
                  height="32"
                  rx="4"
                  fill="#E0EAFF"
                />
                <path
                  d="M17.9989 17.9146C17.0451 17.9146 16.2652 17.6117 15.6593 17.0058C15.0534 16.3999 14.7504 15.62 14.7504 14.6661C14.7504 13.7122 15.0534 12.932 15.6593 12.3254C16.2652 11.7188 17.0451 11.4155 17.9989 11.4155C18.9528 11.4155 19.7339 11.7188 20.3421 12.3254C20.9504 12.932 21.2545 13.7122 21.2545 14.6661C21.2545 15.62 20.9504 16.3999 20.3421 17.0058C19.7339 17.6117 18.9528 17.9146 17.9989 17.9146ZM11.2087 24.8562V22.7644C11.2087 22.215 11.347 21.7425 11.6236 21.3469C11.9002 20.9512 12.2574 20.6508 12.6952 20.4454C13.6324 20.0254 14.5329 19.7105 15.3969 19.5005C16.2609 19.2905 17.1282 19.1855 17.9986 19.1855C18.8754 19.1855 19.7421 19.2939 20.5985 19.5109C21.4549 19.7278 22.3495 20.0407 23.2823 20.4495C23.739 20.6522 24.1054 20.9507 24.3817 21.3452C24.658 21.7396 24.7962 22.2123 24.7962 22.7631V24.8562H11.2087ZM12.6281 23.4368H23.3718V22.7833C23.3718 22.5632 23.3058 22.3534 23.1739 22.1537C23.0419 21.9541 22.8787 21.8062 22.6843 21.7099C21.8087 21.2893 21.007 21.0008 20.2792 20.8444C19.5514 20.688 18.7908 20.6098 17.9975 20.6098C17.2108 20.6098 16.4449 20.688 15.6999 20.8444C14.9549 21.0008 14.1539 21.2891 13.2969 21.7092C13.1011 21.8054 12.9406 21.9535 12.8156 22.1532C12.6906 22.353 12.6281 22.563 12.6281 22.7833V23.4368ZM17.9989 16.4953C18.528 16.4953 18.9654 16.3226 19.3113 15.9772C19.6572 15.6319 19.8301 15.1945 19.8301 14.6653C19.8301 14.1346 19.6575 13.6969 19.3123 13.3521C18.9671 13.0073 18.53 12.8349 18.001 12.8349C17.4719 12.8349 17.0344 13.0074 16.6886 13.3523C16.3427 13.6973 16.1698 14.1341 16.1698 14.6628C16.1698 15.1929 16.3424 15.6308 16.6876 15.9766C17.0328 16.3224 17.4699 16.4953 17.9989 16.4953Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2_63"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.815686 0 0 0 0 0.254902 0 0 0 0 0.254902 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_63"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_63"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          ) : (
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2_78)">
                <rect
                  x="2"
                  y="2"
                  width="32"
                  height="32"
                  rx="4"
                  fill="#E0EAFF"
                />
                <path
                  d="M18.0007 26.3346C16.8479 26.3346 15.8652 25.9284 15.0527 25.1159C14.2402 24.3034 13.834 23.3207 13.834 22.168C13.834 21.5013 13.9798 20.8798 14.2715 20.3034C14.5632 19.727 14.9729 19.2374 15.5007 18.8346V12.168C15.5007 11.4735 15.7437 10.8832 16.2298 10.3971C16.7159 9.91102 17.3062 9.66797 18.0007 9.66797C18.6951 9.66797 19.2854 9.91102 19.7715 10.3971C20.2576 10.8832 20.5007 11.4735 20.5007 12.168V18.8346C21.0284 19.2374 21.4382 19.727 21.7298 20.3034C22.0215 20.8798 22.1673 21.5013 22.1673 22.168C22.1673 23.3207 21.7611 24.3034 20.9486 25.1159C20.1361 25.9284 19.1534 26.3346 18.0007 26.3346ZM17.1673 17.168H18.834V16.3346H18.0007V15.5013H18.834V13.8346H18.0007V13.0013H18.834V12.168C18.834 11.9319 18.7541 11.7339 18.5944 11.5742C18.4347 11.4145 18.2368 11.3346 18.0007 11.3346C17.7645 11.3346 17.5666 11.4145 17.4069 11.5742C17.2472 11.7339 17.1673 11.9319 17.1673 12.168V17.168Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2_78"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.815686 0 0 0 0 0.254902 0 0 0 0 0.254902 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_78"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_78"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          )}
          <h3 className="text-lg">
            {heading}
            <p className="text-sm text-gray-500 mb-4 mt-0">{location}</p>
          </h3>
        </div>

        <p className="text-sm text-gray-500">{date}</p>
      </div>

      <p className="text-sm mb-10">{text}</p>
      <div className="flex justify-end absolute bottom-4 right-4">
        <p className="text-gray-700 underline cursor-pointer mr-4">Ignore</p>
        <button
          className="h-8 px-2 text-white rounded-sm"
          style={{ backgroundColor: "#1A3875" }}
        >
          Resolve
        </button>
      </div>
    </div>
  );
};

export default BottomCard;
