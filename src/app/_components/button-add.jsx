import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'

export const ButtonAddTransaction = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="xl:text-3xl lg:text-2xl font-mono">Daftar Transaksi:</h3>
        <Link href="/transactions">
          <div className=" bg-[#b2e0e6] rounded-lg p-4  border-black border-2 shadow-[5px_5px_0_#222] hover:shadow-[3px_3px_0_#222] transition-shadow ">
            <p className="text-black text-base sm:text-lg font-semibold font-mono ">
              Mau nyawer?
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
