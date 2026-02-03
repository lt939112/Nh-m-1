# TEAMMEGERFINISH - CODE FINISH CỦA TEAM

# APP QUẢN LÝ BÁN GIÀY (SHOE STORE)

## Minh họa
### SplashScreen - Home - ShoeDetail
*Bạn chèn link ảnh demo 3 màn hình này vào đây*
<p align="center">
  <img src=""width="32%"> 
  <img src="" width="32%">
  <img src="" width="32%">
  <img src="" width="32%">
</p>

### Register - Login - Login_Success
*Bạn chèn link ảnh demo phần đăng nhập vào đây*
<p align="center">
  <img src="https://github.com/user-attachments/assets/9a62f901-0f68-4d5e-8b89-63dac8c42308" width="32%">
  <img src="https://github.com/user-attachments/assets/c6ac62c9-3ede-4c7a-9fc7-52d52b6a9aa6" width="32%">
  <img src="https://github.com/user-attachments/assets/f3935f5b-a467-47cf-abce-60eb8d27b167" width="32%">
    <img src="https://github.com/user-attachments/assets/83f3a967-a740-4a1a-8195-6487086d5d32" width="32%>
</p>

---

## Hướng dẫn sử dụng
**Bước 1:Download file
**Download ZIP (Dễ nhất): Nhấn vào nút xanh Code -> Chọn Download ZIP. Sau đó, bạn giải nén file này ra một thư mục (ví dụ: Desktop/SHOE-DEV).
Git Clone (Dành cho dân chuyên): Nếu máy đã cài Git, bạn mở Terminal/CMD và gõ: git clone https://link-github-cua-ban.git

**Bước 2: Kiểm tra cấu trúc thư mục
Sau khi giải nén, hãy đảm bảo các file nằm đúng vị trí để không bị lỗi "mất hình" hay "mất style". Cấu trúc chuẩn của bạn nên như sau:
Plaintext
SHOE-DEV/
├── index.html       (Trang chủ)
├── about.html       (Giới thiệu nhóm)
├── cart.html        (Giỏ hàng)
├── style.css        (Giao diện - cực kỳ quan trọng)
├── script.js        (Logic sản phẩm)
├── cart.js          (Logic giỏ hàng)
├── logo.png         (Logo shop)
└── imgweb/          (Thư mục chứa ảnh giày - Phải có thư mục này mới hiện ảnh)

**Bước 3: Cách chạy dự án trên máy tính
Vì đây là web Frontend thuần túy, bạn không cần cài Server phức tạp. Có 2 cách để xem:
Cách 1 (Thủ công): Bạn tìm đến thư mục dự án, nhấn chuột phải vào file index.html -> Chọn Open with -> Chọn Google Chrome hoặc Microsoft Edge.
Cách 2 (Khuyên dùng - Live Server): Nếu bạn dùng Visual Studio Code, hãy cài Extension tên là "Live Server". Sau đó, chỉ cần nhấn chuột phải vào index.html và chọn Open with Live Server.
Ưu điểm: Mỗi khi bạn sửa code, web sẽ tự cập nhật mà không cần F5.
**Bước 4: Khắc phục các lỗi thường gặp khi mới tải về
1. Tại sao không thấy ảnh giày?
Trong file script.js, bạn đang để đường dẫn ảnh là ../imgweb/nike_1.png.
Lỗi: Nếu bạn để file script.js cùng cấp với thư mục imgweb, thì dấu ../ sẽ làm đường dẫn bị sai.
Sửa: Hãy đổi thành ./imgweb/nike_1.png hoặc đơn giản là imgweb/nike_1.png.
2. Tại sao nhấn "Đăng nhập" hay "Giỏ hàng" không chạy?
Kiểm tra lại thẻ <script> ở cuối các file HTML. Đảm bảo bạn đã nhúng đúng file:
HTML
<script src="script.js"></script><script src="cart.js"></script><script src="login.js"></script>
3. Tại sao giao diện bị "vỡ"?
Kiểm tra dòng này ở đầu mỗi file HTML: <link rel="stylesheet" href="style.css" />. Nếu file style.css nằm ngay cạnh file HTML thì đừng dùng ../style.css, chỉ dùng style.css thôi nhé.
  

## Link Review DEMO APP QUẢN LÝ BÁN GIÀY
👉 [Xem video tại đây)https://www.youtube.com/watch?v=tGfacVzyUzw

---

## Thông tin nhóm thực hiện
<img src="https://github.com/user-attachments/assets/588cc4df-28ef-4946-b26a-5685f94f619f" width="150"> **Tên: Đỗ Lâm Trường** , 🆔 MSSV: 24N01211 ,💻 Công việc:JavaScript nâng cao, Quản lý dữ liệu sản phẩm."
<img src="https://github.com/user-attachments/assets/096aea88-fa00-4c98-a05e-2a0a1be69683" width="150"> **Tên: Vũ Thái Huy** ,🆔 MSSV: 24N01214 ,💻 Công việc: HTML/CSS, Thiết kế UI/UX, Tối ưu giao diện Responsive."
*Học:Trường Trung Cấp Nghiệp Bình Dương
