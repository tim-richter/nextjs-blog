import Link from 'next/link'
import Head from 'next/head'
import React from "react";

export default function Layout({
   children,
   title = 'This is the default title',
}: any) {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
          <nav>
            <Link href="/">
              Home
            </Link>
            {' '}
          </nav>
        </header>

        <main>{children}</main>

        <footer>I`m a footer</footer>
      </>
    )
}
