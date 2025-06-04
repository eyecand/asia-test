import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/site/hero.webp')",
          filter: "brightness(0.6)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Авто из Японии, Кореи
          <br />и Китая под заказ
        </h1>
        <p className="text-xl md:text-2xl mb-8">Комиссия составляет 25 000 ₽</p>
        <Link
          href="#"
          className="inline-block bg-black text-white font-medium px-8 py-3 rounded hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-shadow duration-400"
        >
          Оставить заявку
        </Link>
        <div className="flex justify-center mt-8">
          <ChevronDown
            size={50}
            className="text-white animate-bounce cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
