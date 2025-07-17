## 注意事項

1. books 內所有的目錄都是用 mdbook
1. 所有 mdbook 的目錄內都有 .gitignore /book/
1. mdbook 的 `src/SUMMARY.md` 內的檔名不能有空格。例如不能這樣 `- [第一章](./chapter 01.md)`，要改成 `- [第一章](./chapter-01.md)`。加 `-` 而不是 `_` 則是網址的一般作法
1. `index.md` 用 [mdconv](https://github.com/kevwan/mdconv)。指令 `md2html -i index.md -o index.html`。出乎意料的，好的 markdown 2 html 程式試了4, 5 個才找到不錯的

## 安裝

### md2html

``` bash
wget https://github.com/kevwan/mdconv/releases/download/v1.0.0/md2html-linux
chmod +x md2html-linux
mv md2html-linux md2html
sudo mv md2html /usr/local/bin/
```

### nginx

``` bash
# 初次執行
docker compose up -d
# 之後
docker compose start
```

### mdbook

``` bash
# 新增一本書
cd books/
mdbook init '書名'
# 預覽
mdbook serve
```
