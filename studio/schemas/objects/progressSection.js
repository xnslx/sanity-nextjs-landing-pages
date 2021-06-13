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
            type: 'array',
            title: 'Icon',
            of: [{ type: 'image' }]
        },
        {
            name: 'subheading',
            type: 'array',
            title: 'Subheading',
            of: [{ type: 'string' }],
        },
        {
            name: 'sublabel',
            type: 'array',
            title: 'Sublabel',
            of: [{ type: 'string' }],
        },
    ]
}