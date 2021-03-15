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
          Hello, I'm <b>Vinícius Olicar</b>. I'am a software engineering student 
          and a entrepreneur. You can contact to me on  {' '}
          <a href="https://www.linkedin.com/in/vin%C3%ADcius-carvalho-01a6a3203/">LinkedIn</a> or 
          <a href="https://github.com/volicar"> GitHub</a>.
        </p>
      </section>
    </Layout>
  )
}