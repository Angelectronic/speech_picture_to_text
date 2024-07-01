function Login() {
  return (
    <>
    <div class="w-[1137px] h-screen bg-gradient-to-b from-blue-600 to-blue-900 relative flex items-center justify-center">
      <div class="text-white text-4xl font-extrabold font-['Open Sans'] leading-[54px]">Phần mềm chuyển đổi tiếng nói/hình ảnh<br/>thành văn bản</div>
      <div class="left-[32px] top-[63px] absolute">
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
      <div class="right-[32px] bottom-[63px] absolute">
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
      <div class="left-[771px] top-[-100px] absolute">
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

    
    </>
  );
}

export default Login;
