import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { dirname } from 'path'
import styles from '../styles/Home.module.css'
import axios from "axios"
import DevEnvironement from '../environement/DevEnvironement'
import CardArticle from "../components/CardArticle/CardArticle";
import 'bootstrap/dist/css/bootstrap.min.css';
const dir = dirname("/")
const env = new DevEnvironement()

type Article = {
  id:number;
  title:string;
  content:string;
}

const Home: NextPage = ({data}:any) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="This is a Nextjs blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href={dir}>This blog!</a>
        </h1>

      <div className="row row-cols-3">
        {data.articles.map((a:any) => (
            <div key={a.id} className="col">
             <CardArticle id={a.id} title={a.title} shortDescription={a.content} />
            </div>
        ))}
      
      </div>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://mohammedbezai.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Mohammed
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(env.url)
  const data = await res.data

  console.log('====================================');
  console.log(data);
  console.log('====================================');
  // Pass data to the page via props
  return { props: { data } }
}
export default Home
