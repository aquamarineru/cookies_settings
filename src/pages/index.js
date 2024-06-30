import React from "react";
import Head from "next/head";
import CookiesPopup from "../components/Cookies";
export default function Home() {
  return (
    <>
      <Head>
        <title>Cookies settings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CookiesPopup />
        test
      </main>
    </>
  );
}
