import React from "react";
import Loading from "./Loading";

export default function Banner({ children, title, subtitle, loading }) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
