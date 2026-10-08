
const FlashDeal = () => {
  return (
    <section className="flash-deal px-4 py-8 sm:px-6 lg:px-10 border border-(--border-strong)">
      <div className="mx-auto flex max-w-8xl flex-col gap-6 rounded-3xl border border-(--accent) bg-[#071715] px-5 py-6 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-10 overflow-hidden">
        {/* Deal information */}
        <div>
          <h2 className="text-xl font-semibold leading-tight text-zinc-100 sm:text-3xl lg:text-4xl">
            Flash deal — up to 40% off audio
          </h2>

          <p className="mt-2 text-sm text-zinc-400 sm:text-base">
            Ends tonight. Applies automatically at checkout.
          </p>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <CountdownBox value="04" label="HRS" />
          <CountdownBox value="12" label="MIN" />
          <CountdownBox value="56" label="SEC" />
        </div>

        {/* CTA */}
        <button
          type="button"
          className="w-full rounded-lg bg-(--accent) px-7 py-4 text-base font-medium text-black transition hover:brightness-110 sm:w-auto"
        >
          Shop the deal
        </button>
      </div>
    </section>
  )
}

export default FlashDeal

function CountdownBox({ value, label }: any) {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg border border-zinc-800 bg-[#101719] sm:h-22 sm:w-22">
      <span className="font-mono text-2xl font-semibold text-(--accent)">
        {value}
      </span>

      <span className="mt-1 text-[10px] tracking-widest text-zinc-500">
        {label}
      </span>
    </div>
  )
}
