
1. 所有 mdbook 的目錄都用 .gitignore /book/
2. mdbook 的 `src/SUMMARY.md` 內的檔名不能有空格。例如不能這樣 `- [第一章](./chapter 01.md)`，要改成 `- [第一章](./chapter-01.md)`。加 `-` 而不是 `_` 則是網址的一般作法
3. `index.md` 用 [mdconv](https://github.com/kevwan/mdconv)，指令 `./md2html -i index.md -o index.html`。出乎意料的，好的 markdown 2 html 試了4, 5 個才找到不錯的。程式放在程式庫中，以免哪天原作者刪了 GitHub repo，反正才 800 多 KB