# ONLYOFFICE Personal

[![License](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](LICENSE)

ONLYOFFICE running offline, entirely in the browser. It uses `x2t.wasm` for document conversion, so there is no Document Server and no backend of any kind — open a static page and you can edit Word, Excel, PowerPoint and PDF files, with everything staying on your machine.

[中文](README.md) ｜ [Live Demo](https://fernfei.github.io/office.html)

![Main interface](docs/imgs/img.png)

## Highlights

- **No server**: opening, editing and exporting all happen in the browser; no file is ever uploaded.
- **Format support**: docx / xlsx / pptx and their ODF/CSV counterparts; PDF supports annotations, form filling and text editing.
- **Embeddable**: `onlyoffice.html` exposes a postMessage protocol so you can embed it in your own app and get the edited file back as a byte stream.
- **Static only**: host it on any static server, or bundle it straight into a frontend project.

Built from ONLYOFFICE 9.3, with the bundled **`x2t.wasm` upgraded to the latest 9.4 release**.

## Quick start

Serve the repository root with any static server, then open `office.html`:

```bash
# Python
python -m http.server 8000

# or Node.js
npx http-server -p 8000

# or PHP
php -S localhost:8000
```

Open <http://localhost:8000/office.html> in your browser.

`office.html` is a demo entry: create documents, open local files or URLs, keep recent files in the browser's IndexedDB, and save edits back to disk or download them. It also doubles as a complete integration example.

## Screenshots

Word document

![Word editor](docs/imgs/img_1.png)

Excel spreadsheet

![Excel editor](docs/imgs/img_2.png)

PowerPoint presentation

![PowerPoint editor](docs/imgs/img_3.png)

PDF editing

![PDF editor](docs/imgs/img_5.png)

## Integrating into your own app

Copy the whole repo (`onlyoffice.html`, the `9.3.0.134-*` build directory, `assets/`, `blank/`) into your frontend's static folder, embed `onlyoffice.html` in an iframe, then inject documents and retrieve file streams over postMessage.

- **[Integration guide](docs/使用文档.md)** (Chinese): the three ways to integrate, docConfig options, the message protocol, saving file streams, rename, save-as, the Automation API connector, plus a Vue component wrapper.
- **[How the file stream works](docs/集成教程-文件流提取.md)** (Chinese): the offline build has no save callback — this explains how the bytes are pulled out of `x2t.downloadFile`.

## Project structure

```
OnlyofficePersonal/
├── 9.3.0.134-*/          # ONLYOFFICE build (web-apps / sdkjs / fonts)
├── assets/               # favicon, blank PDF and other static assets
├── blank/                # blank templates for creating new documents
├── docs/                 # documentation and screenshots
├── office.html           # demo entry (standalone use)
└── onlyoffice.html       # integration entry (iframe + postMessage)
```

## License

[AGPL-3.0](LICENSE). ONLYOFFICE components are copyright of [ONLYOFFICE](https://www.onlyoffice.com/).

## Contact

ONLYOFFICE discussion group (QQ): <https://qm.qq.com/q/hVJ1Wbv8Na>

![Discussion group](docs/imgs/img_4.png)
