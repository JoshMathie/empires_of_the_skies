import { Tooltip } from "@mui/material";
import React from "react";

const OutpostIcon = (props: OutpostIconProps) => {
  return (
    <Tooltip
      title={`Regiments: ${props.regiments}
Levies: ${props.levies}`}
    >
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        style={{ width: "50px", height: "50px", border: "1px solid black" }}
      >
        <mask
          id="mask0_128_154"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="96"
          height="96"
        >
          <path d="M0 0H96V96H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_128_154)">
          <rect
            x="-1.32764"
            y="-0.357178"
            width="97.3333"
            height="97.3333"
            fill="url(#pattern0)"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.9144 70.7247C66.9144 81.6382 58.1345 90.4852 47.3039 90.4852C36.4736 90.4852 27.6938 81.6382 27.6938 70.7247C27.6938 59.8118 36.4736 50.9646 47.3039 50.9646C58.1345 50.9646 66.9144 59.8118 66.9144 70.7247Z"
          fill={props.colour}
        />
        <path
          d="M66.9144 70.7247C66.9144 81.6382 58.1345 90.4852 47.3039 90.4852C36.4736 90.4852 27.6938 81.6382 27.6938 70.7247C27.6938 59.8118 36.4736 50.9646 47.3039 50.9646C58.1345 50.9646 66.9144 59.8118 66.9144 70.7247Z"
          stroke="#1A1A18"
          strokeWidth="2.6664"
          strokeMiterlimit="22.9256"
        />
        <path
          d="M6.49365 32.1973C6.49365 30.8772 6.73324 29.6601 7.21244 28.5452C7.69138 27.4305 8.35616 26.4725 9.20203 25.6704C10.043 24.8688 11.0256 24.2479 12.1451 23.8079C13.2596 23.368 14.4382 23.143 15.6748 23.1284C17.3763 23.1284 18.9555 23.5584 20.417 24.4191C21.879 25.2845 23.0378 26.4429 23.893 27.9049C24.7487 29.3664 25.1788 30.9411 25.1788 32.6324C25.1788 34.5145 24.7586 36.1473 23.9224 37.5408C23.0815 38.9343 21.9571 39.9949 20.5395 40.7236C19.1218 41.4519 17.557 41.8136 15.8559 41.8136C14.0958 41.8136 12.5069 41.3835 11.0842 40.5183C9.66165 39.6528 8.54698 38.4841 7.73551 37.0079C6.92858 35.5316 6.51325 33.928 6.49365 32.1973ZM8.69364 31.9577C8.69364 33.4 8.99191 34.7836 9.58337 36.1133C10.1798 37.438 11.0207 38.5137 12.1062 39.3398C13.1912 40.1661 14.4234 40.5916 15.7972 40.6109C15.846 40.5868 15.8804 40.572 15.9095 40.5621C15.939 40.5572 15.9587 40.5524 15.9681 40.5524C17.3273 40.5135 18.5299 40.1956 19.581 39.5943C20.6275 38.9979 21.439 38.1077 22.0206 36.9345C22.6023 35.7615 22.8911 34.324 22.8911 32.6324C22.8911 31.6108 22.7199 30.6133 22.3726 29.6503C22.0255 28.6869 21.5368 27.8217 20.906 27.064C20.2703 26.3012 19.5223 25.6951 18.6523 25.2404C17.7819 24.7905 16.8533 24.5657 15.851 24.5657C14.4529 24.5657 13.2207 24.8885 12.1451 25.5286C11.0695 26.1693 10.2383 27.0492 9.64685 28.1687C9.05538 29.2837 8.73751 30.5499 8.69364 31.9577Z"
          fill="#1A1A18"
        />
        <path
          d="M30.6346 26.9125L31.0455 27.3278C30.2045 30.491 29.7843 34.3434 29.7843 38.8853C30.7129 37.8686 31.6272 36.7195 32.5168 35.4338C33.4069 34.1529 34.179 32.8233 34.8393 31.4445C35.4944 30.0609 35.9637 28.7214 36.2325 27.411H38.1441L37.3815 39.6726L39.6986 39.1786V40.3714C37.7825 40.3714 36.1347 40.8359 34.766 41.755C35.4407 38.157 35.8024 34.891 35.8561 31.9578C33.7489 35.5755 31.5296 38.7631 29.1973 41.5203H27.6133L28.3469 28.8483L26.1763 29.3714V28.2913C27.0415 28.2421 27.7895 28.1102 28.43 27.905C29.0653 27.6998 29.799 27.3721 30.6346 26.9125Z"
          fill="#1A1A18"
        />
        <path
          d="M42.774 28.5846L40.8672 28.6726V27.411L42.896 27.4699L43.0673 24.6243L45.3014 24.0963L44.9495 27.4699L48.0639 27.411L48.0048 28.6136L44.6561 28.5846C44.6025 28.7066 44.5096 31.4932 44.392 36.9395C44.392 37.8002 44.4165 38.4551 44.4604 38.9048C44.5047 39.3498 44.6267 39.7163 44.8275 39.9903C45.0327 40.269 45.3505 40.4155 45.7953 40.4352C45.8244 40.4058 45.8491 40.386 45.8736 40.3812C45.8928 40.3763 45.9076 40.3714 45.9175 40.3714C46.592 40.3079 47.1447 39.9855 47.5699 39.4083C47.9955 38.8267 48.2056 38.0443 48.2056 37.0616H49.0317C49.0317 37.9516 48.8605 38.7386 48.5283 39.428C48.1957 40.1174 47.7213 40.6454 47.1152 41.0218C46.5089 41.3934 45.8052 41.579 45.008 41.579C44.3679 41.579 43.8055 41.4813 43.3216 41.2807C42.8375 41.0804 42.5 40.919 42.3045 40.7871C42.2899 40.4692 42.2705 39.995 42.2509 39.3743C42.2312 38.7534 42.2116 38.2888 42.1923 37.9709C42.2361 35.9519 42.4267 32.8232 42.774 28.5846Z"
          fill="#1A1A18"
        />
        <path
          d="M52.3364 28.9658L49.9409 29.5524V28.2371C51.6131 28.115 53.2162 27.7533 54.7417 27.147C54.6782 27.6406 54.5754 28.3742 54.4337 29.357C54.2969 30.3347 54.1941 31.1753 54.1208 31.8745C54.0474 32.5737 54.0036 33.2873 53.9838 34.016C54.0621 34.7102 54.1014 35.2285 54.1014 35.5656C54.1014 35.38 54.2871 34.8274 54.6635 33.8985C55.0351 32.9747 55.5241 31.9871 56.1254 30.941C56.7218 29.8943 57.421 28.985 58.2276 28.2178C59.0292 27.4502 59.8554 27.0541 60.7013 27.0295C61.2928 27.0295 61.6692 27.2203 61.8306 27.6066C61.9969 27.9929 62.08 28.5209 62.08 29.2005V32.5151C62.08 33.7275 61.9576 34.8713 61.7085 35.9421C61.459 37.0177 61.0826 37.9758 60.5693 38.8314C60.061 39.6822 59.4204 40.3713 58.6429 40.8947C57.8708 41.4178 56.9709 41.7209 55.9444 41.8136L55.8321 41.1098C56.585 40.9873 57.1716 40.7821 57.5918 40.4937C58.3058 39.9461 58.858 38.9486 59.2541 37.4969C59.6501 36.0497 59.8505 34.5046 59.8505 32.867V29.6109C59.8505 28.9949 59.655 28.6626 59.2638 28.6136C58.9313 28.6136 58.4132 29.0781 57.7094 30.007C57.0053 30.9361 56.3208 32.119 55.6461 33.5564C54.9715 34.9937 54.4779 36.4458 54.1552 37.9074C53.9987 38.7238 53.8176 39.6773 53.6074 40.7576C53.3973 41.843 53.2163 42.8745 53.0599 43.8522C52.9083 44.8299 52.7764 45.8716 52.6592 46.9764L52.4585 49.3817L50.904 49.9977C51.119 48.3551 51.3001 46.6536 51.4419 44.8934C51.5884 43.1337 51.6913 41.6475 51.7597 40.4302C51.8232 39.2129 51.9161 37.3794 52.0284 34.9351C52.1456 32.4906 52.2484 30.5006 52.3364 28.9658Z"
          fill="#1A1A18"
        />
        <path
          d="M63.4297 36.9982C63.4542 35.1794 63.6447 33.5614 64.0114 32.1389C64.373 30.7162 65.0625 29.5378 66.0746 28.6042C67.0864 27.6703 68.5045 27.1861 70.3277 27.1471C71.0515 27.1471 71.6479 27.4405 72.1075 28.0319C72.5719 28.6186 72.9091 29.3617 73.1143 30.2566C73.3199 31.1463 73.4371 32.075 73.4617 33.0383C73.4617 34.6465 73.261 36.0986 72.8653 37.4041C72.4642 38.7096 71.8043 39.7606 70.8851 40.5573C69.9659 41.3541 68.7634 41.755 67.2773 41.755H66.7198C65.9767 41.667 65.3705 41.4913 64.901 41.2173C64.4321 40.9485 64.0699 40.4791 63.811 39.8191C63.5567 39.1593 63.4297 38.2155 63.4297 36.9982ZM65.6884 35.6783C65.6884 36.6365 65.7371 37.4578 65.835 38.1521C65.9329 38.8414 66.1675 39.4427 66.5391 39.9511C66.9106 40.4545 67.4726 40.7334 68.2157 40.7872C69.3647 40.7872 70.1859 40.1514 70.675 38.8853C71.1637 37.6192 71.4082 36.0888 71.4082 34.3045V33.8888C71.4082 32.3781 71.1736 31.0485 70.709 29.8994C70.2446 28.7509 69.4822 28.1737 68.4163 28.1737C67.761 28.2081 67.233 28.6578 66.8324 29.528C66.4314 30.3984 66.148 31.4004 65.9817 32.5444C65.8153 33.6836 65.7174 34.7297 65.6884 35.6783Z"
          fill="#1A1A18"
        />
        <path
          d="M75.9007 38.0298C75.9007 38.5968 76.0179 39.0904 76.2476 39.5258C76.4823 39.956 76.8002 40.2885 77.2013 40.5182C77.6019 40.7477 78.0372 40.8653 78.5063 40.875C79.269 40.875 79.9195 40.6551 80.4573 40.2102C80.9947 39.7699 81.2639 39.1591 81.2639 38.3817C81.2639 37.7657 81.1173 37.2622 80.8289 36.8612C80.5401 36.4602 80.1002 36.0497 79.5038 35.6242L77.9493 34.4805C76.815 33.5514 76.2235 32.4369 76.1645 31.1364C76.1645 29.9972 76.4823 29.0732 77.123 28.3497C77.7633 27.6309 78.702 27.2302 79.9436 27.147C80.3008 27.147 80.7211 27.2007 81.2052 27.3085C81.6939 27.4158 81.9287 27.4698 81.909 27.4698V30.5739H81.0291V29.787C81.0291 29.3029 80.9071 28.8728 80.6723 28.5013C80.4377 28.1249 80.1051 27.9389 79.6799 27.9389C79.2154 27.9389 78.8094 28.1638 78.4624 28.6185C78.1204 29.0682 77.9493 29.5229 77.9493 29.9874C78.0127 31.1462 78.619 32.1485 79.7679 32.9793L81.0926 33.8886C82.3444 34.7492 82.9994 35.8441 83.0531 37.179C83.0531 37.7657 82.8725 38.4109 82.5103 39.1149C82.1535 39.819 81.6255 40.4154 80.9362 40.9042C80.2469 41.3933 79.4354 41.6378 78.5063 41.6378H78.4478C77.5482 41.6378 76.7757 41.5153 76.1257 41.2712C75.4805 41.0316 75.0307 40.8259 74.7812 40.6649L75.1331 36.2402L76.0424 36.3578C76.0276 36.377 76.0085 36.5729 75.979 36.9345C75.9543 37.2962 75.9302 37.6629 75.9007 38.0298Z"
          fill="#1A1A18"
        />
        <path
          d="M86.358 28.5846L84.4512 28.6726V27.411L86.48 27.4699L86.6513 24.6243L88.8853 24.0963L88.5334 27.4699L91.6478 27.411L91.5887 28.6136L88.2401 28.5846C88.1865 28.7066 88.0936 31.4932 87.976 36.9395C87.976 37.8002 88.0005 38.4551 88.0444 38.9048C88.0886 39.3498 88.2106 39.7163 88.4114 39.9903C88.6166 40.269 88.9345 40.4155 89.3793 40.4352C89.4084 40.4058 89.433 40.386 89.4576 40.3812C89.4768 40.3763 89.4916 40.3714 89.5014 40.3714C90.176 40.3079 90.7287 39.9855 91.1539 39.4083C91.5795 38.8267 91.7896 38.0443 91.7896 37.0616H92.6157C92.6157 37.9516 92.4445 38.7386 92.1122 39.428C91.7797 40.1174 91.3053 40.6454 90.6992 41.0218C90.0929 41.3934 89.3892 41.579 88.592 41.579C87.9518 41.579 87.3894 41.4813 86.9056 41.2807C86.4214 41.0804 86.084 40.919 85.8885 40.7871C85.8738 40.4692 85.8545 39.995 85.8349 39.3743C85.8151 38.7534 85.7956 38.2888 85.7762 37.9709C85.8201 35.9519 86.0106 32.8232 86.358 28.5846Z"
          fill="#1A1A18"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_128_154" transform="scale(0.0136986)" />
          </pattern>
          <image
            id="image0_128_154"
            width="73"
            height="73"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </Tooltip>
  );
};

interface OutpostIconProps {
  colour: string;
  regiments: number;
  levies: number;
}

export default OutpostIcon;
