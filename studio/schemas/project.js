export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "date",
            type: "string"
        },
        {
            name: "tools",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options :{
                list: [
                    {value: "Personal", title: "Personal" },
                    {value: "Academic", title: "Academic" }
                ]
            }
        },
        {
            name: "link",
            type: "url"
        }
    ]
}