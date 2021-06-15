import React from "react";
import PropTypes from "prop-types";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const ServiceSection = (props) => {
  const { heading, label, services } = props;

  return (
    <div>
      <h1>{heading}</h1>
      <p>{label}</p>
      <div>
        <ul>
          {services.map((service) => (
            <>
              <li>
                <img src={builder.image(service.image.asset._ref).width(320)} />
              </li>
              <h3>{service.subheading}</h3>
              <p>{service.sublabel}</p>
              <div>
                {service.everyservice.map((i) => (
                  <>
                    <h4>{i.everylabel}</h4>
                    <p>{i.text}</p>
                  </>
                ))}
              </div>
            </>
          ))}
        </ul>
      </div>
      {/* <div>
        <img src={builder.image(imagegalleryone.asset._ref).width(320)} />
        <h4>{subheadingone}</h4>
        <p>{sublabelone}</p>
      </div>
      <div>
        <img src={builder.image(imagegallerytwo.asset._ref).width(320)} />
        <h4>{subheadingtwo}</h4>
        <p>{sublabeltwo}</p>
      </div> */}
    </div>
  );
};

ServiceSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  services: PropTypes.array,
};

// export const getServerSideProps = async () => {
//     const companyData = await client.fetch(`*[ _type == "serviceSection"]`)
//     console.log('serviceData', serviceData)
//     return {
//         props: {
//             serviceData
//         }
//     }
// }

export default ServiceSection;
