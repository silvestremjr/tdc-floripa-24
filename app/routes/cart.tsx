import { ActionFunction, redirect } from "@remix-run/node";
import { shoppingCart } from "~/utils/cookie.server";

export const action: ActionFunction = async ({ request }) => {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = (await shoppingCart.parse(cookieHeader)) || { quantity: 0 };
  
    const body = await request.formData();
    const quantity = body.get("quantity");

    return redirect(request.url,
      {
        status: 200,
        headers: {
          "Set-Cookie": await shoppingCart.serialize({ quantity: Number(cookie.quantity) + Number(quantity) }),
        }
      });
  };