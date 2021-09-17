export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "id",
            type: "number"
        },
        {
            name: "company",
            type: "string"
        },
        {
            name: "role",
            type: "string"
        },
        {
            name: "startDate",
            type: "string"
        },
        {
            name: "endDate",
            type: "string"
        },
        {
            name: "location",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: 'logo',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "companyURL",
            type: "string"
        }
    ],
    orderings: [
        {
          title: 'ID Desc',
          name: 'IDDesc',
          by: [
            {field: 'id', direction: 'desc'}
          ]
        }
    ]
}