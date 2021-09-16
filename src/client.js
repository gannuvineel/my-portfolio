import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "lloq2kp2",
    dataset: "studio_dataset",
    apiVersion: '2021-08-31',
    useCdn: true
})