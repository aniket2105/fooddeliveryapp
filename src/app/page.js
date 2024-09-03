"use client"; // Ensure this is at the top of the file
// app/home/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div
    className="flex flex-col items-center justify-center h-[calc(100vh-10vh)] w-full bg-gray-100 text-gray-800"
    style={{
      backgroundImage: "url('/background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center mb-8">
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome to the Zomato!</h1>
      <p className="text-lg mb-6 text-white">Experience the best dishes crafted with love.</p>
    </div>
    <Link href="/menu" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
      View Our Menu
    </Link>
  </div>
  );
}
