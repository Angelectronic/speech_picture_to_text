import { useNavigate } from "react-router-dom"
import React from "react"
import Trangchu from "./Trangchu"
import LichSu from "./LichSu"
import CauHinh from "./CauHinh"

function Home() {
  const navigate = useNavigate()
  const [mainContent, setMainContent] = React.useState(<Trangchu />)

  var TrangChuRef = React.createRef()
  var LichSuRef = React.createRef()
  var CauHinhRef = React.createRef()
  var MainRef = React.createRef()

  const onClickTrangChu = () => {
    if (TrangChuRef.current && LichSuRef.current && CauHinhRef.current) {
      TrangChuRef.current.classList.add('bg-indigo-500')
      LichSuRef.current.classList.remove('bg-indigo-500')
      CauHinhRef.current.classList.remove('bg-indigo-500')
    }

    if (MainRef.current) {
      setMainContent(<Trangchu />)
    }
  }

  const onClickLichSu = () => {
    if (LichSuRef.current && LichSuRef.current && CauHinhRef.current) {
      LichSuRef.current.classList.add('bg-indigo-500')
      TrangChuRef.current.classList.remove('bg-indigo-500')
      CauHinhRef.current.classList.remove('bg-indigo-500')
    }

    if (MainRef.current) {
      setMainContent(<LichSu />)
    }
  }

  const onClickCauHinh = () => {
    if (CauHinhRef.current && LichSuRef.current && CauHinhRef.current) {
      CauHinhRef.current.classList.add('bg-indigo-500')
      LichSuRef.current.classList.remove('bg-indigo-500')
      TrangChuRef.current.classList.remove('bg-indigo-500')
    }

    if (MainRef.current) {
      setMainContent(<CauHinh />)
    }
  }

  return (
    <>
      {/* sidebar menu */}
      <div class="w-[250px] h-screen px-4 py-6 bg-blue-700 shadow flex-col justify-start items-center gap-6 inline-flex">
        <div class="self-stretch h-11 flex-col justify-start items-start flex">
          <div class="self-stretch justify-start items-center gap-4 inline-flex">
            <div class="w-11 h-11 px-[2.95px] justify-center items-center flex">
              <div class="relative">
                <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative">
                  <path id="Polygon 2" d="M17.9979 1.1547C19.2355 0.440169 20.7603 0.440169 21.9979 1.1547L37.0504 9.8453C38.288 10.5598 39.0504 11.8803 39.0504 13.3094V30.6906C39.0504 32.1197 38.288 33.4402 37.0504 34.1547L21.9979 42.8453C20.7603 43.5598 19.2355 43.5598 17.9979 42.8453L2.94531 34.1547C1.70771 33.4402 0.945312 32.1197 0.945312 30.6906V13.3094C0.945312 11.8803 1.70771 10.5598 2.94531 9.8453L17.9979 1.1547Z" fill="white" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <g id="FileAudio" clip-path="url(#clip0_11251_10592)">
                    <path id="Vector" d="M14.25 16.875C14.2492 17.5365 14.0759 18.1864 13.747 18.7603C13.4182 19.3343 12.9453 19.8126 12.375 20.1478C12.2042 20.2328 12.0075 20.2496 11.8248 20.1947C11.6421 20.1397 11.4872 20.0173 11.3916 19.8522C11.2961 19.6871 11.267 19.4918 11.3103 19.306C11.3537 19.1202 11.4662 18.9579 11.625 18.8522C11.9688 18.6492 12.2538 18.3601 12.4518 18.0134C12.6497 17.6666 12.7539 17.2743 12.7539 16.875C12.7539 16.4757 12.6497 16.0834 12.4518 15.7366C12.2538 15.3899 11.9688 15.1008 11.625 14.8978C11.4662 14.7921 11.3537 14.6298 11.3103 14.444C11.267 14.2582 11.2961 14.0629 11.3916 13.8978C11.4872 13.7327 11.6421 13.6103 11.8248 13.5553C12.0075 13.5004 12.2042 13.5172 12.375 13.6022C12.9453 13.9374 13.4182 14.4157 13.747 14.9897C14.0759 15.5636 14.2492 16.2135 14.25 16.875ZM9.28687 12.0572C9.14985 12.0003 8.99904 11.9854 8.85352 12.0143C8.70801 12.0431 8.57432 12.1145 8.46937 12.2194L6.43969 14.25H4.5C4.30109 14.25 4.11032 14.329 3.96967 14.4697C3.82902 14.6103 3.75 14.8011 3.75 15V18.75C3.75 18.9489 3.82902 19.1397 3.96967 19.2803C4.11032 19.421 4.30109 19.5 4.5 19.5H6.43969L8.46937 21.5306C8.57427 21.6356 8.70796 21.7072 8.85352 21.7361C8.99908 21.7651 9.14998 21.7503 9.28709 21.6935C9.42421 21.6367 9.54139 21.5404 9.62379 21.417C9.70619 21.2935 9.75012 21.1484 9.75 21V12.75C9.74997 12.6017 9.70595 12.4567 9.62352 12.3334C9.54108 12.21 9.42393 12.1139 9.28687 12.0572ZM20.25 8.25V20.25C20.25 20.6478 20.092 21.0294 19.8107 21.3107C19.5294 21.592 19.1478 21.75 18.75 21.75H15.75C15.5511 21.75 15.3603 21.671 15.2197 21.5303C15.079 21.3897 15 21.1989 15 21C15 20.8011 15.079 20.6103 15.2197 20.4697C15.3603 20.329 15.5511 20.25 15.75 20.25H18.75V9H14.25C14.0511 9 13.8603 8.92098 13.7197 8.78033C13.579 8.63968 13.5 8.44891 13.5 8.25V3.75H5.25V11.25C5.25 11.4489 5.17098 11.6397 5.03033 11.7803C4.88968 11.921 4.69891 12 4.5 12C4.30109 12 4.11032 11.921 3.96967 11.7803C3.82902 11.6397 3.75 11.4489 3.75 11.25V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H14.25C14.3485 2.24992 14.4461 2.26926 14.5371 2.3069C14.6282 2.34454 14.7109 2.39975 14.7806 2.46938L20.0306 7.71938C20.1003 7.78908 20.1555 7.87182 20.1931 7.96286C20.2307 8.05391 20.2501 8.15148 20.25 8.25ZM15 7.5H17.6897L15 4.81031V7.5Z" fill="#1F5BD7" />
                  </g>
                  <defs>
                    <clipPath id="clip0_11251_10592">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="text-white text-xl font-semibold font-['Open Sans'] leading-[30px]">Speech to text</div>
          </div>
        </div>

        <div class="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-2 flex">
          <div class="self-stretch px-3 py-2.5 bg-indigo-500 rounded-lg justify-start items-center gap-3 inline-flex" ref={TrangChuRef}>
            <button class="grow shrink basis-0 h-6 justify-start items-center gap-2 flex" onClick={onClickTrangChu}>
              <div class="w-6 h-6 relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="House" clip-path="url(#clip0_11258_10600)">
              <path id="Vector" d="M14.25 19.4999V14.9999C14.25 14.801 14.171 14.6102 14.0303 14.4695C13.8897 14.3289 13.6989 14.2499 13.5 14.2499H10.5C10.3011 14.2499 10.1103 14.3289 9.96967 14.4695C9.82902 14.6102 9.75 14.801 9.75 14.9999V19.4999C9.75 19.6988 9.67098 19.8895 9.53033 20.0302C9.38968 20.1708 9.19891 20.2499 9 20.2499H4.5C4.30109 20.2499 4.11032 20.1708 3.96967 20.0302C3.82902 19.8895 3.75 19.6988 3.75 19.4999V10.8317C3.75001 10.7272 3.77187 10.6239 3.81416 10.5283C3.85646 10.4327 3.91827 10.347 3.99562 10.2767L11.4956 3.19487C11.6337 3.06917 11.8137 2.99951 12.0005 2.99951C12.1872 2.99951 12.3672 3.06917 12.5053 3.19487L20.0053 10.2767C20.0827 10.347 20.1445 10.4327 20.1868 10.5283C20.2291 10.6239 20.2509 10.7272 20.2509 10.8317V19.4999C20.2509 19.6988 20.1719 19.8895 20.0313 20.0302C19.8906 20.1708 19.6998 20.2499 19.5009 20.2499H15C14.8011 20.2499 14.6103 20.1708 14.4697 20.0302C14.329 19.8895 14.25 19.6988 14.25 19.4999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_11258_10600">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              </div>
              <div class="text-white text-sm font-medium font-['Open Sans'] leading-tight">Trang chủ</div>
            </button>
          </div>

          <div class="self-stretch px-3 py-2.5 rounded-lg justify-start items-center gap-3 inline-flex" ref={LichSuRef}>
            <button class="grow shrink basis-0 h-6 justify-start items-center gap-2 flex" onClick={onClickLichSu}>
              <div class="w-6 h-6 relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Clock" clip-path="url(#clip0_11258_10607)">
              <path id="Vector" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M12 6.75V12H17.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_11258_10607">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              </div> 
              <div class="text-white text-sm font-medium font-['Open Sans'] leading-tight">Lịch sử</div>
            </button>
          </div>

          <div class="self-stretch px-3 py-2.5 rounded-lg justify-start items-center gap-3 inline-flex" ref={CauHinhRef}>
            <button class="grow shrink basis-0 h-6 justify-start items-center gap-2 flex" onClick={onClickCauHinh}>
              <div class="w-6 h-6 relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="GearSix" clip-path="url(#clip0_11258_10617)">
                <path id="Vector" d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M12.1906 19.3228C12.0649 19.3228 11.9384 19.3228 11.8156 19.3228L8.81088 21C7.64118 20.6065 6.55626 19.9959 5.61306 19.2L5.60181 15.825C5.53525 15.72 5.47244 15.6141 5.41431 15.5053L2.4265 13.8038C2.19117 12.6134 2.19117 11.3885 2.4265 10.1981L5.4115 8.50125C5.47244 8.39344 5.53525 8.28656 5.599 8.18156L5.614 4.80656C6.55634 4.00842 7.64099 3.39548 8.81088 3L11.8109 4.67719C11.9365 4.67719 12.0631 4.67719 12.1859 4.67719L15.1859 3C16.3556 3.39346 17.4405 4.00414 18.3837 4.8L18.3949 8.175C18.4615 8.28 18.5243 8.38594 18.5824 8.49469L21.5684 10.1953C21.8037 11.3857 21.8037 12.6106 21.5684 13.8009L18.5834 15.4978C18.5224 15.6056 18.4596 15.7125 18.3959 15.8175L18.3809 19.1925C17.4392 19.9908 16.3552 20.604 15.1859 21L12.1906 19.3228Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_11258_10617">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </div>
              <div class="text-white text-sm font-medium font-['Open Sans'] leading-tight">Cấu hình</div>
            </button>
            <div class="w-4 h-4 relative"></div>
          </div>

        </div>
      </div>

      {/* Main content */}
      <div class="w-HomeMainFrame h-screen flex-col justify-start items-start inline-flex absolute" ref={MainRef}>
        <div class="w-HomeMainFrame px-4 py-3 bg-white justify-between items-center inline-flex">
            <div class="justify-start items-center gap-4 flex">
                <div class="w-6 h-6 relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="List" clip-path="url(#clip0_11186_9422)">
                <path id="Vector" d="M3.75 12H20.25" stroke="#3D3A55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M3.75 6H20.25" stroke="#3D3A55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_3" d="M3.75 18H20.25" stroke="#3D3A55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_11186_9422">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                </div>
                <div class="text-zinc-800 text-lg font-semibold font-['Open Sans'] leading-7">Phần mền chuyển đổi giọng nói/hình ảnh sang văn bản</div>
            </div>
            <div class="w-[226px] justify-start items-center gap-4 flex">
                <a class="h-10 px-3 py-2.5 bg-indigo-50 rounded justify-center items-center gap-2 flex" href="/register">
                    <div class="text-center text-blue-600 text-sm font-medium font-['Open Sans'] leading-tight">Đăng ký</div>
                </a>
                <a class="px-4 py-2.5 bg-blue-600 rounded justify-center items-center gap-2 flex" href="/login">
                    <div class="text-center text-white text-sm font-medium font-['Open Sans'] leading-tight">Đăng nhập</div>
                </a>
            </div>
        </div>
        {mainContent}
      </div>
    </>    
  );
}

export default Home;
    