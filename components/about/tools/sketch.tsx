
import React from "react";
export default function SketchIcon<T extends { className: string}>(props: T): JSX.Element {
	return (
		<svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 356">
  <g fill="none">
    <path fill="#FDB300" d="M85.790323 11.7151549 196.602823 0l110.8125 11.7151549 85.790322 115.1659291-196.602822 228.941925L0 126.881084z"/>
    <path fill="#EA6C00" d="m79.634 126.881084 116.969 228.942L0 126.881084z"/>
    <path fill="#EA6C00" d="m313.571468 126.881084-116.969 228.942 196.603-228.942z"/>
    <path fill="#FDAD00" d="M79.634 126.881084h233.938l-116.969 228.942z"/>
    <path fill="#FDD231" d="M196.603 0 85.79 11.715l-6.156 115.166z"/>
    <path fill="#FDD231" d="m196.602396 0 110.813 11.715 6.156 115.166z"/>
    <path fill="#FDAD00" d="m393.205968 126.881-85.791-115.166 6.157 115.166zM0 126.881 85.79 11.715l-6.156 115.166z"/>
    <path fill="#FEEEB7" d="M196.603 0 79.634 126.881h233.938z"/>
  </g>
</svg>)}