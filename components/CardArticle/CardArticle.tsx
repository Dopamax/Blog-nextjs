import Link from 'next/link';
import React from 'react'

type Props = {

    id:number;

    title:string;

    shortDescription:string;
}

const CardArticle = (props: Props) => {
  return (
    <>
        <div className="card my-2 ">
            <div className="card-header"> 
                <h2 className='h4 my-4'>{props.title}</h2>
            </div>
            <div className="card-body">
                {props.shortDescription.slice(0,200) + "..."}
            </div>
            <div className="card-footer d-flex justify-content-end bg-white">
                <Link className="btn btn-primary" href={"/article/" + props.id} role="button">Go</Link>
            </div>
        </div>
    </>
  )
}

export default CardArticle