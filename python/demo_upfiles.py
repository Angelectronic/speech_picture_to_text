# #streamlit run webapp.py --server.port=5000
import streamlit as st
#from pydub import AudioSegment
#import model here
import os
# from test_W2V import Speech2Text_demo
from service_ASR import instance_fileaudio, instance_fileaudio_en
from pathlib import Path
from audiorecorder import audiorecorder
import subprocess
root_dir = str(Path(__file__).parents[0])
root_dir = os.path.join(root_dir, 'test_audio')
filename ='recorded.wav'

def audio_to_monopcm_wav(src, dst, keepsource = False):
    if os.path.exists(dst):
        os.remove(dst)
    # convert mp3 to wav file
    subprocess.call([
        'ffmpeg',
        '-i', '%s' % src,
        '-ar', '16000',
        '-ac', '1',
         '%s' % dst,
    ])
    if not keepsource:
        os.remove(src)


def do_asr(file_path, language):
    rs =""
    if language == 'Vietnamese':
        rs = instance_fileaudio(file_path)
        # print(rs)
        rs = ' '.join([token['text'] for token in rs])
    else: # language == 'English':
        rs = instance_fileaudio_en(file_path)
        rs = ' '.join([token for token in rs])
    st.write(rs)
st.title("Ứng dụng chuyển đổi giọng nói thành văn bản tiếng Việt")
col1, col2 = st.columns([1,1])
with col1:
    option_audio_source = st.radio(
        "Nguồn âm thanh", key="audio_source",
        options=["Thu âm","File audio"], horizontal=False
        )
with col2:
    option_language = st.radio(
        "Nguồn âm thanh", key="language",
        options=["Tiếng Việt","Tiếng Anh"], horizontal=True
        )
audio = None
uploaded_file = None
language = "Vietnamese"
if option_language =="Tiếng Anh":
    language = "English"
if option_audio_source == "Thu âm":
    audio = audiorecorder("Thu âm", "Đang thu âm...")
else:
    uploaded_file = st.file_uploader("Chọn 1 file audio", type=[".wav", ".wave", ".flac", ".mp3","m4a"], accept_multiple_files=False)

if audio is not None and len(audio) > 0 and option_audio_source == "Thu âm":
    # To play audio in frontend:
    #st.audio(audio.tobytes())
    st.audio(audio.export().read())

    # To save audio to a file:
    audio_file = os.path.join(root_dir, filename)
    #wav_file = open(audio_file, "wb")
    audio.export(audio_file, format="wav")
    #wav_file.write(audio.tobytes())
    audio_to_monopcm_wav(audio_file, os.path.join(root_dir, 'converted.wav'))
    # recognize
    # result = Speech2Text_demo(os.path.join(root_dir, 'converted.wav'))
    #print(os.path.join(root_dir, 'converted.wav'))
    # result = instance_fileaudio(os.path.join(root_dir, 'converted.wav'))
    # st.write(result)
    do_asr(os.path.join(root_dir, 'converted.wav'), language)

if uploaded_file is not None:
    print('True')
    print(uploaded_file)
    print(uploaded_file.name)
    audio_bytes = uploaded_file.read()
    print('Playing Audio')
    st.audio(audio_bytes, format='audio/wav')

    # To save audio to a file:
    audio_file = os.path.join(root_dir, filename)
    wav_file = open(audio_file, "wb")
    wav_file.write(audio_bytes)

    audio_to_monopcm_wav(audio_file, os.path.join(root_dir, 'converted.wav'))
    # recognize
    # result = Speech2Text_demo(os.path.join(root_dir, 'converted.wav'))
    # result = instance_fileaudio(os.path.join(root_dir, 'converted.wav'))
    # st.write(result)
    do_asr(os.path.join(root_dir, 'converted.wav'), language)
