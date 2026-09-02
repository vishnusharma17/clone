import { HomePage } from "@/components/home";
import { Product } from "@/components/storefront";
async function getProducts():Promise<Product[]>{const r=await fetch("https://www.gulabojaipur.com/collections/new-arrivals/products.json?limit=24",{next:{revalidate:3600}});return r.ok?(await r.json()).products:[]}
export default async function Home(){return <HomePage products={await getProducts()}/>}
