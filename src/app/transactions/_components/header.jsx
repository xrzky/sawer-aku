import Link from 'next/link'

export const HeaderTransactions = () => {
  return (
    <div className=" flex justify-between items-center">
      <Link href="/">
        <div className="w-18 cursor-pointer">
          <div className=" bg-[#b2e0e6]  rounded-lg p-2  border-black border-2 shadow-[4px_4px_0_#222] hover:shadow-[1px_1px_0_#222] transition-shadow">
            <div className="flex gap-2 justify-center items-center ">
              <p className="text-black text-lg font-mono ">Back</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="w-28 cursor-pointer">
        <div className=" bg-[#b2e0e6]  rounded-lg p-4  border-black border-2 shadow-[5px_5px_0_#222]">
          <div className="flex gap-2 justify-center items-center ">
            <p className="text-black text-lg font-mono ">Login</p>
          </div>
        </div>
      </div>
    </div>
  )
}
