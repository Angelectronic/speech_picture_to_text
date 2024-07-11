import React from "react";
import { message, Upload } from 'antd';
import { ReactComponent as FileImage } from '../resources/FileImage.svg';
import { ReactComponent as Trash } from '../resources/Trash.svg';
import { ReactComponent as Camera } from '../resources/Camera.svg';
import { ReactComponent as Camera2 } from '../resources/Camera2.svg';
import { ReactComponent as X } from '../resources/X.svg';
import Webcam from "react-webcam";


const { Dragger } = Upload;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};


function imgUrlToBlob(url) {
    const arr = url.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

    
  
function NonImgUI({ onStateChange }) {

    const [imageUrl, setImageUrl] = React.useState(null);
    const [webcam, setWebcam] = React.useState(false);

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        // post imageSrc to server asynchronously
        const formData = new FormData();
        const blob = imgUrlToBlob(imageSrc);
        formData.append('file', blob, 'img.jpg');

        fetch('http://localhost:8000/getImg', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        setImageUrl(imageSrc);
        setWebcam(false);
        onStateChange(imageSrc);
    
    }, [webcamRef, onStateChange]);

    const props = {
        name: 'file',
        action: 'http://localhost:8000/getImg',
        accept: ".jpg,.png,.jpeg",
        onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
            
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);

            getBase64(info.file.originFileObj, imageUrl => {
                setImageUrl(imageUrl);
                onStateChange(imageUrl);
            });

        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        multiple: false,
        previewFile(file) {
            // show preview
            getBase64(file, imageUrl => {
                setImageUrl(imageUrl);
            });
            return new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const img = new Image();
                    img.src = reader.result;
                    img.onload = () => {
                        resolve({
                            url: reader.result,
                            width: img.width,
                            height: img.height,
                        });
                    };
                };
            });
        }
        
    };

  return (
    <>
    <div class="w-[368px] h-[383px] flex-col justify-start items-start gap-4 inline-flex">
        

        { 
        imageUrl ? 
        <>
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        <div class="w-full flex-col justify-center items-center gap-4 flex">
            <button class="justify-center items-center gap-1 flex" onClick={() => { setImageUrl(null); onStateChange(null); }}>
                <div class="w-5 h-5 relative">
                    <Trash />
                </div>
                <div class="text-center text-rose-500 text-sm font-normal font-['Open Sans'] leading-tight">Xóa</div>
            </button>
        </div>
        </>
        :
        <>
        <div class="w-full h-[172px]">
            <Dragger {...props}>
                <p className="ant-upload-drag-icon flex justify-center items-center">
                    <FileImage />
                </p>
                <p className="ant-upload-text">Tải lên file ảnh hoặc kéo thả</p>
                <p className="ant-upload-hint">Định dạng hỗ trợ: jpg, png...</p>
            </Dragger>
        </div>
        <div class="self-stretch h-[172px] p-4 bg-white rounded-xl border border-zinc-300 flex-col justify-center items-center gap-4 flex mt-6">
            <div class="p-3 bg-rose-50 rounded-xl flex-col justify-center items-center gap-2 flex">
                <div class="w-8 h-8 relative">
                    <Camera />
                </div>
            </div>
            <div class="text-zinc-800 text-sm font-semibold font-['Open Sans'] leading-tight">Chuyển đổi chụp ảnh trực tiếp</div>
            <button class="px-2 py-1.5 bg-indigo-50 rounded justify-center items-center gap-2 inline-flex" onClick={() => setWebcam(true)}>
                <div class="text-center text-blue-600 text-sm font-medium font-['Open Sans'] leading-tight">Chụp ảnh</div>
            </button>
            
        </div>
        </>
        }    
    </div>

    {
        webcam ? 
        <>
        <div class="fixed inset-0 bg-black bg-opacity-50 z-50" id="overlay"></div>
        <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="w-[776px] h-[659px] p-6 bg-white rounded-2xl flex-col justify-center items-center gap-6 inline-flex">
            <div class="self-stretch justify-start items-center gap-1.5 inline-flex">
                <div class="grow shrink basis-0 text-slate-900 text-xl font-semibold font-['Open Sans'] leading-[30px]">Chụp ảnh trực tiếp</div>
                <button class="p-[7px] bg-rose-50 rounded-[15px] justify-center items-center gap-2.5 flex" onClick={() => setWebcam(false)}>
                    <div class="w-4 h-4 relative">
                        <X />
                    </div>
                </button>
            </div>
            <div class="self-stretch h-[485px] flex-col justify-center items-center gap-2 flex">
                <div class="self-stretch h-[68px] flex-col justify-start items-start gap-2 flex">
                    <div class="justify-start items-start inline-flex">
                        <div class="text-slate-900 text-sm font-normal font-['Open Sans'] leading-tight">Nguồn Camera</div>
                    </div>
                    <div class="self-stretch px-4 py-2.5 bg-white rounded border border-zinc-400 justify-between items-center inline-flex">
                        <div class="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['Open Sans'] leading-tight">Camera 01</div>
                        <div class="justify-center items-center gap-2 flex">
                            <div class="w-4 h-4 relative">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[728px] flex-col justify-center items-center gap-2 flex">
                    <Webcam class="h-[450px]" ref={webcamRef} screenshotFormat="image/jpeg" />
                </div>
            </div>
            <div class="self-stretch justify-center items-center gap-4 inline-flex">
            <button class="px-4 py-3 rounded-lg border border-zinc-300 justify-center items-center gap-2 flex" onClick={capture}>
                <div class="w-6 h-6 relative">
                    <Camera2 />
                </div>
                <div class="text-zinc-800 text-sm font-normal font-['Open Sans'] leading-tight">Chụp ảnh</div>
            </button>
            </div>
        </div>
        </div>
        </>
        : null
    }

    </>
  );
}


export default NonImgUI;