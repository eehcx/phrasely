import { RouteObject } from "react-router-dom";
import { SignupTeacher } from "@/presentation/pages/auth/register-teacher.tsx";

export const AuthRoutes: RouteObject[] = [
    {
        path: "/auth/signup",
        element: <SignupTeacher/>
    }
]