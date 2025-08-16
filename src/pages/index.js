import { Poppins } from "next/font/google";
import { Navbar } from '../components/Navbar';
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { SiIfood } from "react-icons/si";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
  <div className={poppins.className}>
    <Navbar />
    <main className="bg-image">
      <section id="home">
          <div id="texto_home">
              <h1 className="title">
                  Comida que abraça e<br/>
                  <span>enche o bucho!</span>
              </h1>
              <p className="description font-[400]">
                  Restaurante que tem um tempero de voinha e te faz reviver lembranças inesquecíveis
              </p>
          </div>
      </section>

      <section id="sobre" className="w-full mx-auto flex gap-[5rem] justify-center items-center max-[1200px]:flex-col">
        <section className="dados-sobre">
          <h1 className="mb-5 font-[400] text-2xl max-[600px]:mx-auto max-[600px]:mb-5">Conheça nossa história</h1>
              <p className="text-justify font-[400]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet magnam corporis tempora ipsam odit atque esse in, ullam quidem assumenda voluptas quae. Suscipit earum saepe laudantium non, quam natus reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci provident neque iure, dignissimos ex in enim. Ratione iste voluptate eligendi, voluptatum quasi optio nisi, soluta quo libero necessitatibus distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis modi voluptas reiciendis consequuntur sapiente? Eligendi ducimus tempore sed cumque veritatis quis, recusandae, quo vitae id est corporis itaque pariatur?</p>
              <div className="botao-sobre">
                <Link href="/sobre" id="saibaMaisLink">
                  <button id="saibaMaisButton" className="button-menu center mt-8 px-6 py-3 bg-[#ffa500] text-white rounded-xl shadow-md hover:bg-[#ff8c00] transition flex items-center">
                    <span id="saibaMaisText">Saiba mais</span>
                    <svg id="saibaMaisSpinner" className="hidden mr-3 size-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
                      <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"/>
                    </svg>
                  </button>
                </Link>
              </div>
        </section>
        <img src="./images/ambiente.jpg" className="flex-1 max-[1200px]:w-[500px] max-[600px]:hidden mt-[-60px]" alt="foto da descrição"/>
      </section>
      
      <section id="cardapio-index" className="flex flex-col items-center justify-center w-full bg-[#3B1F11]">
        <h2 className="section-title">Cardápio</h2>
        <h3 className="section-subtitle">Nossos pratos especiais</h3>
        <div id="dishes">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white shadow-lg rounded-2xl p-4">
                <img src="./images/cuscuz_paraibaOK.jpg" alt="Nome do Prato" className="w-full h-48 object-cover rounded-xl"/>
                <div className="mt-4">
                  <h2 className="font-[xilosa] text-center text-3xl font-semibold text-[#ffa500]">Cuscuz Paraíba</h2>
                  <p className="text-center text-gray-500 mt-2">O Cuscuz Paraíba vem com uma porção recheada de nossa carne de sol na nata pra encher buxo de mininin</p>
                  <div className="mt-3 flex justify-center items-center">
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow-lg rounded-2xl p-4">
                <img src="./images/pure_calabresaOK.jpg" alt="Nome do Prato" className="w-full h-48 object-cover rounded-xl"/>
                <div className="mt-4">
                  <h2 className="font-[xilosa] text-center text-3xl font-semibold text-[#ffa500]">Purê Calabresa</h2>
                  <p className="text-center text-gray-500 mt-2">O Purê de macaxeira com calabresa acebolada é sem igual em sua cremosidade e sabor</p>
                  <div className="mt-3 flex justify-center items-center">
                  </div>
                </div>
              </div>
        
              <div className="bg-white shadow-lg rounded-2xl p-4">
                <img src="./images/cartolaOK.jpg" alt="Nome do Prato" className="w-full h-48 object-cover rounded-xl"/>
                <div className="mt-4">
                  <h2 className="font-[xilosa] text-center text-3xl font-semibold text-[#ffa500]">Cartola Especial</h2>
                  <p className="text-center text-gray-500 mt-2">A Cartola Especial é a nossa sobremesa queridinha, uma releitura da famosa cartola nordestina com um toque especial surpreendente</p>
                  <div className="mt-3 flex justify-center items-center">
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-4">
                <img src="./images/tapioca_joaopessoaOK.jpg" alt="Nome do Prato" className="w-full h-48 object-cover rounded-xl"/>
                <div className="mt-4">
                  <h2 className="font-[xilosa] text-center text-3xl font-semibold text-[#ffa500]">João Pessoa</h2>
                  <p className="text-center text-gray-500 mt-2">A Tapioca João Pessoa traz o clássico frango com catupiry, mas com um tempero sem igual que deixa tudo muito mais gostoso</p>
                  <div className="mt-3 flex justify-center items-center">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/cardapio" id="verMaisLink">
            <button id="verMaisButton" className="button-menu px-6 py-3 bg-[#ffa500] text-white rounded-xl shadow-md hover:bg-[#ff8c00] transition">
              <span id="verMaisText">Ver mais</span>
              <svg id="verMaisSpinner" className="hidden mr-3 size-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
                <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"/>
              </svg>
            </button>
          </Link>
        </div>      
      </section>

      <section id="contato-mix" className="flex flex-1 items-center justify-center content-end gap-[3rem] max-[900px]:flex-wrap">
        <div id="contatos">
          <h1>Fale com a gente</h1>
          <p>Ficou com água na boca? Faz a tua avaliação mininu!</p>
            
          <form className="max-w-md mx-auto my-5">
            <div className="grid md:grid-cols-2 md:gap-6 my-5">
              <div className="relative z-0 w-full mb-5 group">
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Telefone</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail</label>
              </div>
              </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Primeiro Nome</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Último Nome</label>
              </div>
            </div>
          </form>
          
          <form className="max-w-sm mx-auto">
            <label for="message" className="block mb-2 text-sm font-ligth text-gray-900 dark:text-gray">Sua mensagem</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva seu comentário..."></textarea>
            
            <button type="submit" id="submitButton" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <span id="submitText">Enviar</span>
              <svg id="submitSpinner" className="hidden mr-3 size-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
                <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"/>
              </svg>
            </button>    
          </form>
          
          <h3 className="mt-5">Nossas redes sociais:</h3>
          <div className="flex gap-8 mt-6">
            <Link href="https://www.instagram.com/mixarretadojp/" className="flex items-center justify-center w-10 h-10 text-[1.3rem] rounded text-black no-underline hover:shadow-[0_0_12px_2px_rgb(198,198,198)]" id="instagram">
              <FaInstagram />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5583988763045" className="flex items-center justify-center w-10 h-10 text-[1.3rem] rounded text-black no-underline hover:shadow-[0_0_12px_2px_rgb(198,198,198)]" id="whatsapp">
              <FaWhatsapp />
            </Link>
            <Link href="https://www.ifood.com.br/delivery/joao-pessoa-pb/mix-arretado-estados/478e9723-415f-40a9-b411-cdf5f9f02cac" className="flex items-center justify-center w-10 h-10 text-[1.3rem] rounded text-black no-underline hover:shadow-[0_0_12px_2px_rgb(198,198,198)]" id="whatsapp">
              <SiIfood />
            </Link>
          </div>
        </div>

        <iframe 
          className="h-[40vh] rounded-[80px] p-[50px] max-[900px]:mx-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.135361913827!2d-34.85584978839006!3d-7.11030779286354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd5b93f6e4d3%3A0x4a4bb4519122b763!2sMix%20Arretado!5e0!3m2!1spt-BR!2sbr!4v1738957215529!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mix Arretado Location"
        />
      </section>
    </main>
    <footer className="bg-black w-full">
      <p className="text-[#F0F8FF] text-center">
        © Mix Arretado. Todos os direitos reservados.
      </p>
    </footer>
  </div>
  );
}
