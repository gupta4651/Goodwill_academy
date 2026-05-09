import { Camera, Code, Cpu, GraduationCap, Monitor } from 'lucide-react';
import { siteImages } from '../data/assets';

const galleryImages = [
  { ...siteImages.gate, icon: GraduationCap },
  { ...siteImages.engineering, icon: Cpu },
  { ...siteImages.computer, icon: Monitor },
  { ...siteImages.training, icon: Code },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#f3f7f9] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">Academy View</span>
            <h2 className="section-title">Engineering and computer learning environments.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Practical rooms, exam-preparation spaces, and computer labs designed for technical learning and career-focused training.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryImages.map((image) => {
            const Icon = image.icon || Camera;
            return (
              <figure key={image.caption} className="tech-card overflow-hidden">
                <img src={image.src} alt={image.alt} className="h-64 w-full object-cover transition duration-500 hover:scale-105" />
                <figcaption className="flex items-center gap-3 border-t border-slate-100 bg-white p-4 font-black text-slate-950">
                  <Icon className="h-5 w-5 text-cyan-700" />
                  {image.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
