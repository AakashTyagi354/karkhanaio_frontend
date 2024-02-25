import React from "react";

export default function MaxWidthWrapper({ children, className }) {
  const wrapperClassName = `mx-auto w-full max-w-screen-2xl px-2.5 md:px-20 ${className}`;
  return <div className={wrapperClassName}>{children}</div>;
}
