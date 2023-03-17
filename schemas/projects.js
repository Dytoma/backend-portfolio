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
            type: 'string'
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
            name: 'imgUrl',
            title: 'Image Url',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}