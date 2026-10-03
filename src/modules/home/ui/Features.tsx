import { Lock, RotateCwClock, Shield, Van } from 'lucide-react'

const Features = () => {
  return (
    <section className="four-features">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        <div className="flex justify-center border border-(--border-strong) p-5">
          <div className=" flex justify-end items-center mr-5">
            <Van color="var(--accent)" size={35} />
          </div>

          <div className="flex flex-col gap-0 justify-center">
            <span>Free Shipping</span>
            <span className="text-(--text-secondary)">On orders over $49</span>
          </div>
        </div>
        <div className="flex justify-center border border-(--border-strong) p-5">
          <div className=" flex justify-end items-center mr-5">
            <Shield color="var(--accent)" size={35} />
          </div>

          <div className="flex flex-col justify-center">
            <span>2-years warranty</span>
            <span className="text-(--text-secondary)">On most accessories</span>
          </div>
        </div>
        <div className="flex justify-center border border-(--border-strong) p-5">
          <div className=" flex justify-end items-center mr-5">
            <RotateCwClock color="var(--accent)" size={35} />
          </div>

          <div className="flex flex-col gap-0 justify-center">
            <span>30 - day returns</span>
            <span className="text-(--text-secondary)">No questions asked</span>
          </div>
        </div>
        <div className="flex justify-center border border-(--border-strong) p-5">
          <div className=" flex justify-end items-center mr-5">
            <Lock color="var(--accent)" size={35} />
          </div>

          <div className="flex flex-col gap-0 justify-center">
            <span>Secure checkout</span>
            <span className="text-(--text-secondary)">256-bit encryption</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
