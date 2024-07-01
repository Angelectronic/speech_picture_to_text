import React from "react"

function Trangchu() {
    return (
        <><div class="w-HomeMainFrame px-4 py-3 bg-white justify-between items-center inline-flex">
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
        </div><div class="w-HomeMainFrame grow shrink basis-0 px-5 py-4 flex-col justify-start items-start gap-4 flex">
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
            </div></>
    );
  }
  
  export default Trangchu;
  