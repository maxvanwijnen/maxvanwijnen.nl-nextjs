/*
import { useRouter } from "next/router";
import Link from "next/link";

export default function BreadCrumbs (){
    const pathNameArray = useRouter().asPath.split('/');

    const breadCrumbs = pathNameArray.map((pathSegment, i , pathName) => {


        if (i +  1 === pathNameArray.length) {
            return <Link href="/"><a>{pathSegment}</a></Link>;
        }
        return <Link href="/"><a>{pathSegment}</a></Link>;
    })

   /!* let breadCrumbs = '';
    for (let i = 0; i < pathNameArray.length; i++) {
        if (i === pathNameArray.length-1) {
            breadCrumbs = `${breadCrumbs} ${<Link >}${pathNameArray[i]} ${</Link>}`;
        }
        else {
            breadCrumbs = `${breadCrumbs} ${pathNameArray[i]} >`
        }
    }*!/

    return (
        <div>
            {breadCrumbs}
        </div>
    );
}*/
