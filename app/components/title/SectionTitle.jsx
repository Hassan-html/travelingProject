import React from "react";

const SectionTitle = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="title text-center">
      <h1 className="text-[40px] text-secondary ">{title}</h1>
      <h3 className="sub text-special">{subtitle}</h3>
    </div>
  );
};

export default SectionTitle;
