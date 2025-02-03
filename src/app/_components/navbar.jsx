import { Avatar } from './avatar'

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-baseline">
        <img
          src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage_characters.a1cf6cc4.svg&w=3840&q=75"
          alt="logo"
          className="lg:w-[80] lg:h-[80] hidden md:block "
          width={120}
          height={120}
        />
        <h3 className="font-mono text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
          saweraqu.
        </h3>
      </div>
      <div className="w-32 md:w-48">
        <div className=" bg-[#f2f7f5]  rounded-lg p-4  border-black border-2 shadow-[6px_6px_0_#222]">
          <div className="flex gap-2 justify-center items-center ">
            <Avatar />
            <p className="text-black text-xs sm:text-lg font-mono ">
              Anonymous
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
