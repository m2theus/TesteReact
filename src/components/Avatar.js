import React from "react";
import { string } from "prop-types";

const Avatar = ({ src}) => {
  return (
    <div>
      <img className="avatar" src={src} alt="Logo" />
    </div>
  );
};

Avatar.propTypes = {
  src: string
};

export default Avatar;
