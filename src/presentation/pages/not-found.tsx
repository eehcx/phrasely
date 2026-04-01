import { Link } from "react-router-dom";
import { Button } from "@/presentation/components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#F35F31] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="mb-6">
          <span className="font-sans text-[120px] sm:text-[160px] font-bold text-white/30 leading-none select-none">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="font-sans text-3xl sm:text-4xl text-white font-bold mb-3">
          ¡Ups! Page Not Found
        </h1>
        <p className="font-montserrat text-gray-100/75 text-lg mb-10">
          This page got lost in translation. Don't worry—even the best teachers end up in the wrong classroom sometimes.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#594668] hover:bg-[#433252] text-white rounded-full px-8 font-semibold"
          >
            <Link to="/">
              Home
            </Link>
          </Button>
          <Link to="/console" className="text-base font-semibold text-white">
            Go to console <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
