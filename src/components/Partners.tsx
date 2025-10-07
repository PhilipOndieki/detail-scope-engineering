const Partners = () => {
  const partners = [
    'K.G',
    'Thermodyne',
    'Airtac',
    'Matsusak',
    'Toyo Power',
    'Spirax Sarco'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 pl-16 md:pl-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            We collaborate with industry-leading manufacturers to bring you the best
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">{partner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
