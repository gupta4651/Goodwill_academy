import { Camera, FileImage, GraduationCap } from 'lucide-react';
import { siteImages } from '../data/assets';

export default function Gallery() {
  const [classroom, foundationPoster, admissionPoster] = siteImages.gallery;

  return (
    <section id="gallery" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">Campus Proof</span>
            <h2 className="section-title">Real classroom, real admissions material.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            A quick look at the classroom environment and current admission creatives for board, foundation, and entrance preparation.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
          <figure className="group image-sheen overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-xl shadow-slate-900/10">
            <img src={classroom.src} alt={classroom.alt} className="h-full min-h-[420px] w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="flex items-center gap-2 bg-slate-950 px-5 py-4 font-bold text-white">
              <Camera className="h-5 w-5 text-amber-300" />
              {classroom.caption}
            </figcaption>
          </figure>

          {[foundationPoster, admissionPoster].map((image, index) => {
            const Icon = index === 0 ? GraduationCap : FileImage;
            return (
              <figure key={image.caption} className="overflow-hidden rounded-lg border border-slate-200 bg-[#f8f4ea] shadow-sm">
                <div className="flex min-h-[420px] items-center justify-center p-3">
                  <img src={image.src} alt={image.alt} className="max-h-[520px] w-full rounded-md object-contain" />
                </div>
                <figcaption className="flex items-center gap-2 border-t border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-800">
                  <Icon className="h-4 w-4 text-red-700" />
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
