import { Kitchen, Ruler, Palette, Tools, FileStack, Phone } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Conception de cuisines modernes',
    description: 'Création de designs innovants et contemporains adaptés à votre espace et à votre style de vie.',
    icon: Kitchen,
  },
  {
    title: 'Aménagement sur mesure',
    description: 'Solutions personnalisées pour optimiser chaque centimètre de votre cuisine selon vos besoins.',
    icon: Ruler,
  },
  {
    title: 'Choix de matériaux',
    description: 'Sélection experte de matériaux durables et esthétiques pour votre projet.',
    icon: Palette,
  },
  {
    title: 'Rénovation de cuisine',
    description: 'Transformation complète de votre espace existant pour une cuisine moderne et fonctionnelle.',
    icon: Tools,
  },
  {
    title: 'Consultation d\'architecte d\'intérieur',
    description: 'Conseils professionnels pour vous guider dans vos choix d\'aménagement et de design.',
    icon: FileStack,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de conception et d'aménagement de cuisines,
            adaptés à vos besoins et à votre budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-gray-900 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-black text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Prêt à transformer votre cuisine?</h2>
            <p className="text-lg mb-6">
              Contactez-nous pour une consultation gratuite et personnalisée
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Demandez une consultation gratuite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}