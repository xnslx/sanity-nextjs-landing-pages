import React from 'react'
import PropTypes from 'prop-types'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

const ProgressSection = (props) => {
  const {heading, label, image, subheading, sublabel} = props

  return (
    <div>
      <h1>{heading}</h1>
      <h3>{label}</h3>
      <div>
        <img src={builder.image(image.asset._ref).width(48)} />
        <h5>{subheading}</h5>
        <p>{sublabel}</p>
      </div>
    </div>
  )
}

ProgressSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  subheading: PropTypes.string,
  image: PropTypes.object,
  sublabel: PropTypes.string
}

export default ProgressSection
