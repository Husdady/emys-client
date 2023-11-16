// Librarys
import Link from "next/link";

export default function LinkToForgottenEmailRecovery() {
  return (
    <Link
      href="/forgot-email"
      className="text-medium font-medium text-gray-700 dark:text-gray-400 block pb-1 hover:underline dark:hover:text-main-200 font-lexend leading-tight"
    >
      ¿Olvidaste tu correo electrónico?
    </Link>
  )
}
