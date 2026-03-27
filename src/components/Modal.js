function Modal({result="R$ 0,00", fees="R$ 0,00", accumulated="R$ 0,00", ir="R$ 0,00"}) {
  return (
    <el-dialog>
	  <dialog id="dialog" aria-labelledby="dialog-title" className="w-[300px] fixed inset-0 size-auto max-h-none max-w-none bg-transparent">
	    <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75"></el-dialog-backdrop>
	    <div tabindex="0" className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none items-center p-0">
	      <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in my-8 w-full max-w-lg data-closed:translate-y-0 data-closed:scale-95">
	        <div className="bg-white pt-5 pb-4">
	            <div className="mt-1 ml-4 text-left">
	              <h3 id="dialog-title" className="text-base font-semibold text-gray-900 text-xl">Resultado</h3>
	              <div className="mt-2">
	                <p className="text-md text-gray-500"><span className="font-bold">Resultado:</span> {result}</p>
					{accumulated !== "R$ 0,00" ? <p className="text-md text-gray-500"><span className="font-bold">Valor acumulado:</span> {accumulated}</p> : <p></p>}
					<p className="text-md text-gray-500"><span className="font-bold">Juros:</span> {fees}</p>
				  	{ir !== "R$ 0,00" ? <p className="text-md text-gray-500"><span className="font-bold">IR:</span> {ir}</p> : <p></p>}
				  </div>
	            </div>
	        </div>
	        <div className="bg-white px-2 py-2 flex flex-row-reverse">
	          <button type="button" command="close" commandfor="dialog" className="w-[50px] rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-900 cursor-pointer">Ok</button>
	        </div>
	      </el-dialog-panel>
        </div>
	  </dialog>
	</el-dialog>
  )
}

export default Modal;
