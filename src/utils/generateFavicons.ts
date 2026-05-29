// Generate PNG favicons from SVG programmatically
export async function generatePNGFavicons() {
  const sizes = [32, 180]; // 32x32 for favicon.png, 180x180 for apple-touch-icon.png

  for (const size of sizes) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) continue;

    // Draw rounded rectangle background with gradient
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#6B8BC3');
    gradient.addColorStop(1, '#8BA3C7');

    const radius = size / 4;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(0, 0, size, size, radius);
    ctx.fill();

    // Draw letter "D"
    ctx.fillStyle = 'white';
    ctx.font = `bold ${size * 0.6}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('D', size / 2, size / 2);

    // Convert to blob and create object URL
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('link');
        link.rel = size === 180 ? 'apple-touch-icon' : 'icon';
        link.type = 'image/png';
        link.href = url;

        // Store reference for cleanup
        if (size === 32) {
          (window as any).__favicon_png_url = url;
        } else {
          (window as any).__apple_touch_icon_url = url;
        }
      }
    }, 'image/png');
  }
}
