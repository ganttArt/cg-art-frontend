import React from "react";
import { Layout } from "@components/layout"
import { HOME_PAGE_META } from "./home-page.data";

export interface HomeScreenProps {
  data: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ data }): JSX.Element | null => {
  return (
    <Layout metaData={HOME_PAGE_META}>
      <h1>Hello World TSX</h1>
      <p>{data}</p>
    </Layout>
  )
}

export default HomeScreen;
