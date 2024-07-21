from ocr.OCR_2 import OCR
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pdf2images import *
from pydantic import BaseModel
from typing import List
import os

ocr = OCR(thresh=0.5, visible=False)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Cho phép các nguồn gốc được xác định
    allow_credentials=True,
    allow_methods=["*"],  # Cho phép tất cả các phương thức (GET, POST, PUT, DELETE)
    allow_headers=["*"],  # Cho phép tất cả các headers
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.post("/login")
async def login(body: dict):
    users = [("admin", "123")]

    username = body.get("username")
    password = body.get("password")
    if (username, password) in users:
        return {"status": "success"}
    else: # status 401: Unauthorized
        raise HTTPException(status_code=401, detail="Incorrect username or password")

@app.post("/getImg")
async def get_img(file: UploadFile = File(...)):
    if not os.path.exists("./img"):
        os.makedirs("./img")
    print(file.filename)
    with open(f"./img/{file.filename}", "wb") as img:
        img.write(file.file.read())
    return True
class ImageNames(BaseModel):
    names: List[str]
@app.get("/convertImg")
async def convert_img_to_text(image_names: ImageNames):
    # results = {}
    print(image_names.names)
    if len(image_names.names)==0:
        return "Vui lòng lựa chọn file";
    filename = image_names.names[0]

    file_ext = filename[filename.rfind('.'):].lower()
    images_path = [filename]
    results = []
    if file_ext == '.pdf':
        images_path = pdf_to_images(filename, "images")
    # Hiển thị ảnh
    for img_file in images_path:
        print("processing ",img_file)
        # Xử lý ảnh và trích xuất văn bản sử dụng OCR
        text = ocr.process_single_image(img_file)
        results.append(text)
    return {"text": '\n------------Page-----------\n'.join(results)}
