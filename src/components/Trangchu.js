import React from "react"
import NonFileUI from "./NonAudio"
import HaveAudioUI from "./HaveAudio"
import NonImgUI from "./NonImage";
import { Tabs } from 'antd';
import { Space, Switch } from 'antd';

function Trangchu() {
    const [audio, setAudio] = React.useState(null);
    const [img, setImg] = React.useState(null);
    const [curTab, setCurTab] = React.useState("1");
    const [resultText, setResultText] = React.useState("Kết quả chuyển đổi");
    const [colorText, setColorText] = React.useState("text-zinc-400");
    const [languageEnglish, setLanguageEnglish] = React.useState(true);
    const [flag_record, setFlagRecord] = React.useState(false);

    const handleAudioUpload = (audioFile) => {
        setAudio(audioFile);
        setFlagRecord(true);
    }

    const handleImgUpload = (newState) => {
        console.log("newState: ", newState);
        setImg(newState);
    }

    const handleTabChange = (key) => {
        setCurTab(key);
    }

    const convertType = [
        {
          key: '1',
          label: 'Chuyển đổi từ giọng nói',
          children:
            <div class="self-stretch h-[383px] flex-col justify-start items-start gap-4 flex">
                {audio ? <HaveAudioUI state={audio} setState={setAudio} /> : <NonFileUI onStateChange={handleAudioUpload} flag_record={flag_record} />}
            </div>,
        },
        {
          key: '2',
          label: 'Chuyển đổi từ ảnh',
          children: 
            <div class="self-stretch h-[383px] flex-col justify-start items-start gap-4 flex">
                <NonImgUI onStateChange={handleImgUpload} />
            </div>,
        }
      ];
      

    const handleConvert = () => {
        // Call API here
        if (audio && curTab === "1") {
            //upload audio to server
            const formData = new FormData();

            // Convert HTMLAudioElement to wav file
            fetch(audio.src)
                .then(response => response.blob())
                .then(blob => {
                    console.log("file_size: ", blob.size); 
                    formData.append("file", blob, "audio.wav");
                    formData.append("language", languageEnglish ? "en-US" : "vi-VN");

                    fetch("http://localhost:8000/convertAudio", {
                        method: "POST",
                        body: formData
                    }).then((response) => {
                        return response.json();
                    }).then((data) => {
                        setResultText(data.text);

                        // Change color of text to black
                        setColorText("text-black");
                    }).catch((error) => { // handle the error of calling API
                        console.error("Error:", error);
                        setResultText("Có lỗi xảy ra khi chuyển đổi");
                        setColorText("text-red-600");
                    });
                })
                .catch(error => { // handle the error of converting audio to wav file
                    console.error("Error:", error);
                    setResultText("Có lỗi xảy ra khi tải file");
                    setColorText("text-red-600");
                }
            );  
        } else if (img && curTab === "2") {

            const body = { names: [...new Set(img.map(item => item.name))] };

            fetch("http://localhost:8000/convertImg", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
                
            }).then((response) => {
                return response.json();
            }).then((data) => {
                const results = data.results;
                const resultText = results ? Object.values(results).join("\n\n") : "";
                setResultText(resultText);

                // Change color of text to black
                setColorText("text-black");
            }).catch((error) => { // handle the error of calling API
                console.error("Error:", error);
                setResultText("Có lỗi xảy ra khi chuyển đổi");
                setColorText("text-red-600");
            });
        }
    }

    // Language switch
    const onChangesLanguage = (checked) => {
        setLanguageEnglish(checked);
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
                        <div class="w-full h-full">
                            <Tabs defaultActiveKey="1" items={convertType} centered onChange={handleTabChange} />
                        </div>
                        {curTab === "1" ? <Space direction="vertical">
                            <Switch checkedChildren="English" unCheckedChildren="Tiếng Việt" defaultChecked onChange={onChangesLanguage} />
                        </Space> : null}
                        
                        
                        <button class="self-stretch px-4 py-3.5 bg-blue-600 rounded justify-center items-center gap-2 inline-flex disabled:opacity-50" onClick={handleConvert} disabled={!(audio && curTab === "1") && !(img && curTab === "2")}>
                            <div class="w-5 h-5 relative"></div>
                            <div class="text-center text-white text-sm font-medium font-['Open Sans'] leading-tight">Chuyển đổi</div>
                        </button>
                    </div>
                </div>
                    <div class="grow shrink basis-0 self-stretch bg-white rounded-lg flex-col justify-start items-start inline-flex">
                        <div class="self-stretch p-4 bg-white border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                            <div class={`text-lg font-semibold font-['Open Sans'] leading-7 text-zinc-800`}>Kết quả chuyển đổi</div>
                        </div>
                        <div class="self-stretch grow shrink basis-0 p-4 flex-col justify-start items-start gap-2 flex">
                            <div class="self-stretch grow shrink basis-0 pl-4 pr-1 pt-3 pb-1 bg-white rounded border border-zinc-300 flex-col justify-between items-end flex overflow-y-auto">
                                <div class={`self-stretch ${colorText} text-sm font-normal font-['Open Sans'] leading-tight`}>
                                    <p dangerouslySetInnerHTML={{__html: resultText.replace(/\n/g, "<br />")}}></p>
                                </div>
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
  