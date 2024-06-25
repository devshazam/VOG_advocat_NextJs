import { Inter, Playfair_Display_SC, El_Messiri } from "next/font/google";
 
export const inter = Inter({ subsets: ["latin"] });

export const layfair_display_sc = Playfair_Display_SC({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const el_messiri = El_Messiri({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})