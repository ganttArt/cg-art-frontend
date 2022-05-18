import { MetaData } from "@interfaces/meta-data"
import Head from "next/head"

export interface HeadProps {
  metaData: MetaData
}

export const HeadMeta: React.FC<HeadProps> = ({ metaData }): JSX.Element => {
  return (
    <Head>
      <title>{metaData.title}</title>
    </Head>
  )
}
