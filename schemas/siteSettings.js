// schemas/siteSettings.js
export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text'
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
        },
        {
            name: 'badge',
            title: 'Badge',
            type: 'image',
        },
        {
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string'
        },
    ]
}