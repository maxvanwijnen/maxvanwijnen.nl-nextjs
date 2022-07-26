import ImgTxt2Column from "../../components/content-section";
import React from "react";

export default function Loveshoot (){
    return (
        <ImgTxt2Column
            imgSource="/img/header/Kinderfotografie-header.webp"
            cssClass="Loveshoot"
            imgAlt = "Loveshoot"
            imgWidth={573}
            imgHeight={384}
            txtTitle="Loveshoot"
            txtContent="Zin in een leuke fotosessie met je geliefde? Gewoon omdat het leuk is, of misschien wel omdat jullie verloofd zijn of voor de uitnodiging van jullie bruiloft. Alles kan en alles mag! een loveshoot is natuurlijk ook het perfecte cadeau voor valentijnsdag!"
        />
    );
}