import React from "react";
import css from "./RelatedPages.module.scss";
import Link from "next/link";
import { FiNavigation } from "react-icons/fi";


const RelatedPages = ({relatedTo,relatedPages}) => {

    return ( 
        <article className={css['related-pages']}>
            <h2>Gerelateerd aan {relatedTo}</h2>
            <div className={css['links']}>
                {
                    relatedPages.map((page, index)=> (
                        <Link href={page.link} legacyBehavior><a className={css['link']}><FiNavigation /> {page.text}</a></Link>
                    ))
                }
            </div>
        </article>
    )
}

export default RelatedPages;