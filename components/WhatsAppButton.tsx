'use client'

import { company } from '@/lib/copy'

export function WhatsAppButton() {
  const href = `https://wa.me/${company.whatsapp}?text=Hi%2C%20I%20found%20Biech%20online%20and%20would%20like%20to%20discuss%20a%20project.`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="white"
        aria-hidden
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.857 6.5L4 29l7.703-1.82A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.02-1.352l-.36-.213-3.735.882.918-3.622-.234-.376A9.944 9.944 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.5 5c-.277 0-.58.006-.836.263-.278.278-1.164 1.14-1.164 2.78 0 1.641 1.193 3.225 1.359 3.448.167.222 2.313 3.725 5.703 5.078 2.818 1.114 3.39.893 4.003.837.614-.056 1.976-.808 2.254-1.587.279-.78.279-1.447.195-1.587-.083-.14-.306-.222-.64-.39-.334-.167-1.976-.975-2.282-1.086-.306-.11-.528-.167-.75.167-.222.333-.862 1.085-1.057 1.308-.195.222-.39.25-.724.083-.334-.167-1.41-.52-2.686-1.657-1-.894-1.674-1.997-1.87-2.33-.195-.334-.02-.515.147-.68.15-.15.334-.39.5-.585.167-.195.222-.334.334-.557.11-.222.056-.418-.028-.585-.083-.167-.742-1.813-1.028-2.474-.269-.632-.543-.543-.75-.553a14.8 14.8 0 0 0-.64-.01z" />
      </svg>
    </a>
  )
}
