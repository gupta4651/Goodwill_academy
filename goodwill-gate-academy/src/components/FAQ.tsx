import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const faqs = [
  {
    question: "What are the best engineering classes in Nagpur?",
    answer: "Goodwill GATE Academy offers the best engineering classes in Nagpur with 17+ years of experience. Our expert faculty provides comprehensive coaching for all engineering disciplines including Civil, Mechanical, Electrical, and Computer Science with practical approach and placement support."
  },
  {
    question: "Which is the best GATE coaching in Nagpur?",
    answer: "Goodwill GATE Academy is the best GATE coaching in Nagpur with 85% success rate. Our IIT-expert faculty, comprehensive study material, test series, and previous year paper practice have helped 3000+ students crack GATE and secure PSU jobs."
  },
  {
    question: "Do you provide polytechnic entrance coaching in Nagpur?",
    answer: "Yes! We offer the best polytechnic entrance coaching in Nagpur for Maharashtra Polytechnic entrance exam (ME/PCE). Our focused preparation includes daily practice, mock tests, and expert guidance to help students clear the exam in first attempt."
  },
  {
    question: "What engineering diploma coaching do you offer?",
    answer: "We provide complete engineering diploma to degree bridge coaching in Nagpur. Our programs help diploma students transition smoothly to degree courses with comprehensive syllabus coverage, practical training, and career counseling."
  },
  {
    question: "How is your computer institute in Nagpur?",
    answer: "Our computer institute in Nagpur offers industry-relevant courses in Web Development, Programming, Office Applications, and more. With certification programs, practical training, and job placement support, we help students build successful IT careers."
  },
  {
    question: "What is the duration of GATE coaching program?",
    answer: "Our GATE coaching program runs for 6-12 months depending on your current preparation level. We offer classroom and online options with IIT-expert faculty, test series, study material, and PSU interview guidance included."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes! Goodwill GATE Academy provides complete placement assistance including career counseling, resume building, interview preparation, and job referrals. Our strong industry connections help students secure positions in top companies and PSUs."
  },
  {
    question: "Are there any scholarships available?",
    answer: "We offer merit-based scholarships for students demonstrating excellent academic performance. Contact our admissions team to know about scholarship eligibility criteria and application process."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-kicker">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Common questions about our GATE, Engineering, and Polytechnic coaching programs in Nagpur.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-slate-50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:bg-slate-100"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-emerald-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-slate-200 px-5 pb-5 pt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}