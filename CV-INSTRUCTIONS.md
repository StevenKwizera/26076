# CV Download Instructions

## How to Create cv.pdf

The CV is currently available as `cv.html`. To create a PDF version:

### Option 1: Using Browser (Recommended)
1. Open `cv.html` in your web browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac) to open print dialog
3. Select "Save as PDF" as the destination
4. Save it as `cv.pdf` in the same directory

### Option 2: Online Converter
1. Upload `cv.html` to an online HTML to PDF converter
2. Download the converted PDF
3. Save it as `cv.pdf` in your project directory

### Option 3: Using Command Line Tools
If you have tools like `wkhtmltopdf` installed:
```bash
wkhtmltopdf cv.html cv.pdf
```

Once `cv.pdf` is created, the "Download CV" button on all pages will work correctly!

## Note
The Download CV button is already configured to download `cv.pdf` when clicked. Just make sure the PDF file exists in the project root directory.
