import streamlit as st
from ocr.OCR_2 import OCR
from pdf2images import *
ocr = OCR(thresh=0.5, visible=False)

st.title("Ứng dụng chuyển hình ảnh sang văn bản")
st.write("(Giới hạn %d trang)"% page_limit)

image = st.file_uploader("Chọn ảnh", type=["jpg", "png", "jpeg", "pdf"])
# Hiển thị ảnh và kết quả OCR
# Tạo hai cột
col1, col2 = st.columns(2)


if image is not None:
    file_ext = image.name[image.name.rfind('.'):].lower()
    uploaded_name = 'uploaded%s' % file_ext
    with open(uploaded_name, "wb") as f:
        f.write(image.getbuffer())

    images_path = [uploaded_name]
    print(file_ext)
    if file_ext == '.pdf':
        images_path = pdf_to_images(uploaded_name, "images")
    # Hiển thị ảnh
    for img_file in images_path:
        with col1:
            print("processing ",img_file)
            st.image(img_file, caption='', use_column_width=True)
        with col2:
            # Xử lý ảnh và trích xuất văn bản sử dụng OCR
            text = ocr.process_single_image(img_file)
            # Hiển thị kết quả OCR
            st.write(text)