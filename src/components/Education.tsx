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
              {/* Logo Column */}
              <div className="shrink-0">
                <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                  <img
                    src={edu.logo}
                    className="w-full h-full object-contain"
                    alt={edu.school}
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1">
                {/* Header: School & Meta */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {edu.school}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-xs font-mono text-slate-400 uppercase tracking-[0.1em] shrink-0 pt-1.5">
                    <span className="uppercase">{edu.duration}</span>
                    {edu.location && <span>{edu.location}</span>}
                  </div>
                </div>

                {/* Degrees */}
                <div className="flex flex-col gap-4">
                  {edu.degrees.map((degree, dIdx) => (
                    <div key={dIdx} className="flex flex-col gap-1">
                      <h4 className="text-lg font-bold text-blue-400">
                        {degree.degree}
                      </h4>
                      <span className="text-sm font-medium text-slate-300">
                        {degree.school}
                      </span>
                      {degree.detail && (
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                          {degree.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer: Honors/GPA */}
                {(edu.honors || edu.gpa) && (
                   <div className="mt-6 flex flex-wrap items-center gap-2">
                      {edu.gpa && (
                        <div className="px-3 py-1 bg-blue-500/10 rounded-lg border border-blue-500/20">
                           <span className="text-xs font-bold text-blue-400">
                             {edu.gpa}
                           </span>
                        </div>
                      )}
                      {edu.honors && (
                        <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                           <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                             {edu.honors}
                           </span>
                        </div>
                      )}
                   </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
