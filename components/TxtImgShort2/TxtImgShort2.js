import Image from "next/image";
import React from "react";
import styles  from './TxtImgShort2.module.scss';
import Link from "next/link";
import { FiImage } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import ButtonMiniPortfolio from "../MiniComponents/ButtonMiniPortfolio/ButtonMiniPortfolio";


export default function TxtImgShort2 ( {children, txtTitle, imgSource, imgWidth, imgHeight} ) {



    return (
        <article className={styles['txt-img-short-2']}>
            <div className={styles['column']}>
                <div className={styles['img-wrapper']}>
                    <Image src={children.column1.img}
                        width={imgWidth}
                        height={imgHeight}
                        alt={children.column1.imgAlt}
                    />
                </div>
                <div className={styles['content-wrapper']}>
                    <h2>{children.column1.h2}</h2>
                    <p>{children.column1.p}</p>
                    <div className={styles['button-wrapper']}>
                        <Link href={children.column1.callToAction.link} className={styles['call-to-action']}><FiChevronRight />{children.column1.callToAction.text}</Link>
                        <ButtonMiniPortfolio text="Bekijk foto's" link={children.column1.callToAction.photoLink} />
                    </div>
                </div>
            </div>
            <div className={styles['column']}>
                <div className={styles['img-wrapper']}>
                    <Image src={children.column2.img}
                        width={imgWidth}
                        height={imgHeight}
                        alt={children.column2.imgAlt}
                    />
                </div>
                <div className={styles['content-wrapper']}>
                    <h2>{children.column2.h2}</h2>
                    <p>{children.column2.p}</p>
                    <div className={styles['button-wrapper']}>
                        <Link href={children.column2.callToAction.link} className={styles['call-to-action']}><FiChevronRight />{children.column2.callToAction.text}</Link>
                        <ButtonMiniPortfolio text="Bekijk foto's" link={children.column2.callToAction.photoLink} />
                    </div>
                </div>
            </div>
            
        </article>
    );
}