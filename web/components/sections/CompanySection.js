import React from 'react'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
console.log('builder', builder)



const CompanySection = (props) => {
    console.log('companysection', props)
    const {heading, image, label} = props
    return (
        <div>
            <h1 className="text-center">{heading}</h1>
            <h3 className="text-center">{label}</h3>
            <div className="flex flex-row">
                {image.map(ig => (
                    <img src={builder.image(ig.asset._ref).width(48)}/>
                ))}
            </div>
        </div>
    )
};

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
    console.log('companyData', companyData)
    return {
        props: {
            companyData
        }
    }
}


export default CompanySection
