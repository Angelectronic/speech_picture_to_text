import { Button } from "antd"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  const onClick = () => {
    console.log('Click');
    navigate('/login');
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
          <div class="self-stretch px-3 py-2.5 bg-indigo-500 rounded-lg justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <div class="w-6 h-6 relative">

              </div>
              <div class="text-white text-sm font-medium font-['Open Sans'] leading-tight">Trang chủ</div>
            </div>
          </div>

          <div class="self-stretch px-3 py-2.5 rounded-lg justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <div class="w-6 h-6 relative">

              </div>
              <div class="text-white text-sm font-medium font-['Open Sans'] leading-tight">Lịch sử</div>
            </div>
          </div>

          <div class="self-stretch px-3 py-2.5 rounded-lg justify-start items-center gap-3 inline-flex">
            <div class="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <div class="w-6 h-6 relative">

              </div>
              <div class="text-white text-sm font-medium font-['Open Sans'] leading-tight">Cấu hình</div>
            </div>
            <div class="w-4 h-4 relative"></div>
          </div>

        </div>
      </div>

      {/* Main content */}
      <div class="w-[1670px] h-screen flex-col justify-start items-start inline-flex absolute">
        <div class="w-[1670px] px-4 py-3 bg-white justify-between items-center inline-flex">
          <div class="justify-start items-center gap-4 flex">
            <div class="w-6 h-6 relative"></div>
            <div class="text-zinc-800 text-lg font-semibold font-['Open Sans'] leading-7">Phần mền chuyển đổi giọng nói/hình ảnh sang văn bản</div>
          </div>
          <div class="w-[226px] justify-start items-center gap-4 flex">
            <div class="h-10 px-3 py-2.5 bg-indigo-50 rounded justify-center items-center gap-2 flex">
              <div class="text-center text-blue-600 text-sm font-medium font-['Open Sans'] leading-tight">Đăng ký</div>
            </div>
            <div class="px-4 py-2.5 bg-blue-600 rounded justify-center items-center gap-2 flex">
              <div class="text-center text-white text-sm font-medium font-['Open Sans'] leading-tight">Đăng nhập</div>
            </div>
          </div>
        </div>
        <div class="w-[1670px] grow shrink basis-0 px-5 py-4 flex-col justify-start items-start gap-4 flex">
          <div class="self-stretch text-zinc-800 text-2xl font-bold font-['Open Sans'] leading-9">Trang chủ</div>
          <div class="self-stretch grow shrink basis-0 rounded-bl-lg rounded-br-lg justify-start items-start gap-4 inline-flex">
            <div class="self-stretch rounded-xl flex-col justify-start items-start inline-flex">
              <div class="self-stretch p-4 bg-white border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                <div class="text-zinc-800 text-lg font-semibold font-['Open Sans'] leading-7">Loại chuyển đổi</div>
              </div>
              <div class="w-[400px] grow shrink basis-0 px-4 bg-white flex-col justify-start items-start gap-4 flex">
                <div class="self-stretch h-[52px] justify-start items-start inline-flex">
                  <div class="grow shrink basis-0 h-[52px] px-5 py-4 bg-white border-b-2 border-blue-600 justify-center items-center gap-4 flex">
                    <div class="justify-start items-center gap-2 flex">
                      <div class="text-blue-600 text-sm font-medium font-['Open Sans'] leading-tight">Chuyển đổi từ giọng nói</div>
                    </div>
                  </div>
                  <div class="grow shrink basis-0 h-[52px] px-5 py-4 bg-white border-b border-zinc-300 justify-center items-center gap-4 flex">
                    <div class="justify-start items-center gap-2 flex">
                      <div class="text-zinc-600 text-sm font-medium font-['Open Sans'] leading-tight">Chuyển đổi từ ảnh</div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch h-[383px] flex-col justify-start items-start gap-4 flex">
                  <div class="self-stretch h-[195px] p-4 rounded-xl border border-zinc-300 flex-col justify-center items-center gap-4 flex">
                    <div class="p-3 bg-green-100 rounded-xl justify-center items-center gap-2 inline-flex">
                      <div class="w-8 h-8 relative"></div>
                    </div>
                    <div class="flex-col justify-center items-center gap-[3px] flex">
                      <div class="text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Tải lên file âm thanh hoặc kéo thả</div>
                      <div class="text-zinc-500 text-sm font-normal font-['Open Sans'] leading-tight">Định dạng hỗ trợ: mp3, wav</div>
                    </div>
                    <div class="px-2 py-1.5 bg-indigo-50 rounded justify-center items-center gap-2 inline-flex">
                      <div class="text-center text-blue-600 text-sm font-medium font-['Open Sans'] leading-tight">Chọn file</div>
                    </div>
                  </div>
                  <div class="self-stretch h-[172px] p-4 bg-white rounded-xl border border-zinc-300 flex-col justify-center items-center gap-4 flex">
                    <div class="p-3 bg-rose-50 rounded-xl flex-col justify-center items-center gap-2 flex">
                      <div class="w-8 h-8 relative"></div>
                    </div>
                    <div class="text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Chuyển đổi từ ghi âm trực tiếp</div>
                    <div class="px-2 py-1.5 bg-indigo-50 rounded justify-center items-center gap-2 inline-flex">
                      <div class="text-center text-blue-600 text-sm font-medium font-['Open Sans'] leading-tight">Ghi âm</div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch px-4 py-3.5 bg-indigo-300 rounded justify-center items-center gap-2 inline-flex">
                  <div class="w-5 h-5 relative"></div>
                  <div class="text-center text-white text-sm font-medium font-['Open Sans'] leading-tight">Chuyển đổi</div>
                </div>
              </div>
            </div>
            <div class="grow shrink basis-0 self-stretch bg-white rounded-lg flex-col justify-start items-start inline-flex">
              <div class="self-stretch p-4 bg-white border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                <div class="text-zinc-800 text-lg font-semibold font-['Open Sans'] leading-7">Kết quả chuyển đổi</div>
              </div>
              <div class="self-stretch grow shrink basis-0 p-4 flex-col justify-start items-start gap-2 flex">
                <div class="self-stretch grow shrink basis-0 pl-4 pr-1 pt-3 pb-1 bg-white rounded border border-zinc-300 flex-col justify-between items-end flex">
                  <div class="self-stretch text-zinc-400 text-sm font-normal font-['Open Sans'] leading-tight">Kết quả chuyển đổi</div>
                  <div class="w-[5px] h-[5px] relative">
                    <div class="w-[7.07px] h-[0px] left-[5px] top-0 absolute origin-top-left rotate-[135deg] border border-zinc-400"></div>
                    <div class="w-[4.24px] h-[0px] left-[5px] top-[2px] absolute origin-top-left rotate-[135deg] border border-zinc-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>    
  );
}

export default Home;
    