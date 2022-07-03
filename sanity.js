import {createCurrentUserHook, createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
    dataset: 'production',
    projectId: 'i7b4vj8j',
    apiVersion: `2022-02-03`, // Learn more: https://www.sanity.io/docs/api-versioning
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === 'production'
    // token: process.env.SANITY_API_TOKEN,
  }
// Set up the client for fetching data in the getProps page function
  export const sanityClient = createClient(config)
// Function generate url image 
  export const urlFor = (source) => createImageUrlBuilder(config).image(source)
// Function for using the current logged in user account
  export const useCurrentUser = createCurrentUserHook(config)