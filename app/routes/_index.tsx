import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

export const loader = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}

export default function Index() {
  const products = useLoaderData()
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Nossos Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
