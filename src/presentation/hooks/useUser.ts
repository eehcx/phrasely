import { useAppDispatch } from '@/data/state/reduxHooks.ts';
import { registerTeacher, registerGuest, removeGuest, resetUser } from '@/data/state/slices/userSlice.ts';
import { Teacher, Guest } from '@/core/types/userType.ts';

export const useUser = () => {
    const dispatch = useAppDispatch();

    const registerNewTeacher = (teacher: Teacher) => {
        dispatch(registerTeacher(teacher));
    };

    const registerNewGuest = (guest: Guest) => {
        dispatch(registerGuest(guest));
    };

    const deleteGuest = (id: string) => {
        dispatch(removeGuest(id));
    };

    const Logout = () => {
        dispatch(resetUser());
    }

    return {
        registerNewTeacher,
        registerNewGuest,
        deleteGuest,
        Logout
    };
};
