import Image from "next/image";
import { Poppins } from "next/font/google";
import { Navbar } from '../../components/Navbar';
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "400", "700", "800"],
  subsets: ["latin"],
});

export default function Cardapio() {
    const [pratos, setPratos] = useState([]);
    const [filteredPratos, setFilteredPratos] = useState([]);
    const [loading, setLoading] = useState(true);

    function filterMenu(categoria) {
        if(categoria === 'all') {
            setFilteredPratos(pratos);
        }
        else {
            setFilteredPratos(pratos.filter(prato => prato.categoria === categoria));
        }
    }

    useEffect(()=>{
        async function fetchPratos() {
            const pratoResponse = await fetch("/api/pratos");
            const pratosData = await pratoResponse.json();
            setPratos(pratosData);
            setFilteredPratos(pratosData);
            setLoading(false);
        }
    
        fetchPratos();
    },[])
    
    return (
        <div className={poppins.className}>
            <Navbar />
            <h1 className="p-4 font-[xilosa] mt-[100px] font-medium text-center text-[#3B1F11] text-7xl">Conheça nosso Cardápio</h1>
            
            <div className="text-center md:hidden">
                <button id="menu-toggle" className="bg-[#FFA500] text-black-500 px-5 py-2 rounded-full">☰ Filtrar</button>
            </div>
            <div id="category-menu" className="hidden md:flex text-center items-center justify-center py-4 md:py-8 flex-wrap">
                <button onClick={() => filterMenu('all')} type="button" className="category-btn text-gray-900 border border-white hover:border-[white] hover:bg-[#FB923C] dark:border-[white] dark:bg-[orange] dark:hover:border-[white] bg-white focus:ring-4 focus:outline-none focus:ring-[white] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-[#FB923C] dark:focus:bg-[#FB923C]">Todos</button>
                <button onClick={() => filterMenu('cuscuz')} type="button" className="category-btn text-gray-900 border border-white hover:border-[white] hover:bg-[#FB923C] dark:border-[white] dark:bg-[orange] dark:hover:border-[white] bg-white focus:ring-4 focus:outline-none focus:ring-[white] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-[#FB923C] dark:focus:bg-[#FB923C]">Cuscuz</button>
                <button onClick={() => filterMenu('tapiocas arretadas')} type="button" className="category-btn text-gray-900 border border-white hover:border-[white] hover:bg-[#FB923C] dark:border-[white] dark:bg-[orange] dark:hover:border-[white] bg-white focus:ring-4 focus:outline-none focus:ring-[white] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-[#FB923C] dark:focus:bg-[#FB923C]">Tapiocas Arretadas</button>
                <button onClick={() => filterMenu('tapioquinhas')} type="button" className="category-btn text-gray-900 border border-white hover:border-[white] hover:bg-[#FB923C] dark:border-[white] dark:bg-[orange] dark:hover:border-[white] bg-white focus:ring-4 focus:outline-none focus:ring-[white] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-[#FB923C] dark:focus:bg-[#FB923C]">Tapioquinhas</button>
                <button onClick={() => filterMenu('jantar')} type="button" className="category-btn text-gray-900 border border-white hover:border-[white] hover:bg-[#FB923C] dark:border-[white] dark:bg-[orange] dark:hover:border-[white] bg-white focus:ring-4 focus:outline-none focus:ring-[white] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-[#FB923C] dark:focus:bg-[#FB923C]">Jantar</button>
                <button onClick={() => filterMenu('sanduíches')} type="button" className="category-btn text-gray-900 border border-white hover:border-[white] hover:bg-[#FB923C] dark:border-[white] dark:bg-[orange] dark:hover:border-[white] bg-white focus:ring-4 focus:outline-none focus:ring-[white] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-[#FB923C] dark:focus:bg-[#FB923C]">Sanduíches</button>
                <button onClick={() => filterMenu('pastéis')} type="button" className="category-btn text-gray-900 border border-white hover:border-[white] hover:bg-[#FB923C] dark:border-[white] dark:bg-[orange] dark:hover:border-[white] bg-white focus:ring-4 focus:outline-none focus:ring-[white] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-[#FB923C] dark:focus:bg-[#FB923C]">Pastéis</button>
                <button onClick={() => filterMenu('sobremesas')} type="button" className="category-btn text-gray-900 border border-white hover:border-[white] hover:bg-[#FB923C] dark:border-[white] dark:bg-[orange] dark:hover:border-[white] bg-white focus:ring-4 focus:outline-none focus:ring-[white] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-[#FB923C] dark:focus:bg-[#FB923C]">Sobremesas</button>
                <button onClick={() => filterMenu('bebidas')} type="button" className="category-btn text-gray-900 border border-white hover:border-[white] hover:bg-[#FB923C] dark:border-[white] dark:bg-[orange] dark:hover:border-[white] bg-white focus:ring-4 focus:outline-none focus:ring-[white] rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-black dark:focus:ring-[#FB923C] dark:focus:bg-[#FB923C]">Bebidas</button>
            </div>

            <div className="container mx-auto p-4">
                <div id="menu" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        filteredPratos?.map(prato => 
                            <div data-category={prato.categoria} class="menu-item bg-white shadow-lg rounded-2xl p-4 transition delay-100 duration-150 ease-in hover:scale-105">
                                <img src={prato.imagem} alt={`${prato.categoria} ${prato.nome}`} class="w-full h-48 object-cover rounded-xl" />
                                <div class="mt-4">
                                    <h2 class="font-[xilosa] text-center text-3xl font-semibold text-orange-400">{prato.nome}</h2>
                                    <p class="text-center text-gray-500 mt-2">{prato.descricao}</p>
                                    <div class="mt-3 flex justify-center items-center">
                                        <span class="font-[xilosa] text-2xl font-bold text-orange-400">R$ {prato.preco}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                { loading && 
                <div className="flex justify-center items-center w-full h-full">
                    <OrbitProgress color="#FFA500" size="medium" />
                </div>
                }
            </div>
        </div>
    );
}
