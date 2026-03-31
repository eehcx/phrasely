import { RouteObject } from "react-router-dom";
import { SignupTeacher } from "@/presentation/pages/auth/sign-up/register-teacher";

export const AuthRoutes: RouteObject[] = [
    {
        path: "/auth/signup",
        element: <SignupTeacher/>
    }
]