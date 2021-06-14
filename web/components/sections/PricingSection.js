import React from 'react'
import PropTypes from 'prop-types'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

const PricingSection = (props) => {
  const {chooselabel, ctas, heading, icon, label, price, subheading, text} = props
  return (
    <div>
      <div>
        <h1>{heading}</h1>
        <h3>{subheading}</h3>
        <p>{label}</p>
      </div>
      <div>
        <img src={builder.image(icon.asset._ref).width(48)} />
        <h5>{chooselabel}</h5>
        <h2>{price}</h2>
        <p>{text}</p>
        <div>
          {ctas.map((cta) => (
            <Cta {...cta} key={cta._key} />
          ))}
        </div>
      </div>
    </div>
  )
}

PricingSection.propTypes = {
  chooselabel: PropTypes.string,
  heading: PropTypes.string,
  icon: PropTypes.object,
  label: PropTypes.string,
  price: PropTypes.string,
  subheading: PropTypes.string,
  text: PropTypes.string,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object)
}

export default PricingSection
