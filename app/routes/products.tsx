import { Link, MetaFunction, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Products() {
  return (
    <>
      <div>
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center w-full">
              <h1 className="font-bold text-xl text-indigo-600">
                <Link to="/products">Produtos</Link>
              </h1>
              <p className="font-sans text-gray-900">Carrinho de Compras (0)</p>
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
