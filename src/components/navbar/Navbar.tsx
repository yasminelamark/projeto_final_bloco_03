import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (

        <div className='
            w-full 
            bg-slate-800  
            text-white 
            flex 
            justify-center 
            py-4
        '>
            <div className="
                container 
                flex 
                justify-between 
                text-lg
            ">
                <div>
                    <img
                        src="https://cdn.discordapp.com/attachments/1213109662677737511/1245346037259042838/a0zcXqK.png?ex=66586a60&is=665718e0&hm=22b621d47d6e0409eecdaaf8e589c6ed4f3748cb3f2a21216d196f0db4cb447b&"
                        alt="Logo"
                        className='w-60'
                    />
                </div>

                <div className="flex-1 flex justify-center items-center relative w-30 text-black">
                    <form>
                        <input className="h-9 w-90 rounded-lg px-4 py-4 focus:outline-none"
                            type="search"
                            placeholder="Pesquisar produto"
                            id="busca"
                            name="busca"
                            required
                        />
                        <button type="submit" className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                            <MagnifyingGlass size={14} weight="bold" />
                        </button>
                    </form>
                </div>

                <div className='flex gap-4 py-7'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    <User size={32} weight='bold' />
                    <ShoppingCart size={32} weight='bold' />
                </div>
                
            </div>
        </div>
    )
}

export default Navbar