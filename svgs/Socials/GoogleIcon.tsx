import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgComponent() {
  const svgMarkup = `
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_5418)">
<path d="M19.3541 7.53113H18.75V7.5H12V10.5H16.2386C15.6203 12.2464 13.9586 13.5 12 13.5C9.51487 13.5 7.5 11.4851 7.5 9C7.5 6.51487 9.51487 4.5 12 4.5C13.1471 4.5 14.1908 4.93275 14.9854 5.63962L17.1068 3.51825C15.7673 2.26987 13.9755 1.5 12 1.5C7.85812 1.5 4.5 4.85812 4.5 9C4.5 13.1419 7.85812 16.5 12 16.5C16.1419 16.5 19.5 13.1419 19.5 9C19.5 8.49713 19.4482 8.00625 19.3541 7.53113Z" fill="#FFC107"/>
<path d="M5.36475 5.50913L7.82887 7.31625C8.49562 5.6655 10.1104 4.5 12 4.5C13.1471 4.5 14.1907 4.93275 14.9854 5.63963L17.1067 3.51825C15.7672 2.26988 13.9755 1.5 12 1.5C9.11925 1.5 6.621 3.12638 5.36475 5.50913Z" fill="#FF3D00"/>
<path d="M12 16.5C13.9372 16.5 15.6975 15.7586 17.0284 14.553L14.7071 12.5888C13.9541 13.1591 13.0181 13.5 12 13.5C10.0492 13.5 8.39287 12.2561 7.76887 10.5203L5.32312 12.4046C6.56437 14.8335 9.08512 16.5 12 16.5Z" fill="#4CAF50"/>
<path d="M19.3541 7.53113H18.75V7.5H12V10.5H16.2386C15.9416 11.3389 15.402 12.0622 14.706 12.5891C14.7064 12.5887 14.7067 12.5887 14.7071 12.5884L17.0284 14.5526C16.8641 14.7019 19.5 12.75 19.5 9C19.5 8.49713 19.4482 8.00625 19.3541 7.53113Z" fill="#1976D2"/>
</g>
<defs>
<filter id="filter0_d_1_5418" x="-1" y="0" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5418"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5418" result="shape"/>
</filter>
</defs>
</svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="24px" height="25px" />;

  return <SvgImage />;
}
