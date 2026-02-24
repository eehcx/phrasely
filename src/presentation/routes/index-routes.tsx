import { RouteObject } from "react-router-dom";
import { Index } from "@/presentation/pages";
import { Documentation } from "@/presentation/pages/documentation.tsx";

export const IndexRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Index/>
    },
    {
        path: "/docs",
        element: <Documentation/>
    }
]