import { resumeData } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-white/5">
      <h2 className="text-4xl md:text-6xl font-black heading-font mb-12">
        Education
      </h2>
      <div className="flex flex-col gap-6">
        {resumeData.education.map((edu, idx) => (
          <div key={idx} className="bento-card p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon Column */}
              <div className="shrink-0">
                <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      {edu.school}
                    </h3>
                    {edu.degrees.length > 0 && (
                      <p className="text-base font-medium text-blue-400">
                        {edu.degrees[0].degree}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col md:items-end text-xs font-mono text-slate-400 uppercase tracking-[0.1em] shrink-0 pt-1.5">
                    <span>{edu.duration}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description (Honors & Details) */}
                <div className="text-slate-400 leading-relaxed whitespace-pre-line">
                  {(edu.honors || edu.gpa) && (
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                      {edu.honors}{edu.honors && edu.gpa ? " • " : ""}{edu.gpa ? `GPA: ${edu.gpa}` : ""}
                    </p>
                  )}
                  {edu.degrees[0]?.detail && (
                    <p>{edu.degrees[0].detail}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
