
const Restock = () => {
  return (
    <section className="restock-alert px-4 py-10 sm:px-6 lg:px-10 lg:py-14 border border-(--border-strong)">
      <div className="mx-auto flex max-w-8xl flex-col gap-6 rounded-3xl border border-zinc-800 bg-[#15181c] px-6 py-8 sm:px-8 sm:py-15 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-zinc-100 sm:text-3xl">
            Get restock alerts + 10% off
          </h2>

          <p className="mt-2 text-base text-zinc-400 sm:text-lg">
            Join the list — no spam, just drops and deals.
          </p>
        </div>

        {/* Form */}
        <form className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-150">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@email.com"
            className="min-w-0 flex-1 rounded-lg border border-zinc-800 bg-[#090b0d] px-6 py-4 text-base text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-(--accent)"
          />

          <button
            type="submit"
            className="rounded-lg bg-(--accent) px-7 py-4 font-medium text-black transition hover:brightness-110"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Restock
