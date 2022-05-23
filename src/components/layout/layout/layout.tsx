import React from "react";
import { MetaData } from "@interfaces/meta-data"
import { HeadMeta } from "../head";
import Css from "./layout.module.scss"

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
      <p className={Css.headerText}>header</p>
      {children}
      <p>footer</p>
    </div>
  )
} 

