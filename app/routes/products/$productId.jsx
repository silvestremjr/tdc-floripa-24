import { useLoaderData } from 'remix'

export const loader = async ({ params }) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  )
  return res.json()
}

export default function Product() {
  const product = useLoaderData()

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="300" />
      <p>{product.description}</p>
      <p>Preço: R$ {product.price}</p>
    </div>
  )
}
