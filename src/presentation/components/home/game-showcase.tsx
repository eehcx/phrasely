import { useInView } from "@/presentation/hooks/use-in-view";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/presentation/components/ui/card";
import { GAMES } from "./game-showcase.content";

export function GameShowcase() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-[#FFF5F0] py-16 px-6 overflow-hidden">
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
            Juegos que puedes crear
          </h2>
          <p className="font-montserrat text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Plantillas listas para usar o personaliza tu propia experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAMES.map((game, index) => (
            <Card
              key={game.slug}
              className={`overflow-hidden border-0 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="h-48 w-full"
                role="img"
                aria-label={`Vista previa de ${game.name}`}
                style={{
                  background: `linear-gradient(135deg, ${game.gradientFrom}, ${game.gradientTo})`,
                }}
              />
              <CardHeader>
                <CardTitle className="font-sans text-[#433252]">
                  {game.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="-mt-2">
                <CardDescription className="font-montserrat text-gray-600 text-base">
                  {game.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
