"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useClickAway } from "react-use";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpen(false);
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Примерная высота хедера
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <header
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/90 shadow-md" : "bg-black/70"
      )}
    >
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/site/logo.webp"
              alt="AsiaSalesAuto Logo"
              width={220}
              height={100}
              className="mr-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("stages")}
            className="text-white hover:text-red-500 transition-colors cursor-pointer"
          >
            Этапы работы
          </button>
          <button
            onClick={() => scrollToSection("clients")}
            className="text-white hover:text-red-500 transition-colors cursor-pointer"
          >
            Наши клиенты
          </button>
          <button
            onClick={() => scrollToSection("popular-cars")}
            className="text-white hover:text-red-500 transition-colors cursor-pointer"
          >
            Популярные автомобили
          </button>
          <button
            onClick={() => scrollToSection("calculator")}
            className="text-white hover:text-red-500 transition-colors cursor-pointer"
          >
            Онлайн калькулятор
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="text-white hover:text-red-500 transition-colors cursor-pointer"
          >
            Контакты
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu
            className="cursor-pointer hover:text-red-500 transition-colors"
            size={24}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("stages")}
              className="text-white hover:text-red-500 transition-colors cursor-pointer py-2"
            >
              Этапы работы
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-white hover:text-red-500 transition-colors cursor-pointer py-2"
            >
              Наши клиенты
            </button>
            <button
              onClick={() => scrollToSection("popular-cars")}
              className="text-white hover:text-red-500 transition-colors cursor-pointer py-2"
            >
              Популярные автомобили
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-white hover:text-red-500 transition-colors cursor-pointer py-2"
            >
              Онлайн калькулятор
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-white hover:text-red-500 transition-colors cursor-pointer py-2"
            >
              Контакты
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
