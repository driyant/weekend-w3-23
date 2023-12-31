import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";

import InputNote from "./components/InputNote";
import NoteList from "./components/NoteList";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Notes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        as="main"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexFlow="column"
          width={{
            base: "80%",
            lg: "60%",
          }}
        >
          <Header />
          <Box
            backgroundColor="#E6E6FA"
            width="100%"
            borderBottomLeftRadius="12px"
            borderBottomRightRadius="12px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {/* <InputNote /> */}
            <NoteList data={data} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/notes");
  const { data } = await res.json();
  return { props: { data } };
}
