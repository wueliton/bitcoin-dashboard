import { FC } from "react";

export const ETHUSDT: FC = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 26 26">
    <path fill="#3AB83A" d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z" opacity=".1"/>
    <mask id="a" width="26" height="26" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType:'luminance'}}>
      <path fill="#fff" d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"/>
    </mask>
    <g mask="url(#a)">
      <path fill="#3AB83A" fillRule="evenodd" d="m10 12.326 3.514-2.284L17 12.34 13.499 6 10 12.326Zm.134.66 3.384-2.23 3.34 2.213-3.338 2.233-3.386-2.216Zm-.134.638 3.514 2.31L17 13.625A2098.476 2098.476 0 0 1 13.514 20l-.718-1.303A3086.61 3086.61 0 0 1 10 13.624Z" clipRule="evenodd"/>
      <path fill="#0B8311" fillRule="evenodd" d="m13.5 6 .013 4.042L17 12.34 13.5 6Zm.016 4.756 3.363 2.213-3.36 2.233-.003-4.446Zm-.003 5.179L17 13.625C15.918 15.94 13.513 20 13.513 20v-4.065Z" clipRule="evenodd"/>
    </g>
  </svg>
}