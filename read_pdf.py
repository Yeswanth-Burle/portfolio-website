import sys

try:
    import PyPDF2
except ImportError:
    pass

def get_pdf_text(path):
    text = ""
    try:
        with open(path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        text = f"Error reading {path}: {e}"
    return text

old_cv = r"C:\Users\yeswa\OneDrive\Desktop\PORTFOLIO\assets\Yeswanth_Burle_CV.pdf"
new_cv = r"C:\Users\yeswa\OneDrive\Desktop\IMP\CV.pdf"

old_text = get_pdf_text(old_cv)
new_text = get_pdf_text(new_cv)

with open('cv_output_old.txt', 'w', encoding='utf-8') as f:
    f.write(old_text)

with open('cv_output_new.txt', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Wrote output to cv_output_old.txt and cv_output_new.txt")
