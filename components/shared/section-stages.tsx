export default function StagesSection() {
  return (
    <section className="py-16 bg-gray-100" id="stages">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Этапы работы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div key={step} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  {step}
                </span>
                <h3 className="text-xl font-semibold">Этап {step}</h3>
              </div>
              <p className="text-gray-600">
                Описание этапа работы. Здесь подробно рассказывается о том, что
                происходит на данном этапе сотрудничества.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
