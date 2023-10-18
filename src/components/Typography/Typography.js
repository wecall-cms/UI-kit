import React from "react";
import PropTypes from "prop-types";
import "./Typography.scss";

const Typography = ({ type, order, className, children }) => {
  const HeadingComponent = `h${order}`;
  const classNames = `cms__${type}__h${order} ${className || ""}`;

  if (type === "body" || type === "lead") {
    const Tag = type === "body" ? "p" : "p";
    return (
      <Tag className={`cms__${type}__p cms__typo ${className || ""}`}>
        {children}
      </Tag>
    );
  }

  if (type === "medium" || type === "semiBold") {
    return (
      <HeadingComponent className={`cms__typo ${classNames}`}>
        {children}
      </HeadingComponent>
    );
  }

  return null;
};

Typography.propTypes = {
  type: PropTypes.oneOf(["medium", "semiBold", "body", "lead"]).isRequired,
  order: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
