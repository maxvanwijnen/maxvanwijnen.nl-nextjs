import Txt from "../../components/content-section";
import React from "react";
import TxtImg2Column from "../../components/TxtImg2Column/TxtImg2Column";

export default function Loveshoot (){
    return (
        <TxtImg2Column
            imgSource="/img/header/Kinderfotografie-header.webp"
            cssClass="Kinderen"
            imgAlt = "Kinderfotografie"
            imgWidth={573}
            imgHeight={384}
            txtTitle="Kinderfotografie">
            Zin in een leuke fotosessie met je geliefde? Gewoon omdat het leuk is, of misschien wel omdat jullie verloofd zijn of voor de uitnodiging van jullie bruiloft. Alles kan en alles mag! een loveshoot is natuurlijk ook het perfecte cadeau voor valentijnsdag!
        </TxtImg2Column>
    );
}