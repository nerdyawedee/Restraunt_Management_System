import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M14.933 12.8a6.4 6.4 0 1 0 0-12.8 6.4 6.4 0 0 0 0 12.8ZM0 32a14.933 14.933 0 1 1 29.867 0H0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
