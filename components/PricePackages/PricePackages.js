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
                    uspList={["5 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"]}
                    img="https://www.maxvanwijnen.nl/www/images/kinderen/Fotoshoot-strand-kind.webp"
                >
                    Met het Basic fotopakket kunt u de magie en spontaniteit van de kindertijd vastleggen. Dit pakket biedt een korte, maar leuke fotosessie van uw kind, met vijf hoogwaardige, nabewerkte foto&apos;s die u na afloop eenvoudig download.  Met dit pakket krijgt u  een digitale download van uw foto&apos;s, zodat u ze gemakkelijk kunt delen met familie en vrienden. Maar het is ook mogelijk om foto&apos;s af te laten drukken.
                </PricePackage>

                <PricePackage
                    price={139}
                    type="deluxe"
                    uspList={["10 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"]}
                    img="https://www.maxvanwijnen.nl/www/images/kinderen/Fotoshoot-strand-kind.webp"
                >
                    Met het Basic fotopakket kunt u de magie en spontaniteit van de kindertijd vastleggen. Dit pakket biedt een korte, maar leuke fotosessie van uw kind, met vijf hoogwaardige, nabewerkte foto&apos;s die u na afloop eenvoudig download.  Met dit pakket krijgt u  een digitale download van uw foto&apos;s, zodat u ze gemakkelijk kunt delen met familie en vrienden. Maar het is ook mogelijk om foto&apos;s af te laten drukken.
                </PricePackage>
                <PricePackage
                    price={189}
                    type="premium"
                    uspList={["15 Foto's","Hoge kwaliteit nabewerkt", "Digitale download"]}
                    img="https://www.maxvanwijnen.nl/www/images/kinderen/Fotoshoot-strand-kind.webp"
                >
                    Met het Basic fotopakket kunt u de magie en spontaniteit van de kindertijd vastleggen. Dit pakket biedt een korte, maar leuke fotosessie van uw kind, met vijf hoogwaardige, nabewerkte foto&apos;s die u na afloop eenvoudig download.  Met dit pakket krijgt u  een digitale download van uw foto&apos;s, zodat u ze gemakkelijk kunt delen met familie en vrienden. Maar het is ook mogelijk om foto&apos;s af te laten drukken.
                </PricePackage>

            </article>
        </section>
    )
}

export default PricePackages;