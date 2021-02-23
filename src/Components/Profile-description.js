import React from "react";
import ProrTypes from "prop-types";
import defaultImg from "./profileDefaultImg.png";

const Description = ({ avatar, location, name, tag }) => (
  <div className="description">
    <img src={avatar} alt="Аватар пользователя" className="avatar" />
    <p className="name">{name}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>
);
Description.defaultProps = {
  avatar: defaultImg,
};
Description.propTypes = {
  avatar: ProrTypes.string,
  location: ProrTypes.string.isRequired,
  name: ProrTypes.string.isRequired,
  tag: ProrTypes.string.isRequired,
};
export default Description;
