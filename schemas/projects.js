export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'string'
        },
        {
            name: 'projectRepository',
            title: 'Project Repository',
            type: 'string'
        },
        {
            name: 'images',
            title: 'Images Url',
            type: 'array',
            of: [{
                name: 'image',
                type: 'image',
                options: {
                    hotspot: true,
                }
            }]
        },
        {
            name: 'techStack',
            title: 'Technologies used',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'skills' }
                    ]
                }
            ]
        }
    ]
}