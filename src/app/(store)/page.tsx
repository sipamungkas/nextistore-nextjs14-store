import Image from "next/image";
import { ShoppingCart, Truck, HeadphonesIcon, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  const featuredProducts = [
    { id: 1, name: "Summer Collection", image: "/placeholder.png" },
    { id: 2, name: "New Arrivals", image: "/placeholder.png" },
    { id: 3, name: "Seasonal Deals", image: "/placeholder.png" },
  ];

  const bestSellers = [
    { id: 1, name: "Trendy T-Shirt", price: 29.99, image: "/placeholder.png" },
    { id: 2, name: "Stylish Jeans", price: 59.99, image: "/placeholder.png" },
    { id: 3, name: "Cozy Sweater", price: 49.99, image: "/placeholder.png" },
    {
      id: 4,
      name: "Classic Sneakers",
      price: 79.99,
      image: "/placeholder.png",
    },
  ];

  const products = [
    { id: 1, name: "Casual Shirt", price: 34.99, image: "/placeholder.png" },
    { id: 2, name: "Elegant Dress", price: 89.99, image: "/placeholder.png" },
    {
      id: 3,
      name: "Comfortable Pants",
      price: 54.99,
      image: "/placeholder.png",
    },
    { id: 4, name: "Sporty Jacket", price: 99.99, image: "/placeholder.png" },
    { id: 5, name: "Leather Boots", price: 129.99, image: "/placeholder.png" },
    { id: 6, name: "Casual Cap", price: 24.99, image: "/placeholder.png" },
  ];

  return (
    <main className="flex-grow">
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id}>
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                      <h2 className="text-4xl font-bold">{product.name}</h2>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <Button className="w-full mt-4">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <Button className="w-full mt-4">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Free & Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your items delivered quickly and for free.
              </p>
            </div>
            <div className="text-center">
              <HeadphonesIcon className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                24/7 Customer Service
              </h3>
              <p className="text-gray-600">
                Our support team is always here to help you.
              </p>
            </div>
            <div className="text-center">
              <RefreshCw className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Money Back Guarantee
              </h3>
              <p className="text-gray-600">
                Not satisfied? Get a full refund within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
