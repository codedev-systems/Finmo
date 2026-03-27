import HelpModal from './HelpModal';
import IrModal from './IrModal';

function Menu(){
  return (
    <section id="menu" className="h-screen bg-purple-600">
        <nav className="flex flex-col">
            <a href="/" className={window.location.pathname == "/" ? "bg-white text-purple-700 font-bold py-3 px-4 border-b-4 border-gray-400" : "bg-purple-700 hover:bg-white text-white hover:text-purple-700 font-bold py-3 px-4 border-b-4 border-purple-800 hover:border-gray-400"}>Juros Simples</a>
            <a href="/juros-compostos" className={window.location.pathname == "/juros-compostos" ? "bg-white text-purple-700 font-bold py-3 px-4 border-b-4 border-gray-400" : "bg-purple-700 hover:bg-white text-white hover:text-purple-700 font-bold py-3 px-4 border-b-4 border-purple-800 hover:border-gray-400"}>Juros Compostos</a>
            <a href="/cdb" className={window.location.pathname == "/cdb" ? "bg-white text-purple-700 font-bold py-3 px-4 border-b-4 border-gray-400" : "bg-purple-700 hover:bg-white text-white hover:text-purple-700 font-bold py-3 px-4 border-b-4 border-purple-800 hover:border-gray-400"}>CDB</a>
            <a href="/lci-lca" className={window.location.pathname == "/lci-lca" ? "bg-white text-purple-700 font-bold py-3 px-4 border-b-4 border-gray-400" : "bg-purple-700 hover:bg-white text-white hover:text-purple-700 font-bold py-3 px-4 border-b-4 border-purple-800 hover:border-gray-400"}>LCI/LCA</a>
            <button command="show-modal" commandfor="ir-dialog" type="button" className="bg-purple-700 hover:bg-white text-white hover:text-purple-700 font-bold py-3 px-4 border-b-4 border-purple-800 hover:border-gray-400">Tabela de IR</button>
            <button command="show-modal" commandfor="help-dialog" type="button" className="bg-white text-purple-700 font-bold py-3 px-4 border-b-4 border-gray-400">?</button>
        </nav>
        <HelpModal/>
        <IrModal/>
    </section>
  )
}

export default Menu;