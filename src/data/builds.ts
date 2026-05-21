export type Part = {
  name: string;
  price: number;
  url: string;
};

export type Build = {
  title: string;
  description: string;
  totalPrice: number;
  tier: 'budget' | 'mid' | 'high';
  parts: {
    cpu: Part;
    gpu: Part;
    motherboard: Part;
    ram: Part;
    storage: Part;
    psu: Part;
    case: Part;
    cooler?: Part;
  };
};

export const builds: Build[] = [
  {
    title: "The 1080p Starter",
    description: "Best bang for buck at $500. Handles 1080p gaming at high settings.",
    totalPrice: 500,
    tier: "budget",
    parts: {
      cpu: { name: "AMD Ryzen 5 5600", price: 99, url: "https://pcpartpicker.com" },
      gpu: { name: "RX 6600", price: 189, url: "https://pcpartpicker.com" },
      motherboard: { name: "B550M DS3H", price: 74, url: "https://pcpartpicker.com" },
      ram: { name: "16GB DDR4-3200", price: 35, url: "https://pcpartpicker.com" },
      storage: { name: "1TB NVMe SSD", price: 55, url: "https://pcpartpicker.com" },
      psu: { name: "EVGA 600W 80+ Bronze", price: 55, url: "https://pcpartpicker.com" },
      case: { name: "Fractal Focus G", price: 55, url: "https://pcpartpicker.com" },
    },
  },
];