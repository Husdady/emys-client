// Librarys
import Link from "next/link";

export default function LinkToRegister() {
  return (
    <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-tight">
      <span className="font-lexend text-[0.91rem] mr-[0.35rem]">¿Aún no tienes una cuenta?</span>

      <Link
        href="/register"
        className="font-semibold text-main-700 dark:!text-main-200 hover:underline"
      >
        Crear cuenta
      </Link>
    </p>
  )
}
