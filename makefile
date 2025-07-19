index.html: index.md
	md2html -i index.md -o index.html

clean:
	rm index.html

