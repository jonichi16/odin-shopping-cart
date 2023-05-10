import { NextResponse } from 'next/server';
import cart from './data';

export async function GET(request) {
  return NextResponse.json(cart);
}

export async function POST(request) {
  const { name, price, image } = await request.json();

  const newItem = {
    id: Date.now(),
    name,
    price,
    image,
  };

  cart.push(newItem);

  return NextResponse.json(cart);
}
