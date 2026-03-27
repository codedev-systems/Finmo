function HelpModal() {
  return (
    <el-dialog>
	  <dialog id="help-dialog" aria-labelledby="dialog-title" className="w-[100%] md:w-[500px] fixed inset-0 size-auto max-h-none max-w-none bg-transparent">
	    <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75"></el-dialog-backdrop>
	    <div tabindex="0" className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none items-center p-0">
	      <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in my-8 w-full max-w-lg data-closed:translate-y-0 data-closed:scale-95">
	        <div className="bg-white pt-5 pb-4">
	            <div className="mt-1 ml-4 text-left">
	            	<h3 id="dialog-title" className="font-semibold text-gray-900 text-xl">Sobre o Finmo</h3>
	                <p className="text-[15px] text-gray-500 text-justify w-[95%]">O Finmo é uma calculadora financeira online que combina simplicidade, design intuitivo e precisão nos cálculos para ajudar você a tomar decisões financeiras com mais segurança.</p>
				  	<h4 className="font-semibold text-gray-900 text-lg mt-4">Funcionalidades</h4>
					<ul className="list-disc ms-5">
						<li className="text-[15px] text-gray-500 text-justify w-[95%]">Cálculo de juros simples e compostos.</li>
						<li className="text-[15px] text-gray-500 text-justify w-[95%]">Simulação de investimentos em CDB (com desconto automático de IR).</li>
						<li className="text-[15px] text-gray-500 text-justify w-[95%]">Simulação de investimentos em LCI e LCA (isentos de IR).</li>
					</ul>
					<h4 className="font-semibold text-gray-900 text-lg mt-4">Como o Finmo pode te ajudar?</h4>
					<ol className="list-decimal ms-5">
						<li className="text-[15px] text-gray-500 text-justify w-[95%]">Avaliar se uma taxa de juros é realmente vantajosa antes de contratar um crédito.</li>
						<li className="text-[15px] text-gray-500 text-justify w-[95%]">Entender o rendimento real de investimentos em renda fixa.</li>
						<li className="text-[15px] text-gray-500 text-justify w-[95%]">Comparar diferentes opções e tomar decisões mais inteligentes com seu dinheiro.</li>
					</ol>
	            </div>
	        </div>
	        <div className="bg-white px-2 py-2 flex flex-row-reverse">
	          <button type="button" command="close" commandfor="help-dialog" className="w-[50px] rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-900 cursor-pointer">Ok</button>
	        </div>
	      </el-dialog-panel>
        </div>
	  </dialog>
	</el-dialog>
  )
}

export default HelpModal;
