import { LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { shoppingCart } from "~/utils/cookie.server";

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await shoppingCart.parse(cookieHeader)) || { quantity: 0 };

  return cookie;
};

export default function Products() {
  const { quantity } = useLoaderData<typeof loader>();

  return (
    <>
      <div>
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center w-full">
              <h1 className="font-bold text-xl text-indigo-600">
                <Link to="/products">Products</Link>
              </h1>
              <p className="font-sans text-gray-900">
                Shopping Cart ({quantity})
              </p>
            </div>
          </div>
        </nav>
      </div>
      <section className="bg-slate-200">
        <Outlet />
      </section>
    </>
  );
}
