import { MetaData } from "@interfaces/meta-data"
import Head from "next/head"

export interface HeadProps {
  metaData: MetaData
}

export const HeadMeta: React.FC<HeadProps> = ({ metaData }): JSX.Element => {
  return (
    <Head>
      {/* <meta charSet="UTF-8"/> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metaData.description} />
      {/* <meta name="robots" content="index, follow" /> */}
      <title>{metaData.title}</title>

      {/* 
      todo: add OpenGraph tags and Twitter tags to promote social integrations
      <meta property="og:type" content="article" />
      <meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
      <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
      <meta property="og:image" content="LINK TO THE IMAGE FILE" />
      <meta property="og:url" content="PERMALINK" />
      <meta property="og:site_name" content="SITE NAME" />

      <meta name="twitter:title" content="TITLE OF POST OR PAGE"/>
      <meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT"/>
      <meta name="twitter:image" content="LINK TO IMAGE"/>
      <meta name="twitter:site" content="@USERNAME"/>
      <meta name="twitter:creator" content="@USERNAME"/>
      // https://clutch.co/seo-firms/resources/meta-tags-that-improve-seo#Canonical
      */}
    </Head>
  )
}
