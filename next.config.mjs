// Librarys
import million from 'million/compiler'
import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: []
  },
  env: {
    API_URL: process.env.API_URL,
    APP_NAME: process.env.APP_NAME,
    PUBLIC_URL: process.env.PUBLIC_URL,
    SECRET_PASSWORD: process.env.SECRET_PASSWORD,
    DEVELOPER_LINKEDIN_URL: process.env.DEVELOPER_LINKEDIN_URL,
    CONTACT_EMAIL_01: process.env.CONTACT_EMAIL_01,
    CONTACT_EMAIL_02: process.env.CONTACT_EMAIL_02,
    CONTACT_EMAIL_03: process.env.CONTACT_EMAIL_03,
    WHATSAPP_CONTACT_URL_01: process.env.WHATSAPP_CONTACT_URL_01,
    WHATSAPP_CONTACT_URL_02: process.env.WHATSAPP_CONTACT_URL_02,
    WHATSAPP_CONTACT_NUMBER_01: process.env.WHATSAPP_CONTACT_NUMBER_01,
    WHATSAPP_CONTACT_NUMBER_02: process.env.WHATSAPP_CONTACT_NUMBER_02,
    CONTACT_FACEBOOK_PAGE_URL_01: process.env.CONTACT_FACEBOOK_PAGE_URL_01,
    CONTACT_FACEBOOK_PAGE_URL_02: process.env.CONTACT_FACEBOOK_PAGE_URL_02,
    CONTACT_FACEBOOK_PAGE_NAME_01: process.env.CONTACT_FACEBOOK_PAGE_NAME_01,
    CONTACT_FACEBOOK_PAGE_NAME_02: process.env.CONTACT_FACEBOOK_PAGE_NAME_02,
    OMNILIFE_ENTREPRENEUR_URL: process.env.OMNILIFE_ENTREPRENEUR_URL,
    OMNILIFE_CLIENT_URL: process.env.OMNILIFE_CLIENT_URL,
    NEXT_SHARP_PATH: process.env.NEXT_SHARP_PATH
  }
}

// Combine Plaiceholder with Next.js
// const nextPlaiceholder = withPlaiceholder(nextConfig)

export default withPlaiceholder(nextConfig)

/** @type {import('million').Options} */
// const millionConfig = { auto: true }

// export default million.next(nextPlaiceholder, millionConfig)
