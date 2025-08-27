import { Poppins } from "next/font/google";
import { Navbar } from "../../components/Navbar";
import Head from "next/head";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Sobre() {
  return (
    <div className={poppins.className}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <Navbar />
      <section class="min-h-screen flex flex-col justify-center p-16 pt-32 md:mx-24">
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-7xl mt-32">
          <li class="animate__animated animate__fadeInLeft">
            <div class="timeline-middle"></div>
            <div class="timeline-start mb-10 md:text-end">
              <div class="flex flex-col md:flex-row items-center md:items-center gap-6">
                <div class="text-center md:text-end">
                  <time class="font-poppins text-center text-xl">
                    João Pessoa - 2021
                  </time>
                  <div class="font-[xilosa] text-5xl text-center md:text-7xl md:text-end text-[#ffa500]">
                    O Sonho de um Tempero
                  </div>

                  <div class="md:flex md:flex-row grid grid-cols-[auto,1fr] md:items-center md:gap-x-8">
                    <img
                      src="/images/logo3.png"
                      alt="2021"
                      class="w-60 h-auto rounded shadow-lg mx-[auto]"
                    />
                    <p class="my-4 text-lg text-justify">
                      Tudo começou com uma faísca de saudade e uma panela cheia
                      de paixão. Em 2021, o Mix Arretado nasceu de um sonho:
                      resgatar as receitas de família e compartilhar o
                      verdadeiro sabor da culinária nordestina. Cada prato era
                      um teste, cada tempero uma memória, e cada aroma a
                      promessa de trazer para João Pessoa um lugar que fosse
                      mais que um restaurante, um pedaço do nosso sertão. A
                      missão era clara: servir comida com história, afeto e
                      aquele aconchego que só a nossa terra tem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li class="animate__animated animate__fadeInRight">
            <hr />
            <div class="timeline-middle"></div>
            <div class="timeline-end mb-10 md:text-start">
              <div class="flex flex-col md:flex-row-reverse items-center md:items-center gap-6">
                <div class="text-center md:text-start">
                  <time class="font-poppins text-center text-xl">2022</time>
                  <div class="font-[xilosa] text-5xl text-center md:text-7xl md:text-start text-[#ffa500]">
                    Portas Abertas
                  </div>

                  <div class="md:flex md:flex-row grid grid-cols-[auto,1fr] md:items-center md:gap-x-8">
                    <img
                      src="/images/logo3.png"
                      alt="2022"
                      class="w-60 h-auto rounded shadow-lg mx-[auto] md:order-2"
                    />

                    <p class="my-4 text-lg text-justify md:order-1">
                      O sonho ganhou um endereço! Em 2022, abrimos oficialmente
                      as nossas portas e o cheiro da carne de sol na nata e do
                      baião de dois fresquinho tomou conta do ar. Os primeiros
                      clientes chegaram, e com eles, a certeza de que estávamos
                      no caminho certo. Os desafios foram muitos, mas a alegria
                      de ver as mesas cheias e os sorrisos em cada rosto nos deu
                      a força para crescer. Deixamos de ser apenas uma ideia e
                      nos tornamos parte da comunidade, um ponto de encontro
                      para amigos e famílias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
        </ul>
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-7xl">
          <li class="animate__animated animate__fadeInLeft">
            <div class="timeline-middle"></div>
            <div class="timeline-start mb-10 md:text-end">
              <div class="flex flex-col md:flex-row items-center md:items-center gap-6">
                <div class="text-center md:text-end">
                  <time class="font-poppins text-center text-xl">2024</time>
                  <div class="font-[xilosa] text-5xl text-center md:text-7xl md:text-end text-[#ffa500]">
                    O Sabor que Conquista
                  </div>

                  <div class="md:flex md:flex-row grid grid-cols-[auto,1fr] md:items-center md:gap-x-8">
                    <img
                      src="/images/logo3.png"
                      alt="2024"
                      class="w-60 h-auto rounded shadow-lg mx-[auto]"
                    />
                    <p class="my-4 text-lg text-justify">
                      O tempero fez fama! O Mix Arretado se consolidou como uma
                      referência de sabor e tradição na cidade. Nossos pratos
                      icônicos, preparados com ingredientes frescos e muito
                      carinho, conquistaram os paladares mais exigentes. Nossa
                      equipe cresceu, sempre unida pelo orgulho de representar a
                      riqueza da nossa gastronomia. Mais do que clientes,
                      construímos uma grande família de "arretados" que nos
                      inspira todos os dias a manter a qualidade e o atendimento
                      que nos tornaram conhecidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li class="animate__animated animate__fadeInRight">
            <hr />
            <div class="timeline-middle"></div>
            <div class="timeline-end mb-10 md:text-start">
              <div class="flex flex-col md:flex-row-reverse items-center md:items-center gap-6">
                <div class="text-center md:text-start">
                  <time class="font-poppins text-center text-xl">
                    2025 e além...
                  </time>
                  <div class="font-[xilosa] text-5xl text-center md:text-7xl md:text-start text-[#ffa500]">
                    Novos Capítulos, a Mesma Essência
                  </div>

                  <div class="md:flex md:flex-row grid grid-cols-[auto,1fr] md:items-center md:gap-x-8">
                    <img
                      src="/images/logo3.png"
                      alt="2021"
                      class="w-60 h-auto rounded shadow-lg mx-[auto] md:order-2"
                    />

                    <p class="my-4 text-lg text-justify md:order-1">
                      Nossa jornada está só começando! Olhamos para o futuro com
                      gratidão por tudo que construímos e com a energia renovada
                      para escrever novos capítulos dessa história.
                      Continuaremos a honrar nossas raízes, inovando sem jamais
                      perder a nossa essência: o sabor autêntico e o calor
                      humano. Nossa maior inspiração é você, nosso cliente e
                      amigo. O Mix Arretado é e sempre será a sua casa. Venha
                      fazer parte do que está por vir!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </section>
      <footer className="bg-black w-full">
        <p className="text-[#F0F8FF] text-center">
          © Mix Arretado. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
