import React from "react";
import PropTypes from "prop-types";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const ProgressSection = (props) => {
  const { heading, label, steps } = props;

  return (
    <div>
      <h1>{heading}</h1>
      <h3>{label}</h3>
      <div>
        {steps.map((step) => (
          <ul>
            <li>
              <img src={builder.image(step.image.asset._ref).width(48)} />
            </li>
            <li>{step.subheading}</li>
            <li>{step.sublabel}</li>
          </ul>
        ))}
      </div>
      {/* <div>
        <img src={builder.image(image.asset._ref).width(48)} />
        <h5>{subheading}</h5>
        <p>{sublabel}</p>
      </div> */}
    </div>
  );
};

ProgressSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  steps: PropTypes.array,
};

export default ProgressSection;
