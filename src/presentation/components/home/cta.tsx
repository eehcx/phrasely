import { Link } from "react-router-dom";
import { useInView } from "@/presentation/hooks/use-in-view";
import { Button } from "@/presentation/components/ui/button";

export function CTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-[#433252] py-20 px-6">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="font-sans text-3xl sm:text-4xl text-white font-bold mb-4">
          ¿Listo para transformar tus clases?
        </h2>
        <p className="font-montserrat text-gray-300 text-lg mb-8">
          Únete a cientos de profesores que ya crean juegos con Phrasely
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#F35F31] hover:bg-[#E04E28] text-white rounded-full px-8 py-6 text-lg font-semibold"
        >
          <Link to="/auth/signup">Empieza gratis</Link>
        </Button>
      </div>
    </section>
  );
}
