import React from 'react';
import css from './PricePackages.module.scss';
import PricePackage from "./PricePackage/PricePackage";

const PricePackages = ({pricePackages, shootType}) => {



    return (
        <section>
            <article className={css['price-packages']} id="prijzen">
                {
                    pricePackages.map((pricePackage)=>{
                        return ( <PricePackage
                            key={pricePackage.type}
                            price={pricePackage.price}
                            type={pricePackage.type}
                            uspList={pricePackage.usplist}
                            img={pricePackage.img}
                            shootType={shootType}
                            allPackages={pricePackages}
                        >
                            {pricePackage.desc}
                        </PricePackage>)
                    })
                }


            </article>
        </section>
    )
}

export default PricePackages;