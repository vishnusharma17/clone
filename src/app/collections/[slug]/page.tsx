import { notFound } from "next/navigation";
import { CollectionPage, Product } from "@/components/storefront";
import { collectionNames } from "@/data/site";
async function getProducts(slug:string):Promise<Product[]>{const r=await fetch(`https://www.gulabojaipur.com/collections/${slug}/products.json?limit=24`,{next:{revalidate:3600}});return r.ok?(await r.json()).products:[]}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!collectionNames[slug])notFound();return <CollectionPage slug={slug} products={await getProducts(slug)}/>}
