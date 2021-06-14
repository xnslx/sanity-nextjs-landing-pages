export default {
  type: 'object',
  name: 'serviceSection',
  title: 'Service We Provide',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'imagegalleryone',
      type: 'image',
      title: 'Image Gallery One'
    },
    {
      name: 'subheadingone',
      type: 'string',
      title: 'Subheading One'
    },
    {
      name: 'sublabelone',
      type: 'string',
      title: 'Sublabel One'
    },
    {
      name: 'imagegallerytwo',
      type: 'image',
      title: 'Image Gallery Two'
    },
    {
      name: 'subheadingtwo',
      type: 'string',
      title: 'Subheading Two'
    },
    {
      name: 'sublabeltwo',
      type: 'string',
      title: 'Sublabel Two'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare ({heading}) {
      return {
        title: `${heading}`,
        subtitle: 'Company section'
      }
    }
  }
}
