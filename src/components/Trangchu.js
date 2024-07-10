import React from "react"
import NonFileUI from "./NonFile"
import HaveAudioUI from "./HaveAudio"

function Trangchu() {
    const [audio, setAudio] = React.useState(null);
    const [resultText, setResultText] = React.useState("Kết quả chuyển đổi");

    const handleFileUpload = (newState) => {
        setAudio(newState);
    }

    const handleConvert = () => {
        // Call API here
        if (audio) {
            //upload audio to server
            const formData = new FormData();

            // Convert HTMLAudioElement to wav file
            fetch(audio.src)
                .then(response => response.blob())
                .then(blob => {
                    console.log("file_size: ", blob.size); 
                    formData.append("file", blob, "audio.wav");

                    fetch("http://localhost:8000/convertAudio", {
                        method: "POST",
                        body: formData
                    }).then((response) => {
                        return response.json();
                    }).then((data) => {
                        setResultText(data.text);
                    }).catch((error) => { // handle the error of calling API
                        console.error("Error:", error);
                    });
                })
                .catch(error => { // handle the error of converting audio to wav file
                    console.error("Error:", error);
                }
            );  
        }
    }

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
                            {audio ? <HaveAudioUI state={audio} setState={setAudio} /> : <NonFileUI onStateChange={handleFileUpload} />}
                        </div>
                        <button class="self-stretch px-4 py-3.5 bg-blue-600 rounded justify-center items-center gap-2 inline-flex disabled:opacity-50" disabled={!audio} onClick={handleConvert}>
                            <div class="w-5 h-5 relative"></div>
                            <div class="text-center text-white text-sm font-medium font-['Open Sans'] leading-tight">Chuyển đổi</div>
                        </button>
                    </div>
                </div>
                    <div class="grow shrink basis-0 self-stretch bg-white rounded-lg flex-col justify-start items-start inline-flex">
                        <div class="self-stretch p-4 bg-white border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                            <div class="text-zinc-800 text-lg font-semibold font-['Open Sans'] leading-7">Kết quả chuyển đổi</div>
                        </div>
                        <div class="self-stretch grow shrink basis-0 p-4 flex-col justify-start items-start gap-2 flex">
                            <div class="self-stretch grow shrink basis-0 pl-4 pr-1 pt-3 pb-1 bg-white rounded border border-zinc-300 flex-col justify-between items-end flex">
                                <div class="self-stretch text-zinc-400 text-sm font-normal font-['Open Sans'] leading-tight">{resultText}</div>
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
  