export const Calendar = () => {
  return (
    <div className='container mx-auto mt-10'>
      <div className='wrapper bg-white rounded shadow w-full '>
        <div className='header flex justify-between border-b p-2'>
          <span className='text-lg font-bold'>2024 Marzo</span>
          <div className='buttons'>
            <button className='p-1'>
              <svg
                width='1em'
                fill='gray'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-arrow-left-circle'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                />
                <path
                  fill-rule='evenodd'
                  d='M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z'
                />
                <path
                  fill-rule='evenodd'
                  d='M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z'
                />
              </svg>
            </button>
            <button className='p-1'>
              <svg
                width='1em'
                fill='gray'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-arrow-right-circle'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                />
                <path
                  fill-rule='evenodd'
                  d='M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z'
                />
                <path
                  fill-rule='evenodd'
                  d='M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </button>
          </div>
        </div>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'>
                <span className='xl:block lg:block md:block sm:block hidden'>
                  Lunes
                </span>
                <span className='xl:hidden lg:hidden md:hidden sm:hidden block'>
                  Lun
                </span>
              </th>
              <th className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'>
                <span className='xl:block lg:block md:block sm:block hidden'>
                  Martes
                </span>
                <span className='xl:hidden lg:hidden md:hidden sm:hidden block'>
                  Mar
                </span>
              </th>
              <th className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'>
                <span className='xl:block lg:block md:block sm:block hidden'>
                  Miércoles
                </span>
                <span className='xl:hidden lg:hidden md:hidden sm:hidden block'>
                  Mié
                </span>
              </th>
              <th className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'>
                <span className='xl:block lg:block md:block sm:block hidden'>
                  Jueves
                </span>
                <span className='xl:hidden lg:hidden md:hidden sm:hidden block'>
                  Jue
                </span>
              </th>
              <th className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'>
                <span className='xl:block lg:block md:block sm:block hidden'>
                  Viernes
                </span>
                <span className='xl:hidden lg:hidden md:hidden sm:hidden block'>
                  Vie
                </span>
              </th>
              <th className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'>
                <span className='xl:block lg:block md:block sm:block hidden'>
                  Sábado
                </span>
                <span className='xl:hidden lg:hidden md:hidden sm:hidden block'>
                  Sáb
                </span>
              </th>
              <th className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'>
                <span className='xl:block lg:block md:block sm:block hidden'>
                  Domingo
                </span>
                <span className='xl:hidden lg:hidden md:hidden sm:hidden block'>
                  Dom
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center h-20'>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 '>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>1</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'>
                    <div className='event bg-red-500 text-white rounded p-1 text-sm mb-1'>
                      <span className='event-name'>Todos</span>
                    </div>
                    <div className='event bg-blue-400 text-white rounded p-1 text-sm mb-1'>
                      <span className='event-name'>Dormir</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>2</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>3</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>4</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>6</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>7</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'>
                    <div className='event bg-blue-400 text-white rounded p-1 text-sm mb-1'>
                      <span className='event-name'>Dormir</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500 text-sm'>8</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
            </tr>

            <tr className='text-center h-20'>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>9</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>10</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>12</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>13</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>14</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>15</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500 text-sm'>16</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
            </tr>

            <tr className='text-center h-20'>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>16</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>17</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>18</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>19</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>20</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>21</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500 text-sm'>22</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
            </tr>

            <tr className='text-center h-20'>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>23</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>24</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>25</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>26</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>27</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>28</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500 text-sm'>29</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
            </tr>
            <tr className='text-center h-20'>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>30</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>31</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>1</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>2</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>3</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500'>4</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
              <td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
                <div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
                  <div className='top h-5 w-full'>
                    <span className='text-gray-500 text-sm'>5</span>
                  </div>
                  <div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
