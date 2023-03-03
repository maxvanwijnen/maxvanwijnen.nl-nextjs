import React from 'react';
import css from './PricePackages.module.scss';
import PricePackage from "./PricePackage/PricePackage";

const PricePackages = () => {
    return (
        <section>
            <article className={css['price-packages']}>
                <PricePackage
                    price={89}
                    type="basic"
                    uspList={[{title:'Leuke',desc:'asdasdasdasdas'},
                        {title:'2e',desc:'fdgdfgfgdf'}]}
                    img="https://www.maxvanwijnen.nl/www/images/kinderen/Fotoshoot-strand-kind.webp"
                >
                    kdfjhsdfjhskfhsfkd
                </PricePackage>

                <PricePackage
                    price={139}
                    type="deluxe"
                    uspList={[{title:'Leuke',desc:'asdasdasdasdas'},
                        {title:'2e',desc:'fdgdfgfgdf'}]}
                    img="https://www.maxvanwijnen.nl/www/images/kinderen/Fotoshoot-strand-kind.webp"
                >
                    kdfjhsdfjhskfhsfkd
                </PricePackage>
                <PricePackage
                    price={189}
                    type="premium"
                    uspList={[{title:'Leuke',desc:'asdasdasdasdas'},
                        {title:'2e',desc:'fdgdfgfgdf'}]}
                    img="https://www.maxvanwijnen.nl/www/images/kinderen/Fotoshoot-strand-kind.webp"
                >
                    kdfjhsdfjhskfhsfkd
                </PricePackage>

            </article>
        </section>
    )
}

export default PricePackages;