import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const faqs = [
  {
    question: "What are the best SSC coaching classes in Nagpur?",
    answer: "Goodwill Classes offers the best SSC coaching in Nagpur for Class 10 students. With 17+ years of experience and expert faculty, we provide complete board preparation including Physics, Chemistry, Mathematics, and Science with daily practice problems and weekly tests."
  },
  {
    question: "Which is the best coaching for Class 11th Science in Nagpur?",
    answer: "Goodwill Classes provides the best Class 11th Science coaching in Nagpur with expert faculty for Physics, Chemistry, Mathematics, and Biology. Our structured approach includes concept clarity, regular tests, and personal mentorship to ensure students excel in their HSC board exams."
  },
  {
    question: "Do you offer coaching for Class 12th HSC Science?",
    answer: "Yes, Goodwill Classes offers comprehensive Class 12th HSC Science coaching in Nagpur. We cover Physics, Chemistry, Mathematics/Biology with complete board exam preparation, previous year papers practice, and exam-focused guidance for CBSE and State Board students."
  },
  {
    question: "What is the duration of the Foundation Course?",
    answer: "Our Foundation Course for Class 9th and 10th runs for 1-2 years depending on when the student joins. The course strengthens Mathematics, Science fundamentals, and builds study discipline essential for board exams and future competitive exams."
  },
  {
    question: "Are demo classes available before enrollment?",
    answer: "Yes! Goodwill Classes offers FREE one-week demo classes before enrollment. This allows students and parents to experience our teaching methodology, classroom environment, and faculty quality before making any commitment."
  },
  {
    question: "What board syllabi do you cover?",
    answer: "We provide coaching for both CBSE and State Board (Maharashtra Board) syllabi. Our comprehensive coverage includes all chapters with depth, practice problems, and regular assessments to ensure complete exam readiness."
  },
  {
    question: "Do you provide hostel facility?",
    answer: "Yes, we offer fully-furnished hostel facility for outside students with mess service available. Our hostel ensures a safe, focused learning environment with proper study routines and supervision."
  },
  {
    question: "What makes Goodwill Classes different from other coaching institutes?",
    answer: "With 17+ years of excellence, 5000+ successful students, and 100% results, Goodwill Classes stands out with expert faculty, personal mentorship, daily practice problems, weekly tests, and a proven teaching methodology that builds strong foundations."
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
            Common questions about our SSC and HSC Science coaching programs in Nagpur.
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
                  className={`h-5 w-5 flex-shrink-0 text-red-700 transition-transform ${
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