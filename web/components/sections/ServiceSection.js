import React from 'react'
import PropTypes from 'prop-types'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

const ServiceSection = (props) => {
  const {
    heading,
    label,
    imagegalleryone,
    imagegallerytwo,
    subheadingone,
    subheadingtwo,
    sublabelone,
    sublabeltwo
  } = props

  return (
    <div>
      <h1>{heading}</h1>
      <h3>{label}</h3>
      <div>
        <img src={builder.image(imagegalleryone.asset._ref).width(320)} />
        <h4>{subheadingone}</h4>
        <p>{sublabelone}</p>
      </div>
      <div>
        <img src={builder.image(imagegallerytwo.asset._ref).width(320)} />
        <h4>{subheadingtwo}</h4>
        <p>{sublabeltwo}</p>
      </div>
    </div>
  )
}

ServiceSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  imagegalleryone: PropTypes.object,
  imagegallerytwo: PropTypes.object,
  subheadingone: PropTypes.string,
  subheadingtwo: PropTypes.string,
  sublabelone: PropTypes.string,
  sublabeltwo: PropTypes.string
}

// export const getServerSideProps = async () => {
//     const companyData = await client.fetch(`*[ _type == "serviceSection"]`)
//     console.log('serviceData', serviceData)
//     return {
//         props: {
//             serviceData
//         }
//     }
// }

export default ServiceSection
