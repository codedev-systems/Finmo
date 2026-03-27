import Modal from './components/Modal';
import { NumericFormat } from "react-number-format"
import { useState } from "react"

function LCI() {
  const [result, setResult] = useState("R$ 0,00")
  const [fees, setFees] = useState("R$ 0,00")
  const [accumulated, setAccumulated] = useState("R$ 0,00")
  const [type, setType] = useState("Pré-fixado")
  const [cdi, setCdi] = useState("14.9")

  const getCdi = () =>{
    const actualDate = new Date();
    const yesterday = (actualDate.getDate()-1)+"/"+String(actualDate.getMonth()+1).padStart(2, '0')+"/"+actualDate.getFullYear();
    
    fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados?formato=json&dataInicial='+yesterday)
    .then(response => response.json()) // Converte a resposta em JSON
    .then(data => {
      let cdi = Number(data[0].valor) / 100
      cdi = Math.pow(1 + cdi, 252) - 1
      setCdi((cdi*100).toFixed(2))
    }) // Faz algo com os dados
    
  }

  const calculate = () =>{
    /* Dados para o cálculo */
    let periodType = document.getElementById('period-type').value // Tipo de período (meses ou anos)
    let cdiMonth = Math.pow(1 + 0.149, 1/12) - 1

    // Valor inicial
    let C = parseFloat(
      document.getElementById('start-value').value
        .replace(/\./g, '')
        .replace(',', '.')
        .replace("R$ ", "")
    )

    // Aporte mensal
    let A = parseFloat(
      document.getElementById('month-value').value
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
    let t = parseInt(document.getElementById('period').value)
    /* ******************** */

    /* Cálculo */
    if (periodType === "Anos") t = t * 12

    if(type === "Pré-fixado"){
        i = Math.pow(1 + i, 1/12) - 1
    }else{
        i = i*cdiMonth  
    }
    let M = C * Math.pow((1 + i), t)

    // Aportes mensais
    if (A) {
        if (i === 0) {
            M += A * t;
        } else {
            M += A * ((Math.pow(1 + i, t) - 1) / i);
        }
    }

    setAccumulated(Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(C + (A ? A * t : 0)))
    setFees(Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(M-(C + (A ? A * t : 0))))
    setResult(Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(M))
  }

  return (
    <form className="mx-auto mt-10 w-[350px] bg-white rounded-lg shadow-lg border-2 border-gray-200">
      <h2 className="mt-3 text-xl font-bold mb-3">Calculadora de LCI/LCA</h2>
      
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

      <label className="float-start ms-4 font-bold text-gray-700 block">Aporte mensal</label><br/>
      <NumericFormat
        className="border p-2 rounded w-[150px] block ms-4 mt-2 mb-4 text-gray-600"
        placeholder="R$ 0,00"
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        id="month-value"
      />

      <label className="float-start ms-4 font-bold text-gray-700 block">Tipo</label><br/>
      <div className="grid shrink-0 grid-cols-1 focus-within:relative rounded-md bg-white border-2 border-gray-300 ms-4 w-[120px] mt-2 h-[40px]">
          <select id="cdb-type" className="col-start-1 row-start-1 w-full appearance-none py-1.5 pr-7 pl-1 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-gray-600" onChange={(e)=>{setType(e.target.value); if (type == "Pós-fixado") getCdi()}}>
            <option>Pré-fixado</option>
            <option>Pós-fixado</option>
          </select>
          <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
        </div>
      {type === "Pós-fixado" ? <p className="text-[12px] text-red-500 float-start ms-4 w-[100%] text-start mt-[5px]">* Último CDI: {cdi.replace(".", ",")}% ao ano</p> : <p></p>}
      
      <label className="float-start ms-4 font-bold text-gray-700 block w-[100%] text-start mt-4">Rendimento</label><br/>
      <NumericFormat
          className="border p-2 rounded w-[150px] block ms-4 mt-2 mb-4 text-gray-600"
          placeholder={type === "Pré-fixado" ? " % ao ano" : " % do CDI"}
          thousandSeparator="."
          decimalSeparator=","
          suffix={type === "Pré-fixado" ? " % ao ano" : " % do CDI"}
          decimalScale={2}
          fixedDecimalScale
          id="tax"
        />

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
      <Modal result={result} fees={fees} accumulated={accumulated}/>
    </form>
  );
}

export default LCI;