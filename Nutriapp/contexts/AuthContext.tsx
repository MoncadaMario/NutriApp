import { createContext, useContext, useState } from "react";
import axios from "axios";

type User = { email: string } | null;

const AuthContext = createContext<{
    user: User;
    isAllowed: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
} | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser ] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);

    const login = async (email: string, password: string) => {
        const isValidEmail = email.includes('@');

        if (isValidEmail) {
            try {
                // Realiza la solicitud a tu API
                const response = await axios.post('https://localhost:7042/api/usuarios', {
                    email,
                    password,
                });

                // Verifica la respuesta de la API
                if (response.data && response.data.success) {
                    setUser ({ email });
                    setIsAllowed(true);
                } else {
                    setUser (null);
                    setIsAllowed(false);
                    alert("Usuario no encontrado o contraseña incorrecta");
                }
            } catch (error) {
                console.error("Error de autenticación:", error);
                setUser (null);
                setIsAllowed(false);
                alert("Error en la conexión con el servidor");
            }
        } else {
            setUser (null);
            setIsAllowed(false);
            alert("Formato de correo no válido");
        }
    };

    const logout = () => {
        setUser (null);
        setIsAllowed(false);
    }

    return (
        <AuthContext.Provider value={{ user, isAllowed, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}