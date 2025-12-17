// frontend/src/components/ui/ThemeTestButton.tsx
import { useTheme } from "../../context/ThemeContext";

export function ThemeTestButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="border p-2 bg-green-200 text-black"
    >
      <span className="dark:hidden">Pulsar para Oscuro</span>
      <span className="hidden dark:inline">Pulsar para Claro</span>
    </button>
  );
}
