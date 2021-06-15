import React from "react";
import PropTypes from "prop-types";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import Cta from "../Cta";
import SimpleBlockContent from "../SimpleBlockContent";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "../serializers";

const builder = imageUrlBuilder(client);
const { projectId, dataset } = client.config();

const PricingSection = (props) => {
  const { heading, label, subheading, pricingchoose } = props;

  return (
    <div>
      <div>
        <h1>{heading}</h1>
        <h3>{subheading}</h3>
        <p>{label}</p>
      </div>
      <div>
        {pricingchoose.map((pc) => (
          <>
            <img src={builder.image(pc.icon.asset._ref).width(48)} />
            <p>{pc.chooselabel}</p>
            <h2>{pc.price}</h2>
            <hr></hr>
            <BlockContent
              blocks={pc.text}
              serializers={serializers}
              projectId={projectId}
              dataset={dataset}
            />
            <div>
              {pc.ctas.map((cta) => (
                <Cta {...cta} key={cta._key} />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

PricingSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  subheading: PropTypes.string,
  pricingchoose: PropTypes.array,
};

export default PricingSection;
