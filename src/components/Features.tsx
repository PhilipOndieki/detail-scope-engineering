import { Package, ShieldCheck, Wrench, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Package,
      title: 'Comprehensive Inventory',
      description:
        'Extensive selection of industrial components from trusted manufacturers, ensuring you find exactly what you need.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assured',
      description:
        'Every product meets rigorous quality standards and comes with manufacturer warranties for your peace of mind.',
    },
    {
      icon: Wrench,
      title: 'Technical Expertise',
      description:
        'Our experienced team provides expert guidance to help you select the right components for your specific application.',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description:
        'Quick turnaround times and reliable logistics to minimize downtime and keep your operations running.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 pl-16 md:pl-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Dual Scope Engineering
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We combine quality products with exceptional service to keep your
            operations running at peak performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
