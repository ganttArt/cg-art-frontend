import React from "react";
import { MetaData } from "@interfaces/meta-data"
import { HeadMeta } from "../head";

export interface LayoutProps {
  metaData: MetaData,
  children: React.ReactNode,
}

export const Layout: React.FC<LayoutProps> = ({
  metaData,
  children,
}): JSX.Element => {
  return (
    <div>
      <HeadMeta metaData={metaData}/>
      <p>header</p>
      {children}
      <p>footer</p>
    </div>
  )
} 

