import { useInView } from "@/presentation/hooks/use-in-view";
import { FEATURES } from "./features.content";

export function Features() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-white py-16 px-6 overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #433252 1.2px, transparent 1.2px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div ref={ref} className="relative max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="font-sans text-3xl sm:text-4xl text-[#433252] font-bold">
            Todo lo que necesitas
          </h2>
          <p className="font-montserrat text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Herramientas diseñadas para que te enfoques en enseñar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.iconName;
            return (
              <div
                key={feature.title}
                className={`flex gap-4 rounded-xl p-3 -m-3 transition-all duration-700 hover:bg-[#FFF5F0] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0 bg-[#FFF5F0] p-3 rounded-xl text-[#F35F31] h-fit">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-sans text-lg text-[#433252] font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
