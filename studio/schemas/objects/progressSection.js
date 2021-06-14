export default {
    type: 'object',
    name: 'progressSection',
    title: 'Progress',
    fields: [{
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
            name: 'image',
            type: 'image',
            title: 'Icon'
        },
        {
            name: 'subheading',
            type: 'string',
            title: 'Sub Heading'
        },
        {
            name: 'sublabel',
            type: 'string',
            title: 'Sub Label'
        }
    ],
    preview: {
        select: {
            heading: 'heading'
        },
        prepare({ heading }) {
            return {
                title: `${heading}`,
                subtitle: 'progress section'
            }
        }
    }
}