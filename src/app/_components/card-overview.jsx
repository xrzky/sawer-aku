export const CardOverview = async () => {
  const res = await fetch('https://v1.appbackend.io/v1/rows/ddsk0krRFzUf')
  const { data } = await res.json()

  const allNominal = data.reduce((acc, item) => acc + item.nominal, 0)
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="w-full bg-[#fac76c]  rounded-lg md:h-72 h-64  border-black border-2 shadow-[10px_10px_0_#222] ">
          <div className="p-6 md:p-8 space-y-2 md:space-y-6">
            <h3 className="font-mono text-black text-2xl md:text-2xl lg:text-4xl">
              Rp {allNominal.toLocaleString().replace(/,/g, '.')}
            </h3>
            <p className="font-mono text-black text-base md:text-lg lg:text-xl">
              Angka di atas adalah total saldo kamu. Setiap transaksi harus
              menunggu 3 hari untuk bisa dicairkan.
            </p>
          </div>
        </div>
        <div className="w-full bg-[#b2e0e6]  rounded-lg md:h-72 h-64  border-black border-2 shadow-[10px_10px_0_#222]">
          <div className="p-6 md:p-8 space-y-2 md:space-y-6">
            <h3 className="font-mono text-black text-2xl md:text-2xl lg:text-4xl">
              Rp 1.000.000.000.000
            </h3>
            <p className="font-mono text-black xl:text-xl lg:text-base">
              Angka di atas adalah total saldo target kita yang jadi kenyataan
              di masa depan. Aamiin....
            </p>
            <div className="w-20 sm:w-24 cursor-pointer">
              <div className=" bg-[#faae2b]  rounded-lg p-2  border-black border-2 shadow-[5px_5px_0_#222] ">
                <div className="flex gap-2 justify-center items-center ">
                  <p className="text-black text-sm md:text-lg font-mono ">
                    Cairkan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
