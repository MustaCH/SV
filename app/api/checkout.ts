import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../providers";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN!,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const product: Product = req.body.product;

    const URL = "https://4680-186-148-116-135.ngrok-free.app";

    try {
      const preference: CreatePreferencePayload = {
        items: [
          {
            title: product.name,
            unit_price: product.price,
            quantity: 1,
          },
        ],
        auto_return: "approved",
        back_urls: {
          success: `${URL}`,
          failure: `${URL}`,
        },
        notification_url: `${URL}/api/notify`,
      };

      const response = await mercadopago.preferences.create(preference);

      res.status(200).send({ url: response.body.init_point });
    } catch (error) {}
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export default handler;