import Head from "next/head"
import Header from './header/header'
import Footer from './footer/footer'

export default function Layout({children}){
  return (<div className="bg-neutral-100 relative">
    <Head>
      <title>Smoothstack</title>
      <meta name="description" content="bv nextjs template with tailwindcss" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>

    <Header />

    <main>{children}</main>

    <Footer />
  </div>)
}