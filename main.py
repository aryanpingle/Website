from PIL import Image


def process_image(src_path: str, mask_path: str, dst_path: str):
    # Open source and mask images
    src = Image.open(src_path).convert("RGBA")
    mask = Image.open(mask_path).convert("L")  # convert mask to grayscale

    # Ensure mask size matches the source image
    mask = mask.resize(src.size)

    # Apply mask as alpha channel
    result = src.copy()
    result.putalpha(mask)

    # Save or show
    result.save(dst_path)


process_image(
    "src/assets/originals/hero-1.png",
    "mask.png",
    "src/assets/processed/hero-1.png",
)

process_image(
    "src/assets/originals/Outer Wilds.jpg",
    "mask.png",
    "src/assets/processed/Outer Wilds.png",
)
