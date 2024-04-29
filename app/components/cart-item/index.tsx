import React from "react";
import { User, Chip, Button } from "@nextui-org/react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useCartContext } from "@/app/providers";

interface CartItemProps {
  product: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    pics: string[];
    medidas: string[];
    color: string;
  };
}

export default function CartItem({ product }: CartItemProps) {
  const { deleteProduct } = useCartContext();

  return (
    <div className="relative flex items-center justify-between mx-2 px-4 py-3  bg-neutral-100 dark:bg-neutral-700 rounded-lg drop-shadow-md">
      <Button
        onClick={() => deleteProduct(product.id)}
        className="absolute top-[-25%] right-0 rounded-full w-3"
        isIconOnly
        size="sm"
        color="danger"
        aria-label="Close"
      >
        <IoMdClose />
      </Button>
      <User
        name={product.name}
        description={
          <Link href="/" className="text-blue-500">
            Ver producto
          </Link>
        }
        avatarProps={{
          src: product.pics[0],
        }}
      />
      <Chip
        className="bg-neutral-700 text-white dark:bg-neutral-300 dark:text-black"
        size="lg"
      >
        ${product.price}
      </Chip>
    </div>
  );
}
