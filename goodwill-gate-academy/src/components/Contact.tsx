import { useState, type FormEvent } from 'react';
import { CheckCircle, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { businessInfo, courses } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const phoneHref = businessInfo.phone.replace(/\s+/g, '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const selectedCourse = courses.find((course) => course.id === formData.course);
    const enquiry = [
      'Hi Goodwill GATE Academy, I want admission details.',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Course: ${selectedCourse ? selectedCourse.title : formData.course}`,
      formData.message ? `Message: ${formData.message}` : '',
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(enquiry)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-kicker">Admissions</span>
          <h2 className="section-title">Talk to the engineering academy.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share the course you are interested in and the team can guide you on batches, preparation plan, and admission details.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-lg border border-slate-200 bg-[#f3f7f9] p-5 shadow-sm sm:p-8">
            <h3 className="text-2xl font-black text-slate-950">Send Enquiry</h3>

            {submitted && (
              <div className="mt-5 flex items-center gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-800" aria-live="polite">
                <CheckCircle className="h-5 w-5" />
                <span className="font-bold">Your enquiry is ready in WhatsApp.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="gate-name" className="mb-2 block text-sm font-black text-slate-800">Full Name *</label>
                <input id="gate-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100" placeholder="Student name" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="gate-email" className="mb-2 block text-sm font-black text-slate-800">Email *</label>
                  <input id="gate-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100" placeholder="student@email.com" />
                </div>
                <div>
                  <label htmlFor="gate-phone" className="mb-2 block text-sm font-black text-slate-800">Phone *</label>
                  <input id="gate-phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div>
                <label htmlFor="gate-course" className="mb-2 block text-sm font-black text-slate-800">Interested Program *</label>
                <select id="gate-course" required value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100">
                  <option value="">Select Program</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>{course.title} - {course.subtitle}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="gate-message" className="mb-2 block text-sm font-black text-slate-800">Message</label>
                <textarea id="gate-message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100" placeholder="Preferred program, semester, branch, exam target, or questions" />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send className="h-5 w-5" />
                Send on WhatsApp
              </button>
            </form>
          </div>

          <div className="grid gap-5">
            <a href={`tel:${phoneHref}`} className="rounded-lg bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-cyan-700">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-300">Call for Admissions</div>
                  <div className="text-2xl font-black">{businessInfo.phone}</div>
                </div>
              </div>
            </a>

            <a href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I want admission details for Goodwill GATE Academy.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-lg bg-emerald-600 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-700">
              <MessageCircle className="h-6 w-6" />
              Quick WhatsApp Inquiry
            </a>

            {[
              { icon: MapPin, title: 'Locations', lines: businessInfo.addresses.map((address) => `${address.label}: ${address.address}`) },
              { icon: Mail, title: 'Email', lines: [businessInfo.email] },
              { icon: Clock, title: 'Working Hours', lines: ['Mon-Sat: 7:00 AM - 9:00 PM', 'Sunday: 8:00 AM - 6:00 PM'] },
            ].map((item) => (
              <div key={item.title} className="tech-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <item.icon className="h-6 w-6 text-cyan-700" />
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                </div>
                <div className="space-y-2">
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm leading-6 text-slate-600">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
