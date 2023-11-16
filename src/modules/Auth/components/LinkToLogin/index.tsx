// Librarys
import Link from "next/link";

export default function LinkToLogin() {
  return (
    <p className="text-sm font-light text-gray-600 dark:text-gray-400 py-1">
      <span className="font-lexend"> ¿Ya tienes una cuenta?</span>

      <Link
        href="/"
        className="ml-[0.35rem] font-semibold text-main-700 dark:text-main-200 hover:underline"
      >
        Iniciar sesión
      </Link>
    </p>
  )
}
