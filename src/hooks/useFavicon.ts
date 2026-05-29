import { useEffect } from 'react';

export function useFavicon() {
  useEffect(() => {
    // Remove any existing favicons
    const existingFavicons = document.querySelectorAll("link[rel*='icon']");
    existingFavicons.forEach((favicon) => favicon.remove());

    // Generate PNG favicon dynamically
    const generateFavicon = (size: number, isAppleIcon: boolean = false) => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

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

      // Convert to data URL and add as favicon
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('link');
      link.rel = isAppleIcon ? 'apple-touch-icon' : 'icon';
      link.type = 'image/png';
      link.href = dataUrl;
      document.head.appendChild(link);
    };

    // Generate different sizes
    generateFavicon(32, false); // Standard favicon
    generateFavicon(180, true); // Apple touch icon

    // Update document title
    document.title = 'DukaLabs - Business Technology Solutions';

    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Professional business technology solutions for African enterprises. From websites to complete digital infrastructure.'
    );

    // Add theme color
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute('content', '#6B8BC3');
  }, []);
}
