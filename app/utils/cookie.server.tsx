import { createCookie } from "@remix-run/node"; // or "@remix-run/cloudflare"

export const shoppingCart = createCookie("shopping-cart", {
    path: "/",
    httpOnly: true
  }); 