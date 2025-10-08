import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactData {
  title: string;
  content: {
    email: string;
    phone: string;
    address: string;
    hours: string;
  };
}

const Contact = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/contact')
      .then(res => res.json())
      .then(data => setContactData(data))
      .catch(err => console.error('Error fetching contact data:', err));
  }, []);

  if (!contactData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contactData.content.email,
      href: `mailto:${contactData.content.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactData.content.phone,
      href: `tel:${contactData.content.phone}`
    },
    {
      icon: MapPin,
      label: 'Address',
      value: contactData.content.address,
      href: null
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: contactData.content.hours,
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto pl-20 pr-6 sm:px-6 md:pl-20 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {contactData.title}
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            Have a question or need assistance? We're here to help.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.label}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={index} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-red-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Contact us today to discuss your industrial component needs and discover how we can support your operations.
            </p>
            <a
              href={`mailto:${contactData.content.email}`}
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
