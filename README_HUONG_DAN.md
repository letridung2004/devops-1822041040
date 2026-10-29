# BÀI TẬP GITHUB ACTIONS — HƯỚNG DẪN THỰC HIỆN

## 1. Trước khi bắt đầu
- Thay `[HỌ TÊN]`, `[MSSV]`, `[LỚP]` trong `index.html` bằng thông tin của bạn.
- Repository phải có tên đúng dạng `devops-MSSV` (ví dụ `devops-2274801234`).
- Tên nhánh chính dùng trong bài là `main`.

## 2. Tạo repository và đưa code lên GitHub
1. Đăng nhập https://github.com và nhấn dấu `+` → `New repository`.
2. Repository name: `devops-MSSV`; chọn **Public**. Có thể bỏ chọn README để dễ push lần đầu.
3. Trên máy tính, giải nén thư mục bài tập. Mở thư mục bằng VS Code.
4. Mở Terminal trong VS Code và chạy lần lượt (thay URL bằng URL repo của bạn):

```bash
git init
git branch -M main
git add .
git commit -m "Initial website and CI/CD workflow"
git remote add origin https://github.com/USERNAME/devops-MSSV.git
git push -u origin main
```

Nếu Git báo thiếu danh tính, chạy:
```bash
git config --global user.name "Ho Ten"
git config --global user.email "email-github-cua-ban@example.com"
```
Sau đó chạy lại `git commit` và `git push`. Nếu thư mục đã có Git remote, không chạy `git remote add origin` lần nữa.

## 3. Bật GitHub Pages
1. Mở repository trên GitHub → **Settings** → **Pages**.
2. Ở **Build and deployment** → **Source**, chọn **GitHub Actions**.
3. Lưu nếu GitHub hiển thị nút Save.

## 4. Theo dõi workflow
1. Mở tab **Actions**.
2. Chọn workflow `Check and Deploy Website`.
3. Khi job `check` và `deploy` đều xanh, mở URL dạng:
   `https://USERNAME.github.io/devops-MSSV/`
4. Chờ vài phút nếu website chưa xuất hiện. Kiểm tra repo name, nhánh `main`, Pages source và log Actions.

## 5. Thử nghiệm pipeline thất bại (bắt buộc)
1. Mở `index.html`, xóa nguyên dòng `<title>...</title>` nhưng giữ các file khác.
2. Lưu, sau đó chạy:
```bash
git add index.html
git commit -m "Test failing title check"
git push
```
3. Vào tab **Actions**. Job `check` phải đỏ do lệnh `grep` không tìm thấy thẻ title; job `deploy` bị bỏ qua vì `needs: check`.
4. Chụp ảnh minh chứng.
5. Sửa lại thẻ title hợp lệ, đồng thời đổi nội dung website thành **Phiên bản 2.0** (ví dụ sửa dòng tiêu đề trong `index.html` thành `Website cá nhân - Phiên bản 2.0 - [HỌ TÊN]`).
6. Commit và push:
```bash
git add index.html
git commit -m "Fix title check and update website to version 2.0"
git push
```
7. Chờ cả hai job xanh, tải lại website để xác nhận nội dung cập nhật.

## 6. Giải thích workflow deploy.yml
- `on`: workflow chạy khi push lên nhánh `main`, hoặc khi chạy thủ công.
- `permissions`: cấp quyền tối thiểu cần thiết để đọc mã nguồn và triển khai Pages.
- `jobs`: nhóm các công việc trong pipeline.
- `check`: kiểm tra tồn tại đủ 3 file và `index.html` có thẻ `<title>`.
- `runs-on`: dùng máy ảo Ubuntu do GitHub cung cấp.
- `steps`: các bước được chạy theo thứ tự.
- `needs: check`: job `deploy` chỉ chạy nếu `check` thành công.
- `actions/deploy-pages`: triển khai artifact lên GitHub Pages.

## 7. Danh sách ảnh cần chụp để đưa vào Word
1. Thông tin sinh viên, link repo và link website.
2. Cây thư mục trong VS Code, thấy `index.html`, `style.css`, `script.js` và `.github/workflows/deploy.yml`.
3. Nội dung 3 file website.
4. Terminal sau khi `git push` thành công.
5. Settings → Pages có Source là GitHub Actions.
6. File `deploy.yml` và phần giải thích trong báo cáo.
7. Tab Actions có `check` và `deploy` xanh.
8. Website trên trình duyệt, thấy URL và họ tên.
9. Lần chạy lỗi: `check` đỏ và `deploy` bị skipped.
10. Website sau cập nhật phiên bản 2.0.
11. Phần nhận xét CI/CD.

Lưu ý: ảnh minh chứng phải là ảnh chụp thật từ máy và tài khoản GitHub của bạn. Không sử dụng ảnh giả lập.
