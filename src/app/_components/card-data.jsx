import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { TransactionDelete } from './transaction-delete'

export const CardData = async () => {
  const res = await fetch('https://v1.appbackend.io/v1/rows/ddsk0krRFzUf')
  const { data } = await res.json()
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 pt-14 sm:pt-16 ">
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="group bg-[#f2f7f5] rounded-lg h-60 border-black border-2 shadow-[10px_10px_0_#222] space-y-4 hover:shadow-[8px_8px_0_#222] transition-shadow duration-200"
            >
              <div className="relative hidden group-hover:block ">
                <div className="absolute right-4 space-x-6 top-2 flex items-center">
                  <Link href={`/transactions/${item._id}`}>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                  </Link>
                  <TransactionDelete id={item._id} />
                </div>
              </div>
              <div className="flex py-10 pl-4 pr-10 space-x-4 justify-between">
                <div className="md:space-y-4 space-y-2">
                  <h5 className="text-xs sm:text-lg capitalize">
                    {item.category}
                  </h5>
                  <h3 className="font-semibold text-base sm:text-2xl md:text-4xl">
                    {item.nominal.toLocaleString().replace(/,/g, '.')}
                  </h3>
                  <p className="italic text-xs sm:text-base tracking-tight">
                    {item.date}
                  </p>
                </div>
                <div className="space-y-2 md:w-1/2 w-full">
                  <h3 className="font-bold text-sm sm:text-base">
                    {item.name}
                  </h3>
                  <p className="italic sm:text-base text-xs tracking-tight break-words">
                    {item.email}
                  </p>
                  <p className="italic tracking-tight overflow-y-auto max-h-20">
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
