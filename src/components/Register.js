import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [checkEmptyEmail, setCheckEmptyEmail] = useState(true);
  const [checkEmptyPassword, setCheckEmptyPassword] = useState(true);    

  var email = React.createRef();
  var password = React.createRef();
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const login = () => {
    if(email.current.value.trim() === '') {
      setCheckEmptyEmail(false);
    } else {
      setCheckEmptyEmail(true);
    }

    if(password.current.value.trim() === '') {
      setCheckEmptyPassword(false);
    } else {
      setCheckEmptyPassword(true);
    }
    if(email.current.value.trim() === '' || password.current.value.trim() === '') {
      return;
    }

    var body = {
      "username": email.current.value,
      "password": password.current.value
    }
    fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(body),
      // mode: 'no-cors'
    }).then(response => {
      console.log(response);
      if(response.status === 200) {
        alert('Register success');
        navigate('/login');
      } else {
        alert(response.message);
      }
    }).catch(error => {
      console.error('Error:', error);
    });
    
  }

  return (
    <>
    <div class="w-screen h-screen bg-gradient-to-b from-blue-600 to-blue-900 relative inline-flex items-center justify-center">
    <div class="w-7/12 h-screen bg-gradient-to-b from-blue-600 to-blue-900 relative flex items-center justify-center">
      <div class="text-white text-4xl font-extrabold font-['Open Sans'] leading-[54px]">Phần mềm chuyển đổi tiếng nói/hình ảnh<br/>thành văn bản</div>
      <div class="left-[32px] top-[40px] absolute">
        <svg width="70" height="70" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 3">
        <circle id="Ellipse 4" cx="4" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 10" cx="4" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 16" cx="4" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 22" cx="4" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 28" cx="4" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 34" cx="4" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 5" cx="22" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 11" cx="22" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 17" cx="22" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 23" cx="22" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 29" cx="22" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 35" cx="22" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 6" cx="40" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 12" cx="40" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 18" cx="40" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 24" cx="40" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 30" cx="40" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 36" cx="40" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 7" cx="58" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 13" cx="58" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 19" cx="58" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 25" cx="58" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 31" cx="58" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 37" cx="58" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 8" cx="76" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 14" cx="76" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 20" cx="76" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 26" cx="76" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 32" cx="76" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 38" cx="76" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 9" cx="94" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 15" cx="94" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 21" cx="94" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 27" cx="94" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 33" cx="94" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 39" cx="94" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        </g>
        </svg>
      </div>
      <div class="right-[32px] bottom-[20px] absolute">
      <svg width="70" height="70" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 3">
        <circle id="Ellipse 4" cx="4" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 10" cx="4" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 16" cx="4" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 22" cx="4" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 28" cx="4" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 34" cx="4" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 5" cx="22" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 11" cx="22" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 17" cx="22" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 23" cx="22" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 29" cx="22" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 35" cx="22" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 6" cx="40" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 12" cx="40" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 18" cx="40" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 24" cx="40" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 30" cx="40" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 36" cx="40" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 7" cx="58" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 13" cx="58" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 19" cx="58" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 25" cx="58" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 31" cx="58" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 37" cx="58" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 8" cx="76" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 14" cx="76" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 20" cx="76" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 26" cx="76" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 32" cx="76" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 38" cx="76" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 9" cx="94" cy="4" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 15" cx="94" cy="22" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 21" cx="94" cy="40" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 27" cx="94" cy="58" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 33" cx="94" cy="76" r="4" fill="white" fill-opacity="0.4"/>
        <circle id="Ellipse 39" cx="94" cy="94" r="4" fill="white" fill-opacity="0.4"/>
        </g>
        </svg>
      </div>
      <div class="left-[600px] top-[-70px] absolute">
        <svg width="366" height="375" viewBox="0 0 366 375" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="352.5" cy="22.5" r="352.5" fill="white" fill-opacity="0.05"/>
        <circle cx="352.499" cy="22.5002" r="253.593" fill="white" fill-opacity="0.05"/>
        <circle cx="352.502" cy="22.5002" r="162.737" fill="white" fill-opacity="0.05"/>
        </svg>
      </div>
      <div class="left-[-50px] bottom-[0px] absolute">
        <svg width="245" height="245" viewBox="0 0 245 245" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0.5" cy="244.5" r="244.5" fill="white" fill-opacity="0.15"/>
        </svg>
      </div>
    </div>

    <div class="w-5/12 h-screen py-12 bg-white flex-col justify-center items-center inline-flex">
        <div class="self-stretch h-[390px] px-12 flex-col justify-center items-center gap-12 flex">
            <div class="h-[390px] w-3/4 flex-col justify-start items-start gap-8 flex">
                <div class="text-blue-600 text-4xl font-bold font-['Open Sans'] leading-[54px]">Đăng ký</div>
                <div class="self-stretch h-[168px] flex-col justify-start items-start gap-4 flex">
                    <div class="self-stretch h-[76px] flex-col justify-start items-start gap-2 flex">
                        <div class="justify-start items-start inline-flex">
                            <div class="text-slate-900 text-sm font-normal font-['Open Sans'] leading-tight">Email</div>
                            
                        </div>
                        <div class={checkEmptyEmail ? "self-stretch px-4 py-3.5 bg-white rounded border border-zinc-300 justify-start items-center gap-2.5 inline-flex" : "self-stretch px-4 py-3.5 bg-white rounded border border-rose-500 justify-start items-center gap-2.5 inline-flex"}>

                            <input type="text" class="grow shrink basis-0 text-zinc-400 text-sm font-normal font-['Open Sans'] leading-tight" placeholder="Nhập địa chỉ email" ref={email}/>
                        </div>
                    </div>
                    <div class="self-stretch h-[76px] flex-col justify-start items-start gap-2 flex">
                        <div class="justify-start items-start inline-flex">
                            <div class="text-slate-900 text-sm font-normal font-['Open Sans'] leading-tight">Mật khẩu</div>
                        </div>
                        <div class={checkEmptyPassword ? "self-stretch px-4 py-3.5 rounded border border-zinc-300 justify-start items-center gap-2.5 inline-flex" : "self-stretch px-4 py-3.5 rounded border border-rose-500 justify-start items-center gap-2.5 inline-flex"}>
                            <input type={showPassword ? "text" : "password"} class="grow shrink basis-0 text-zinc-400 text-sm font-normal font-['Open Sans'] leading-tight" placeholder="Nhập mật khẩu" ref={password}/>
                            <div class="w-5 h-5 relative">
                              <button onClick={togglePassword} class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full justify-center items-center inline-flex">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Eye" clip-path="url(#clip0_11291_11061)">
                                
                                {showPassword ? null : <path id="Vector" d="M3.75 3.125L16.25 16.875" stroke="#ADADAD" stroke-linecap="round" stroke-linejoin="round"/>}

                                <path id="Vector_2" d="M12.1026 12.3125C11.4893 12.8701 10.6796 13.1612 9.8517 13.1218C9.02376 13.0824 8.24538 12.7157 7.6878 12.1023C7.13023 11.489 6.83913 10.6793 6.87854 9.8514C6.91795 9.02345 7.28465 8.24508 7.89796 7.6875" stroke="#ADADAD" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_3" d="M10.5859 6.93066C11.2503 7.05789 11.8555 7.39726 12.3105 7.89779C12.7655 8.39832 13.0459 9.03299 13.1094 9.70645" stroke="#ADADAD" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_4" d="M16.2961 13.2109C17.9992 11.6859 18.7484 10 18.7484 10C18.7484 10 16.2484 4.37501 9.99844 4.37501C9.4572 4.37427 8.91683 4.41817 8.38281 4.50626" stroke="#ADADAD" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_5" d="M5.78125 5.35938C2.59609 6.97187 1.25 10 1.25 10C1.25 10 3.75 15.625 10 15.625C11.4645 15.6365 12.9106 15.2991 14.2188 14.6406" stroke="#ADADAD" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_11291_11061">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                              </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="self-stretch px-4 py-3.5 bg-blue-600 rounded justify-center items-center gap-2 inline-flex" onClick={login}>
                    <div class="text-center text-white text-sm font-medium font-['Open Sans'] leading-tight">Đăng ký</div>
                </button>
                <div class="justify-start items-start gap-2 inline-flex">
                    <div class="text-zinc-600 text-base font-normal font-['Open Sans'] leading-normal">Bạn đã có tài khoản?</div>
                    <a href='/login' class="text-blue-600 text-base font-semibold font-['Open Sans'] leading-normal">Đăng nhập</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Register;
