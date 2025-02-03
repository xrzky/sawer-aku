'use client'

import { createActivityAction } from '@/app/_actions/action-create'
import { Input, Select, SelectItem } from '@heroui/react'
import { useActionState, useState } from 'react'

export const FormCreate = () => {
  const [state, formAction, pending] = useActionState(
    createActivityAction,
    null
  )

  const [nominalValue, setNominalValue] = useState('')
  const [total, setTotal] = useState('')

  const handleNominalChange = (e) => {
    const value = e.target.value
    setNominalValue(value)
    setTotal(value)
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID').format(value)
  }

  return (
    <form
      className="w-full h-fit bg-[#f2f7f5] rounded-lg border-black border-2 shadow-[10px_10px_0_#222] space-y-4 p-4"
      action={formAction}
    >
      <p className="pl-1 font-mono">
        Nominal: <span className="text-red-600">*</span>
      </p>
      <div className="flex items-baseline  ">
        <span className=" pl-1 font-mono">Rp</span>
        <Input
          isRequired
          variant="underlined"
          errorMessage="Masukkan nominal yang ingin diberikan minimal Rp. 1000"
          placeholder="Ketik jumlah dukungan"
          name="nominal"
          type="number"
          className="font-mono flex-1 ml-2"
          value={nominalValue}
          onChange={handleNominalChange}
          min="1000"
        />
      </div>
      <p className="pl-1 font-mono">
        Dari: <span className="text-red-600">*</span>
      </p>
      <Input
        isRequired
        variant="underlined"
        errorMessage="Nama tidak boleh kosong"
        placeholder="Budi"
        name="name"
        type="text"
        className="font-mono"
      />
      <p className="pl-1 font-mono">
        Email: <span className="text-red-600">*</span>
      </p>
      <Input
        isRequired
        variant="underlined"
        errorMessage="Masukkan email kamu"
        placeholder="budi@sawer.aq"
        name="email"
        type="email"
        className="font-mono"
      />
      <p className="pl-1 font-mono">
        Pesan: <span className="text-red-600">*</span>
      </p>
      <Input
        isRequired
        variant="underlined"
        errorMessage="Pesan tidak boleh kosong"
        placeholder="Selamat pagi"
        name="message"
        type="text"
        className="font-mono"
        maxLength="140"
      />
      <Select
        isRequired
        placeholder="Dukungan"
        variant="underlined"
        name="category"
        errorMessage="Dukungan tidak boleh kosong"
      >
        <SelectItem key="dukungan">Dukungan</SelectItem>
      </Select>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <h3 className="text-2xl sm:text-3xl font-mono ">
          Total: Rp {formatCurrency(total)}
        </h3>
        <button className=" bg-[#faae2b]  rounded-lg p-4 sm:p-6  border-black border-2 shadow-[5px_5px_0_#222] hover:shadow-[3px_3px_0_#222] transition-shadow">
          <p className="text-black text-lg font-mono ">Kirim Dukungan</p>
        </button>
      </div>
    </form>
  )
}
