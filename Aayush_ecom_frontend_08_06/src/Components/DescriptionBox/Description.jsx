import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="description_navigator">
        <div className="description_nav_box">Description</div>
        <div className="description_nav_box fade">Review(122)</div>
      </div>
      <div className="description_desc">
        <p>
          A t-shirt is a piece of clothing that is typically made of cotton,
          polyester, or a blend of the two. It is designed to be worn over the
          torso, with short sleeves that cover the shoulders and upper arms.
          T-shirts can be plain or decorated with graphics, text, or images.
          They are available in a wide range of colors, styles, and fits, and
          are popular around the world as casual wear.{" "}
        </p>
        <p>
          The review of the T-shirt is positive, with many customers
          appreciating the comfortable and high-quality material. The designs
          and colors are also popular among users. However, some consumers have
          noted that the sizing may be a bit off, especially for larger
          individuals. Despite this, overall the T-shirts receive positive
          feedback.
        </p>
      </div>
    </div>
  );
};

export default Description;
