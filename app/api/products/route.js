import { NextResponse } from 'next/server';
import products from './data';

export async function GET(request) {
  return NextResponse.json(products);
}
