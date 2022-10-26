import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Article from '../../components/Article/Article'
import styles from '../../styles/Home.module.css'
import axios from "axios";
import DevEnvironement from '../../environement/DevEnvironement';
import Link from 'next/link'

const env =new DevEnvironement()

type Props = {

    id:number;

    title:string;

    content:string;
}

const ArticlePage = ({data}: any) => {

    const router = useRouter()
    const { id } = router.query

    const article = () : Props => {

        const article : Props = data.articles.filter( (a : Props) => a.id.toString() == id)[0]
        console.log('====================================');
        console.log(article);
        console.log('====================================');
        return article;

    }
  return (
    <div>
        <div className={styles.container}>
            <Head>
                <title>Article</title>
                <meta name="description" content="This is a Nextjs blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <div className="d-flex justify-content-start">
                    <Link className="btn btn-primary" href="/" role="button"><button type="button" className="btn btn-outline-dark">Back</button></Link>
                </div>
            <main className={styles.main}>     
                <Article id={id}   />
            </main>
        </div>
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

export default ArticlePage