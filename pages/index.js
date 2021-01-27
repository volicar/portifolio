import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Vinícius</b>. I'm a software engineering student 
          and a entrepreneur. You can contact to me on  {' '}
          <a href="https://www.instagram.com/vnolicar/">Instagram</a>.
        </p>
      </section>
    </Layout>
  )
}