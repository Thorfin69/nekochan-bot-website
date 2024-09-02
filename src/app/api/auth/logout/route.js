import { NextResponse } from 'next/server';

export async function POST(request) {
  // Clear cookies or sessions here
  const response = NextResponse.redirect('http://localhost:3000/');
  response.cookies.delete('sessionId'); // Adjust if you use a different cookie name
  return response;
}