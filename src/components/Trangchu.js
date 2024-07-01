import React from "react"

function Trangchu() {
    return (
        <><div class="w-HomeMainFrame grow shrink basis-0 px-5 py-4 flex-col justify-start items-start gap-4 flex">
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
                                    <div class="w-8 h-8 relative">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="FileAudio" clip-path="url(#clip0_11185_9258)">
                                        <path id="Vector" d="M12.3585 16.134L12.3586 16.134C12.5299 16.2049 12.6764 16.3251 12.7794 16.4792C12.8824 16.6334 12.9375 16.8146 12.9375 17V28V28C12.9376 28.1856 12.8827 28.367 12.7797 28.5213C12.6767 28.6756 12.5303 28.7959 12.3589 28.8669C12.1875 28.9379 11.9989 28.9565 11.8169 28.9202C11.6349 28.884 11.4678 28.7946 11.3367 28.6633L11.3367 28.6633L8.63045 25.9558L8.61215 25.9375H8.58625H6C5.75136 25.9375 5.5129 25.8387 5.33709 25.6629C5.16127 25.4871 5.0625 25.2486 5.0625 25V20C5.0625 19.7514 5.16127 19.5129 5.33709 19.3371C5.5129 19.1613 5.75136 19.0625 6 19.0625H8.58625H8.61215L8.63045 19.0442L11.3367 16.3367C11.4679 16.2056 11.635 16.1164 11.8169 16.0803C11.9988 16.0442 12.1873 16.0629 12.3585 16.134ZM26.9375 11V11V27C26.9375 27.5139 26.7334 28.0067 26.37 28.37C26.0067 28.7334 25.5139 28.9375 25 28.9375H21C20.7514 28.9375 20.5129 28.8387 20.3371 28.6629C20.1613 28.4871 20.0625 28.2486 20.0625 28C20.0625 27.7514 20.1613 27.5129 20.3371 27.3371C20.5129 27.1613 20.7514 27.0625 21 27.0625H25H25.0625V27V12V11.9375H25H19C18.7514 11.9375 18.5129 11.8387 18.3371 11.6629C18.1613 11.4871 18.0625 11.2486 18.0625 11V5V4.9375H18H7H6.9375V5V15C6.9375 15.2486 6.83873 15.4871 6.66291 15.6629C6.4871 15.8387 6.24864 15.9375 6 15.9375C5.75136 15.9375 5.5129 15.8387 5.33709 15.6629C5.16127 15.4871 5.0625 15.2486 5.0625 15V5C5.0625 4.48614 5.26663 3.99333 5.62998 3.62998C5.99333 3.26663 6.48614 3.0625 7 3.0625L19 3.0625L19 3.0625C19.1232 3.0624 19.2452 3.08657 19.359 3.13362C19.4728 3.18067 19.5762 3.24967 19.6633 3.33669C19.6633 3.3367 19.6633 3.33671 19.6633 3.33672L26.6633 10.3367C26.7503 10.4238 26.8193 10.5272 26.8664 10.641C26.9134 10.7548 26.9376 10.8768 26.9375 11ZM19.9375 10V10.0625H20H23.5863H23.7371L23.6304 9.95581L20.0442 6.36956L19.9375 6.26286V6.41375V10ZM18.9375 22.5C18.9365 23.3711 18.7082 24.2269 18.2751 24.9827C17.8425 25.738 17.2204 26.3673 16.4702 26.8088C16.2572 26.9142 16.0121 26.9348 15.7844 26.8664C15.556 26.7977 15.3624 26.6446 15.2429 26.4382C15.1235 26.2319 15.0871 25.9877 15.1413 25.7555C15.1954 25.5238 15.3355 25.3214 15.5333 25.1892C16.0004 24.9131 16.3876 24.5201 16.6566 24.0488C16.926 23.5771 17.0677 23.0432 17.0677 22.5C17.0677 21.9568 16.926 21.4229 16.6566 20.9512C16.3876 20.4799 16.0004 20.0869 15.5333 19.8108C15.3355 19.6786 15.1954 19.4762 15.1413 19.2445C15.0871 19.0123 15.1235 18.7681 15.2429 18.5618C15.3624 18.3554 15.556 18.2023 15.7844 18.1336C16.0121 18.0652 16.2572 18.0858 16.4702 18.1912C17.2204 18.6327 17.8425 19.262 18.2751 20.0173C18.7082 20.7731 18.9365 21.6289 18.9375 22.5Z" fill="#00C651" stroke="#00C651" stroke-width="0.125"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_11185_9258">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
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
                                    <div class="w-8 h-8 relative">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Microphone">
                                        <path id="Vector" d="M10 16V8C10 6.4087 10.6321 4.88258 11.7574 3.75736C12.8826 2.63214 14.4087 2 16 2C17.5913 2 19.1174 2.63214 20.2426 3.75736C21.3679 4.88258 22 6.4087 22 8V16C22 17.5913 21.3679 19.1174 20.2426 20.2426C19.1174 21.3679 17.5913 22 16 22C14.4087 22 12.8826 21.3679 11.7574 20.2426C10.6321 19.1174 10 17.5913 10 16ZM26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15C24.7348 15 24.4804 15.1054 24.2929 15.2929C24.1054 15.4804 24 15.7348 24 16C24 18.1217 23.1571 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24C13.8783 24 11.8434 23.1571 10.3431 21.6569C8.84285 20.1566 8 18.1217 8 16C8 15.7348 7.89464 15.4804 7.70711 15.2929C7.51957 15.1054 7.26522 15 7 15C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6.00305 18.4782 6.9249 20.8672 8.5873 22.7051C10.2497 24.543 12.5346 25.6991 15 25.95V30C15 30.2652 15.1054 30.5196 15.2929 30.7071C15.4804 30.8946 15.7348 31 16 31C16.2652 31 16.5196 30.8946 16.7071 30.7071C16.8946 30.5196 17 30.2652 17 30V25.95C19.4654 25.6991 21.7503 24.543 23.4127 22.7051C25.0751 20.8672 25.997 18.4782 26 16Z" fill="#FF4F66"/>
                                        </g>
                                        </svg>
                                    </div>
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
            </div></>
    );
  }
  
  export default Trangchu;
  