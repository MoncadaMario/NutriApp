import { Stack } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function RootLayout() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <AuthProvider>
                    <LanguageProvider>
                        <Stack
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            {/* Define la ruta inicial aquí */}
                            <Stack.Screen name="login" /> {/* Asegúrate de que "login" sea la ruta correcta */}
                        </Stack>
                    </LanguageProvider>
                </AuthProvider>
            </ThemeProvider>
        </Provider>
    );
}