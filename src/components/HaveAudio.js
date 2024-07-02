import React from "react";
import { ReactComponent as SpeakerHigh } from "../resources/SpeakerHigh.svg";

function HaveAudioUI({ state, setState }) {

  return (
    <>
    <div class="w-[368px] h-[138px] p-4 bg-white rounded-xl border border-zinc-300 flex-col justify-center items-start gap-6 inline-flex">
        <div class="self-stretch justify-start items-center gap-2 inline-flex">
            <div class="w-5 h-5 relative">
                {/* import svg */}
                <SpeakerHigh />
            </div>
            <div class="text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">{state.name}</div>
        </div>
        <div class="self-stretch h-[62px] flex-col justify-center items-start gap-5 flex">
            <div class="self-stretch justify-start items-center gap-4 inline-flex">
                <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div class="self-stretch h-1.5 flex-col justify-start items-start flex">
                        <div class="self-stretch h-1.5 bg-indigo-50 rounded-[5px]"></div>
                        <div class="w-[147.97px] h-1.5 bg-blue-600 rounded-[5px]"></div>
                    </div>
                </div>
            </div>
            <div class="self-stretch justify-between items-center inline-flex">
                <div class="justify-start items-center gap-3 flex">
                    <div class="p-2 rounded-[18px] border border-zinc-300 justify-center items-center gap-2 flex">
                        <div class="w-5 h-5 relative"></div>
                    </div>
                    <div class="justify-start items-center gap-[5px] flex">
                        <div class="text-center text-zinc-800 text-sm font-medium font-['Open Sans'] leading-tight">00:00</div>
                        <div class="text-center text-zinc-800 text-sm font-medium font-['Open Sans'] leading-tight">/</div>
                        <div class="text-center text-zinc-800 text-sm font-medium font-['Open Sans'] leading-tight">59:00</div>
                    </div>
                </div>
                <div class="justify-center items-center gap-1 flex">
                    <div class="w-5 h-5 relative"></div>
                    <div class="text-center text-rose-500 text-sm font-normal font-['Open Sans'] leading-tight">Xóa</div>
                </div>
            </div>
        </div>
    </div>    
    </>
  );
}

export default HaveAudioUI;