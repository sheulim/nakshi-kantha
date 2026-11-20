import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer
import os

# ============================================================
# CHANGE THIS after you host the site
# Example: "https://your-name.netlify.app/"
BASE_URL = "https://your-site.netlify.app/"
# ============================================================

OUTPUT_DIR = "images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

videos = [
    {"id": "layering-basting", "title": "Layering and Basting"},
    {"id": "running-stitch", "title": "Artisan showing a basic running stitch"},
    {"id": "fabric-coaster", "title": "Making of fabric coaster"},
    # Add more here later, e.g.:
    # {"id": "new-process", "title": "Your New Title"},
]

for v in videos:
    data = f"{BASE_URL}video-{v['id']}.html"
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=2,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(
        fill_color="#3E2723",
        back_color="#F5F0E8",
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer()
    )
    img.save(f"{OUTPUT_DIR}/qr-{v['id']}.png")
    print(f"✓ {v['title']}")
    print(f"  → {data}")

print(f"\nQR codes saved in ./{OUTPUT_DIR}/")
print("Update BASE_URL above and re-run this script after hosting.")
