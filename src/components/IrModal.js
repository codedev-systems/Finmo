function IrModal() {
  return (
    <el-dialog>
	  <dialog id="ir-dialog" aria-labelledby="dialog-title" className="md:w-[500px] fixed inset-0 size-auto max-h-none max-w-none bg-transparent">
	    <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75"></el-dialog-backdrop>
	    <div tabindex="0" className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none items-center p-0">
	      <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in my-8 w-full max-w-lg data-closed:translate-y-0 data-closed:scale-95">
	        <div className="bg-white pt-5 pb-4">
	            <div className="mt-1 ml-4 text-left">
	              <h3 id="dialog-title" className="text-base font-semibold text-gray-900 text-xl">Tabela de Imposto de Renda (CDB)</h3>
	              <div className="mt-2">
                    <table className="w-[97%]">
                        <thead className="md:text-lg text-white bg-purple-800">
                            <tr>
                                <th className="font-semibold ps-2">Prazo</th>
                                <th className="font-semibold">Taxa</th>
                            </tr>
                        </thead>
                        <tbody className="md:text-md text-sm">
                            <tr>
                                <td className="ps-2 py-1">Até 180 dias (6 meses)</td>
                                <td className="text-red-600">22,5%</td>
                            </tr>
                            <tr className="bg-purple-200">
                                <td className="ps-2 py-1">181 a 360 dias (6 meses a 1 ano)</td>
                                <td className="text-red-600">20%</td>
                            </tr>
                            <tr>
                                <td className="ps-2 py-1">361 a 720 dias (1 a 2 anos)</td>
                                <td className="text-red-600">17,5%</td>
                            </tr>
                            <tr className="bg-purple-200">
                                <td className="ps-2 py-1">Mais 720 dias (acima de 2 anos)</td>
                                <td className="text-red-600">15%</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
	            </div>
	        </div>
	        <div className="bg-white px-2 py-2 flex flex-row-reverse">
	          <button type="button" command="close" commandfor="ir-dialog" className="w-[50px] rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-900 cursor-pointer">Ok</button>
	        </div>
	      </el-dialog-panel>
        </div>
	  </dialog>
	</el-dialog>
  )
}

export default IrModal;
