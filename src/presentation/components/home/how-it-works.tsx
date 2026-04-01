import { useInView } from "@/presentation/hooks/use-in-view";
import { STEPS } from "./how-it-works.content";
import { Zap, Shield, Clock } from "lucide-react";

const BENEFITS = [
  { icon: Zap, label: "Sin experiencia necesaria" },
  { icon: Clock, label: "Listo en menos de 5 minutos" },
  { icon: Shield, label: "100% gratuito" },
];

export function HowItWorks() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Dot texture with top-to-bottom fade */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #433252 1.2px, transparent 1.2px)",
          backgroundSize: "18px 18px",
          maskImage: "linear-gradient(to bottom, transparent 0%, transparent 15%, black 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 15%, black 80%)",
        }}
      />

      <div ref={ref} className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — Title + Benefits */}
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <span className="inline-block bg-white/30 backdrop-blur-md border border-white/40 text-[#F35F31] font-sans text-sm font-semibold px-2.5 py-1 rounded-full mb-4 shadow-sm">
              Simple y rápido
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl text-[#1A0F24] font-bold mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="font-montserrat text-[#2E223D] text-lg leading-relaxed mb-8">
              En tres pasos tienes tu juego listo para compartir con tus alumnos.
              No necesitas experiencia técnica ni descargar nada.
            </p>

            {/* Benefits list */}
            <div className="flex flex-col gap-4">
              {BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon size={18} strokeWidth={1.8} color="#F35F31" />
                    </div>
                    <span className="font-montserrat text-sm text-[#2E223D] font-medium">
                      {benefit.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-6 border-t border-white/30">
              <div>
                <p className="font-sans text-2xl text-[#F35F31] font-bold">500+</p>
                <p className="font-montserrat text-xs text-[#2E223D]/60 mt-0.5">Profesores</p>
              </div>
              <div>
                <p className="font-sans text-2xl text-[#F35F31] font-bold">2k+</p>
                <p className="font-montserrat text-xs text-[#2E223D]/60 mt-0.5">Juegos creados</p>
              </div>
              <div>
                <p className="font-sans text-2xl text-[#F35F31] font-bold">15k+</p>
                <p className="font-montserrat text-xs text-[#2E223D]/60 mt-0.5">Partidas jugadas</p>
              </div>
            </div>
          </div>

          {/* Right — Steps */}
          <div className="relative flex flex-col gap-5">
            {/* Vertical connector line */}
            <div className="absolute left-[38px] top-10 bottom-10 w-px bg-gradient-to-b from-[#F35F31]/40 via-[#F35F31]/20 to-transparent hidden md:block" />

            {STEPS.map((step, index) => {
              const Icon = step.iconName;
              return (
                <div
                  key={step.number}
                  className={`relative flex items-start gap-5 rounded-2xl hover:cursor-pointer bg-white/20 backdrop-blur-lg border border-white/30 p-6 shadow-sm transition-all duration-700 hover:bg-white/30 hover:shadow-md hover:border-white/50 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Icon + Number */}
                  <div className="shrink-0 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-sm">
                      <Icon size={24} strokeWidth={1.8} color="#F35F31" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-[#F35F31] text-white font-sans text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <h3 className="font-sans text-[#1A0F24] font-semibold text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="font-montserrat text-sm text-[#2E223D]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="font-montserrat text-sm text-[#2E223D]/60">
            Sin descargas, sin instalaciones. Todo desde tu navegador.
          </p>
        </div>
      </div>
    </section>
  );
}
