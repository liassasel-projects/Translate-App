import Hero from  '../app/assets/images/hero_img.jpg';

// image = https://i.ibb.co/Jj2JhMh/hero-img.jpg

export default function Home() {
  return (
    <div className='relative h-screen'>
      {/* bg image */}

      <img src="https://i.ibb.co/Jj2JhMh/hero-img.jpg"
      className='absolute inset-0 w-full h-full object-cover'
      />
      {/* Contenedor de las cards */}
      <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='flex space-x-4'>
          {/* Card 1 */}
          <div className='bg-cardcolor p-4 rounded-lg shadow-lg w-96 h-64'>
            <div className='flex justify-between items-center'>
              <div className='text-gray-400 text-sm  font-sans'>Detect Language</div>
              <button className='text-buttontitle text-sm font-sans px-4 py-2 rounded-lg bg-buttoncolor'>English</button>
              <div className='text-gray-400 text-sm font-sans'>French</div>
              <div className='text-gray-400 text-sm font-sans'>Spanish</div>
            </div>
            <div className='text-right text-gray-500 text-sm'>19/500</div>
          {/* Botón Translate */}
          <div className='flex justify-items-end'>
            <button className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md'>
              Translate
            </button>
          </div>
          </div>

          <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='flex space-x-4'>
          {/* Card */}
          <div className='bg-gray-800 p-4 rounded-lg shadow-lg w-[500px] h-[300px]'>  {/* <-- Ajusta el tamaño aquí */}
            {/* Opciones de idioma y botón SVG */}
            <div className='flex justify-between items-center'>
              <div className='flex space-x-4'>
                <button className='text-gray-400 text-sm px-2'>English</button>
                <button className='text-buttontitle text-sm font-sans px-4 py-2 rounded-lg bg-buttoncolor'>French</button>
                <button className='text-gray-400 text-sm px-1 py-2' >Spanish </button>
                <button><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L8 10L4 6" stroke="#6C727F" stroke-width="2"/>
</svg>
</button>
              </div>

              {/* Botón con icono SVG */}
              <button className='text-gray-400 border border-buttoncolor rounded-2xl p-2' >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66666 6.66668L0.95955 5.95957L0.252443 6.66668L0.95955 7.37378L1.66666 6.66668ZM17.5 7.66668C18.0523 7.66668 18.5 7.21896 18.5 6.66668C18.5 6.11439 18.0523 5.66668 17.5 5.66668V7.66668ZM4.29288 2.62624L0.95955 5.95957L2.37376 7.37378L5.7071 4.04045L4.29288 2.62624ZM0.95955 7.37378L4.29288 10.7071L5.7071 9.2929L2.37376 5.95957L0.95955 7.37378ZM1.66666 7.66668H17.5V5.66668H1.66666V7.66668Z" fill="#4D5562"/>
<path d="M18.3333 13.3333L19.0404 12.6262L19.7475 13.3333L19.0404 14.0404L18.3333 13.3333ZM10.8333 14.3333C10.281 14.3333 9.83331 13.8856 9.83331 13.3333C9.83331 12.781 10.281 12.3333 10.8333 12.3333L10.8333 14.3333ZM15.7071 9.29289L19.0404 12.6262L17.6262 14.0404L14.2929 10.7071L15.7071 9.29289ZM19.0404 14.0404L15.7071 17.3738L14.2929 15.9596L17.6262 12.6262L19.0404 14.0404ZM18.3333 14.3333L10.8333 14.3333L10.8333 12.3333L18.3333 12.3333L18.3333 14.3333Z" fill="#4D5562"/>
</svg>
              </button>
            </div>

            {/* Línea blanca debajo de los botones */}
            <div className='border-b-2 border-white mt-2 mb-4'></div>

            {/* Caja de texto */}
            <div className='relative p-4 rounded-lg h-40 text-titlecolor'>Bonjour, comment allez-vous ?</div>


            {/* Contenedor para los dos botones SVG al final */}
            <div className='flex justify-start space-x-4 mt-4'>
              {/* Botón SVG 1 */}
              <button className='text-gray-400'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.46532 11.6089C2.87114 10.6186 2.87114 9.38143 3.46532 8.39114C3.64663 8.08895 3.94701 7.87726 4.29258 7.80815L5.70344 7.52598C5.78749 7.50917 5.86326 7.46409 5.91814 7.39824L7.17085 5.89498C8.3534 4.47592 8.94468 3.76638 9.47234 3.95742C10 4.14846 10 5.07207 10 6.91928L10 13.0807C10 14.9279 10 15.8515 9.47234 16.0426C8.94468 16.2336 8.3534 15.5241 7.17085 14.105L5.91814 12.6018C5.86326 12.5359 5.78749 12.4908 5.70344 12.474L4.29258 12.1918C3.94701 12.1227 3.64663 11.9111 3.46532 11.6089Z" fill="#4D5562"/>
<path d="M12.1129 7.05373C12.8903 7.83111 13.329 8.88422 13.3333 9.9836C13.3376 11.083 12.9073 12.1395 12.1361 12.923" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
<path d="M15.5474 5.28596C16.7912 6.52977 17.493 8.21475 17.4999 9.97375C17.5069 11.7327 16.8183 13.4232 15.5844 14.6768" stroke="#4D5562" stroke-width="2" stroke-linecap="round"/>
</svg>

              </button>

              {/* Botón SVG 2 */}
              <button className='text-gray-400'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6667 5.83334V5.83334C11.6667 5.36869 11.6667 5.13636 11.6282 4.94316C11.4704 4.14978 10.8502 3.52959 10.0569 3.37177C9.86366 3.33334 9.63133 3.33334 9.16668 3.33334H7.33334C5.44773 3.33334 4.50492 3.33334 3.91913 3.91913C3.33334 4.50492 3.33334 5.44773 3.33334 7.33335V9.16668C3.33334 9.63133 3.33334 9.86366 3.37177 10.0569C3.52959 10.8502 4.14978 11.4704 4.94316 11.6282C5.13636 11.6667 5.36869 11.6667 5.83334 11.6667V11.6667" stroke="#4D5562" stroke-width="2"/>
<rect x="8.33334" y="8.33334" width="8.33333" height="8.33333" rx="2" stroke="#4D5562" stroke-width="2"/>
</svg>



              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>        
  </div>
  )
}