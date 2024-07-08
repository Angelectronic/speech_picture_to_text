import React from "react";
import { ReactComponent as SpeakerHigh } from "../resources/SpeakerHigh.svg";
import { ReactComponent as Trash } from "../resources/Trash.svg";
import { ReactComponent as Ellipse } from "../resources/Ellipse 32.svg";
import { ReactComponent as Play } from "../resources/Play.svg";
import { ReactComponent as Pause } from "../resources/Pause.svg";

function HaveAudioUI({ state, setState }) {
    const [currentTime, setCurrentTime] = React.useState(0);
    const [Playing, setPlaying] = React.useState(false);

    const handlePlay = () => {
        if (Playing) {
            state.pause();
        } else {
            state.play();
        }
        setPlaying(!Playing);
    }

    React.useEffect(() => {
        const updateCurrentTime = () => {
            setCurrentTime(state.currentTime);
            if (state.currentTime >= state.duration) {
                setCurrentTime(0);
                state.pause();
                state.currentTime = 0;
                setPlaying(false);
            }
        }
    
        if (state) {
            state.addEventListener('timeupdate', updateCurrentTime);
        }
    
        return () => {
            if (state) {
                state.removeEventListener('timeupdate', updateCurrentTime);
                state.pause();
            }
        }
    }, [state]);    

    const formatTime = (time) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        if (hours > 0) {
            return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }

        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    return (
        <>
        <div class="w-[368px] h-[138px] p-4 bg-white rounded-xl border border-zinc-300 flex-col justify-center items-start gap-6 inline-flex">
            <div class="self-stretch justify-start items-center gap-2 inline-flex">
                <div class="w-5 h-5 relative">
                    <SpeakerHigh />
                </div>
                <div class="text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">{state.name}</div>
            </div>
            <div class="self-stretch h-[62px] flex-col justify-center items-start gap-5 flex">
                <div class="self-stretch justify-start items-center gap-4 inline-flex">
                    <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div class="self-stretch h-1.5 flex-col justify-start items-start flex bg-zinc-300 rounded-[5px]">
                            <div class="self-stretch h-1.5 bg-indigo-50 rounded-[5px]"></div>
                            <div class="h-1.5 bg-blue-600 rounded-[5px] items-center flex justify-end" style={{ width: `${(currentTime / state.duration) * 100}%` }}>
                                <Ellipse />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="self-stretch justify-between items-center inline-flex">
                    <div class="justify-start items-center gap-3 flex">
                        <button class="p-2 rounded-[18px] border border-zinc-300 justify-center items-center gap-2 flex" onClick={handlePlay}>
                            <div class="w-5 h-5 relative">
                                {Playing ? <Pause /> : <Play class='w-5 h-5' />}
                            </div>
                        </button>
                        <div class="justify-start items-center gap-[5px] flex">
                            <div class="text-center text-zinc-800 text-sm font-medium font-['Open Sans'] leading-tight">{formatTime(currentTime)}</div>
                            <div class="text-center text-zinc-800 text-sm font-medium font-['Open Sans'] leading-tight">/</div>
                            <div class="text-center text-zinc-800 text-sm font-medium font-['Open Sans'] leading-tight">{formatTime(state.duration)}</div>
                        </div>
                    </div>
                    <button class="justify-center items-center gap-1 flex" onClick={() => setState(null)}>
                        <div class="w-5 h-5 relative"><Trash /></div>
                        <div class="text-center text-rose-500 text-sm font-normal font-['Open Sans'] leading-tight">Xóa</div>
                    </button>
                </div>
            </div>
        </div>
        </>
  );
}

export default HaveAudioUI;