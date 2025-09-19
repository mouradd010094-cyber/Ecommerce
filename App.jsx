4) Add Tailwind directives to src/index.css:
 https://routeegy.github.io/Ecommerce
@tailwind base;
@tailwind components;
@tailwind utilities;
5) Replace src/App.jsx with this file's content and start dev:
npm run dev


This single-file component contains a header, hero, product grid and a simple cart sidebar.
Customize product list, images and styles as you like.
*/


import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';


const SAMPLE_PRODUCTS = [
{ id: 1, title: 'Classic Leather Jacket', price: 129.99, image: 'https://images.unsplash.com/photo-1520975912986-1a1f6b6b6b6b?auto=format&fit=crop&w=800&q=60' },
{ id: 2, title: 'Retro Sneakers', price: 79.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60' },
{ id: 3, title: 'Slim Fit Jeans', price: 59.99, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=60' },
{ id: 4, title: 'Minimalist Watch', price: 199.0, image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=60' },
{ id: 5, title: 'Aviator Sunglasses', price: 49.5, image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60' },
{ id: 6, title: 'Casual T-Shirt', price: 24.99, image: 'https://images.unsplash.com/photo-1520975912986-1a1f6b6b6b6b?auto=format&fit=crop&w=800&q=60' },
];


function Header({ onOpenCart, cartCount }) {
return (
<header className="bg-white shadow-sm sticky top-0 z-20">
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-2xl font-bold">RouteEgy</div>
<nav className="hidden md:flex gap-4 text-sm text-gray-600">
<a className="hover:underline" href="#">Home</a>
<a className="hover:underline" href="#">Shop</a>
<a className="hover:underline" href="#">About</a>
<a className="hover:underline" href="#">Contact</a>
</nav>
</div>


<div className="flex items-center gap-3">
<button className="px-3 py-2 rounded-md text-sm bg-gray-100">Sign in</button>
<button onClick={onOpenCart} className="relative p-2 rounded-md hover:bg-gray-100">
<ShoppingCart size={20} />
{cartCount > 0 && (
<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
)}
</button>
</div>
</div>
</header>
);
}


function Hero() {
return (
  https://routeegy.github.io/Ecommerce
  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// غير Ecommerce لاسم الريبو اللي عملته في GitHub
export default defineConfig({
  plugins: [react()],
  base: "/Ecommerce/",
})
{
  "name": "ecommerce",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.0",
    "gh-pages": "^6.1.1"
  }
}
npm install       # يثبت كل الباكجات
npm run build     # يبني المشروع
npm run deplo