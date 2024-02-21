export interface LoadingProps {
  title: string
}

export default function Loading({ title }: LoadingProps) {
  return (
    <section className="pretty-loading w-full relative flex items-center justify-center flex-col h-[100vh]">
      <div className="grid custom-loader w-[26px] h-[26px] text-gray-800 dark:text-gray-300"></div>
      <h5 className="mb-0 text font-poppins leading-tight text-[1rem] max-w-[160px] text-center mt-3">
        {title}
      </h5>
    </section>
  )
}
