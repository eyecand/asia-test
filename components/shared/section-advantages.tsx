import {
  Building,
  ShieldCheck,
  Handshake,
  CircleDollarSign,
} from "lucide-react";

export default function AdvantagesSection() {
  return (
    <section className="py-16 bg-black text-white" id="advantages">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Наши преимущества
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <Building size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Юридические гарантии</h3>
            <p className="text-gray-400">
              Обязательное заключение договора с юр. лицом
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Надежность</h3>
            <p className="text-gray-400">Возвратная предоплата</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <Handshake size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Полное сопровождение клиентов
            </h3>
            <p className="text-gray-400">
              С момента заключения договора до выдачи автомобиля
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <CircleDollarSign size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Выгодная стоимость авто
            </h3>
            <p className="text-gray-400">
              Наименьшая комиссия на рынке, прозрачное ценообразование,
              бесплатная стоянка во Владивостоке
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
