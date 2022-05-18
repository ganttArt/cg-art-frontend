import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { HomeScreenProps } from "./home-screen"

export const Page = dynamic(() => import("./home-screen"));

export const getServerSideProps: GetServerSideProps<HomeScreenProps> = async (ctx: GetServerSidePropsContext) => {
  // make request to api here
  return {
    props: {
      data: 'hello server side setup'
    }
  }
}