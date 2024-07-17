import React from "react";
import { ReactComponent as X } from "../resources/X.svg";
import { ReactComponent as Pause2 } from "../resources/Pause2.svg";
import { ReactComponent as FileAudio2 } from "../resources/FileAudio2.svg";
import { ReactComponent as Microphone } from "../resources/Microphone.svg";
import { MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';

function NonFileUI({ onStateChange }) {
    const [record, setRecord] = React.useState(false);
    const [recordUI, setRecordUI] = React.useState(false);
    const [recordTime, setRecordTime] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    const fileInputRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const isPausedRef = React.useRef(isPaused);
    const intervalRef = React.useRef(null);
    

    const formatTime = (time) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const audioFile = document.createElement("audio");
    
        audioFile.addEventListener('loadedmetadata', () => {
            onStateChange(audioFile);
        });
    
        audioFile.src = URL.createObjectURL(file);
    };

    const handleButtonUpload = () => {
        fileInputRef.current.click();
    };

    // eslint-disable-next-line no-unused-vars
    const register_init = async () => {
        await register(await connect());
    }

    React.useEffect(() => {
        const startRecording = async () => {
            // await register(await connect());

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/wav' });
            mediaRecorderRef.current = mediaRecorder;
            const chunks = [];
    
            mediaRecorder.ondataavailable = (e) => {
                chunks.push(e.data);
            };
    
            mediaRecorder.onstop = async () => {
                const blob = new Blob(chunks, { type: 'audio/wav' });

                const audioURL = URL.createObjectURL(blob);  
                const audio = document.createElement("audio");
                audio.src = audioURL;
        
                audio.addEventListener('loadedmetadata', () => {
                // Handle Infinity duration because of Chrome bug
                if (audio.duration === Infinity || isNaN(audio.duration)) {
                    audio.currentTime = 1e101;
                    audio.addEventListener("timeupdate", () => {
                    audio.currentTime = 0;

                    clearInterval(intervalRef.current);
                    onStateChange(audio);
                    }, { once: true });
                } else {
                    onStateChange(audio);
                }
                });
            };
            mediaRecorder.start();
            setRecord(true);
        };
        
        if (record) {
          startRecording();
        } else if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
          mediaRecorderRef.current.stop();
        }
    
        return () => {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
        };
      }, [record, onStateChange]);

    const toggleRecord = () => {
        setRecord(!record);

        if (record) {
            setRecordTime(0);
            clearInterval(intervalRef.current);
        }
        else 
        {
            intervalRef.current = setInterval(() => {
                if (!isPausedRef.current) {
                    setRecordTime((prev) => prev + 1);
                }
            }, 1000);
        }

    };

    const togglePause = () => {
        if (mediaRecorderRef.current) {
            if (isPaused) {
                mediaRecorderRef.current.resume();
            }
            else {
                mediaRecorderRef.current.pause();
            }
        }
        setIsPaused((prev) => !prev);
        isPausedRef.current = !isPausedRef.current;
    };

    

  return (
    <>
    <div class="self-stretch h-[195px] p-4 rounded-xl border border-zinc-300 flex-col justify-center items-center gap-4 flex">
          <div class="p-3 bg-green-100 rounded-xl justify-center items-center gap-2 inline-flex">
              <div class="w-8 h-8 relative">
                <FileAudio2 />
              </div>
          </div>
          <div class="flex-col justify-center items-center gap-[3px] flex">
              <div class="text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Tải lên file âm thanh hoặc kéo thả</div>
              <div class="text-zinc-500 text-sm font-normal font-['Open Sans'] leading-tight">Định dạng hỗ trợ: mp3, wav</div>
          </div>
          <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: "none" }} accept=".mp3,.wav,.ogg" />
          <div class="px-2 py-1.5 bg-indigo-50 rounded justify-center items-center gap-2 inline-flex">
              <button class="text-center text-blue-600 text-sm font-medium font-['Open Sans'] leading-tight" onClick={handleButtonUpload}>Chọn file</button>
          </div>
      </div><div class="self-stretch h-[172px] p-4 bg-white rounded-xl border border-zinc-300 flex-col justify-center items-center gap-4 flex">
              <div class="p-3 bg-rose-50 rounded-xl flex-col justify-center items-center gap-2 flex">
                  <div class="w-8 h-8 relative">
                    <Microphone />
                  </div>
              </div>
              <div class="text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Chuyển đổi từ ghi âm trực tiếp</div>
              <button class="px-2 py-1.5 bg-indigo-50 rounded justify-center items-center gap-2 inline-flex" onClick={() => setRecordUI(true)}>
                  <div class="text-center text-blue-600 text-sm font-medium font-['Open Sans'] leading-tight">Ghi âm</div>
              </button>
              
          </div>
          
          {recordUI ? <>


          <div class="fixed inset-0 bg-black bg-opacity-50 z-50" id="overlay"></div>
          <div class="fixed inset-0 flex items-center justify-center z-50">
              <div class="w-[616px] h-[368px] p-6 bg-white rounded-2xl flex-col justify-center items-center gap-6 inline-flex">
                <div class="self-stretch justify-start items-center gap-1.5 inline-flex">
                    <div class="grow shrink basis-0 text-slate-900 text-xl font-semibold font-['Open Sans'] leading-[30px]">Ghi âm trực tiếp</div>
                    <button class="p-[7px] bg-rose-50 rounded-[15px] justify-center items-center gap-2.5 flex" onClick={() => {setRecordUI(false); setRecord(false);}}>
                        <div class="w-4 h-4 relative">
                            <X />
                        </div>
                    </button>
                </div>
                <div class="self-stretch h-[266px] flex-col justify-center items-center gap-2 flex">
                    <div class="self-stretch h-[68px] flex-col justify-start items-start gap-2 flex">
                        <div class="justify-start items-start inline-flex">
                            <div class="text-slate-900 text-sm font-normal font-['Open Sans'] leading-tight">Nguồn âm thanh</div>
                        </div>
                        <div class="self-stretch px-4 py-2.5 bg-white rounded border border-zinc-400 justify-between items-center inline-flex">
                            <div class="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['Open Sans'] leading-tight">Micro 01</div>
                            <div class="justify-center items-center gap-2 flex">
                                <div class="w-4 h-4 relative">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="self-stretch h-[190px] py-8 rounded border border-zinc-300 flex-col justify-start items-center gap-6 flex">
                        <div class="text-zinc-600 text-4xl font-bold font-['Open Sans'] leading-[54px]">{formatTime(recordTime)}</div>
                        <div class="self-stretch justify-center items-center gap-4 inline-flex">
                            
                            {record ? 
                            
                            <>
                            <button class="px-4 py-3 bg-white rounded-lg border border-zinc-300 justify-center items-center gap-2 flex" onClick={togglePause}>
                                <div class="w-6 h-6 relative">
                                    <Pause2 />
                                </div>
                                <div class="text-zinc-800 text-sm font-normal font-['Open Sans'] leading-tight">Tạm dừng</div>
                              </button>
                              <button class="px-4 py-3 bg-white rounded-lg border border-zinc-300 justify-center items-center gap-2 flex" onClick={toggleRecord}>
                                <div class="w-6 h-6 justify-center items-center gap-2 flex">
                                    <div class="w-4 h-4 bg-zinc-600 rounded-sm"></div>
                                </div>
                                <div class="text-zinc-800 text-sm font-normal font-['Open Sans'] leading-tight">Kết thúc</div>
                            </button>
                            </> 
                            : 
                            <button class="px-4 py-3 bg-white rounded-lg border border-zinc-300 justify-center items-center gap-2 flex" onClick={toggleRecord}>
                                <div class="w-6 h-6 justify-center items-center gap-2 flex">
                                    <div class="w-4 h-4 bg-rose-500 rounded-full"></div>
                                </div>
                                <div class="text-zinc-800 text-sm font-normal font-['Open Sans'] leading-tight">
                                    {record ? 'Kết thúc' : 'Bắt đầu'}
                                </div>
                            </button>
                            }

                        </div>
                    </div>
                </div>
            </div>
          </div></>



          : null}
          
          </>
  );
}


export default NonFileUI;