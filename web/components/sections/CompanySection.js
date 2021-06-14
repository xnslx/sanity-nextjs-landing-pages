import React from 'react'
import PropTypes from 'prop-types'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

const CompanySection = (props) => {
  const {heading, image, label} = props
  return (
    <div>
      <h1>{heading}</h1>
      <h3>{label}</h3>
      <div>
        {image.map((ig) => (
          <img src={builder.image(ig.asset._ref).width(64)} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const companyData = await client.fetch(`*[ _type == "companySection"]{
        heading,
        label
        image{
            asset->{
                _ref
            }
        }
        
    }`)
  return {
    props: {
      companyData
    }
  }
}

CompanySection.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.array,
  label: PropTypes.string
}

export default CompanySection
