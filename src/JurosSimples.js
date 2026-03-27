import Modal from './components/Modal';
import { NumericFormat } from "react-number-format"
import { useState } from "react"

function JurosSimples() {
  const [result, setResult] = useState("R$ 0,00")
  const [fees, setFees] = useState("R$ 0,00")

  const calculate = () =>{
    /* Dados para o cálculo */
    let taxType = document.getElementById('tax-type').value // Tipo de taxa (mensal ou anual)
    let periodType = document.getElementById('period-type').value // Tipo de período (meses ou anos)
    
    // Valor inicial
    let C = parseFloat(
      document.getElementById('start-value').value
        .replace(/\./g, '')
        .replace(',', '.')
        .replace("R$ ", "")
    )

    // Taxa de juros
    let i = parseFloat(
      document.getElementById('tax').value
        .replace(',', '.')
        .replace(" % ", "")
    ) / 100

    // Período
    let t = parseFloat(document.getElementById('period').value)
    /* ******************** */

    /* Cálculo */
    if((taxType == "Mensal") && (periodType == "Anos")){
      t = t * 12
    }else if((taxType == "Anual") && (periodType == "Meses")){
      i = i/12
    }
    
    let M = C + (C*i*t)

    setResult(Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(M))
    setFees(Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(M - C))
  }

  return (
    <form className="mx-auto mt-10 w-[350px] bg-white rounded-lg shadow-lg border-2 border-gray-200">
      <h2 className="mt-3 text-xl font-bold mb-3">Calculadora de Juros Simples</h2>
      
      <label className="float-start ms-4 font-bold text-gray-700 block">Valor inicial</label><br/>
      <NumericFormat
        className="border p-2 rounded w-[150px] block ms-4 mt-2 mb-4 text-gray-600"
        placeholder="R$ 0,00"
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        id="start-value"
      />

      <label className="float-start ms-4 font-bold text-gray-700 block">Taxa de juros</label><br/>
      <div className="flex items-center pl-3 rounded-md bg-white border-2 border-gray-300 ms-4 w-[160px] mt-2 mb-4">
        <NumericFormat
          className="min-w-0 py-1.5 text-gray-600 placeholder:text-gray-400 focus:outline-none"
          placeholder="0,00 %"
          thousandSeparator="."
          decimalSeparator=","
          suffix=" %"
          decimalScale={2}
          fixedDecimalScale
          id="tax"
        />
        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
          <select id="tax-type" className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-1 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-gray-600">
            <option>Mensal</option>
            <option>Anual</option>
          </select>
          <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
        </div>
      </div>

      <label className="float-start ms-4 font-bold text-gray-700 block">Período</label><br/>
      <div className="flex items-center rounded-md bg-white pl-3 border-2 border-gray-300 ms-4 w-[120px] mt-2 mb-4">
        <NumericFormat
          className="min-w-0 py-1.5 text-gray-600 placeholder:text-gray-400 focus:outline-none"
          placeholder="0"
          decimalScale={0}
          fixedDecimalScale
          id="period"
        />
        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
          <select id="period-type" className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-1 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-gray-600">
            <option>Meses</option>
            <option>Anos</option>
          </select>
          <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
        </div>
      </div>
      <button command="show-modal" commandfor="dialog" type="button" onClick={calculate} className="rounded text-white py-1.5 text-xl bg-purple-700 w-[90%] mb-5 cursor-pointer hover:bg-purple-900">Calcular</button>
      <Modal result={result} fees={fees}/>
    </form>
  )
}

export default JurosSimples
