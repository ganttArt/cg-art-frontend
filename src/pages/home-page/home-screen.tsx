import React from "react";

export interface HomeScreenProps {
  data: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ data }): JSX.Element | null => {
  return (
    <>
      <h1>Hello World TSX</h1>
      <p>{data}</p>
    </>
  )
}

export default HomeScreen;
