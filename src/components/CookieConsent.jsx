import { useState } from 'react';

const STORAGE_KEY = 'goberautomate_cookies_accepted';

function CookieConsent() {
    const [visible, setVisible] = useState(() => {
        return !localStorage.getItem(STORAGE_KEY);
    });

    const handleAccept = () => {
        localStorage.setItem(STORAGE_KEY, 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
            <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                    <p className="text-sm text-gray-300">
                        Este sitio utiliza cookies para mejorar tu experiencia. Al continuar, aceptas nuestra{' '}
                        <a href="/cookies.html" className="underline text-indigo-400 hover:text-indigo-300">política de cookies</a>{' '}
                        y{' '}
                        <a href="/privacidad.html" className="underline text-indigo-400 hover:text-indigo-300">política de privacidad</a>.
                    </p>
                </div>
                <button
                    onClick={handleAccept}
                    className="shrink-0 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors cursor-pointer">
                    Aceptar
                </button>
            </div>
        </div>
    );
}

export default CookieConsent;
