import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import DevEnvironement from '../../environement/DevEnvironement';

const env = new DevEnvironement();

type Props = {

    id:number;

    title:string;

    content:string;
}

const Article = (props:any) => {
    
   
    const [article, setArticle] = useState<Props>({id:0,title:"",content:""});

    const getArticle = async () => {

        const articles = await axios.get(env.url)

        articles.data.articles.map(( a : Props ) => {

            if(a.id == props.id){

                setArticle(a)

                console.log(a);
                
            }
        })
    }

    useEffect(() => {

        getArticle();

    },[]);

  return (
    <>  
        <h1 className="h1 my-2">{article.title}</h1>

        <p className='mx-5 px-3'>{article.content}</p>          
    </> 
  )
}

export default Article;