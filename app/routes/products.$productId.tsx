import {
  ActionFunction,
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { shoppingCart } from "~/utils/cookie.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data.title}` },
    { name: "description", content: data.description },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const products = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  ).then((res) => res.json());
  return json(products);
};


export default function Product() {
  const fetcher = useFetcher({ key: "add-to-cart" });
  const product = useLoaderData<typeof loader>();

  return (
    <>
      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <p className="leading-relaxed border border-b-slate-400 pb-5 mb-10">
                {product.description}
              </p>

              <div className="flex justify-between items-center w-full">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <fetcher.Form method="post" action="/cart">
                  <input type="hidden" name="quantity" value="1" />
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to Cart
                  </button>
                </fetcher.Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
