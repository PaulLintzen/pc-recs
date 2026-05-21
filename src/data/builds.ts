export type Part = {
  name: string;
  price: number;
};

export type Build = {
  title: string;
  description: string;
  totalPrice: number;
  tier: 'budget' | 'mid' | 'high' | 'personal';
  url: string;
  parts: {
    cpu: Part;
    cooler: Part;
    motherboard: Part;
    ram: Part;
    storage: Part;
    gpu: Part;
    psu: Part;
    case: Part;
  };
};

export const builds: Build[] = [
  {
    title: "The 1080p Starter",
    description: "Best bang for buck at $650. Handles 1080p gaming at high settings.",
    totalPrice: 650,
    tier: "budget",
    url: "https://pcpartpicker.com/list/GhJfvR",
    parts: {
      cpu: { name: "AMD Ryzen 5 5500", price: 27 },
      cooler: { name: "Wraith Stealth (Included w/ CPU)", price: 0 },
      motherboard: { name: "Gigabyte B550M DS3H AC R2", price: 59 },
      ram: { name: "Corsair Vengeance LPX 16GB DDR4-3200 CL16", price: 114  },
      storage: { name: "Silicon Power P34A60 512GB NVMe M.2 SSD", price: 90 },
      gpu: { name: "ASRock Challenger Intel ARC B570 10GB", price: 260 },
      case: { name: "Antec NX200M", price: 40 },
      psu: { name: "Corsair CX750M 750W 80+ Bronze", price: 60 },
    },
  },
  {
    title: "The Value King",
    description: "A sweet spot with good performance now and an upgrade path for the future.",
    totalPrice: 1277,
    tier: "mid",
    url: "https://pcpartpicker.com/list/c6ZZw3",
    parts: {
      cpu: { name: "AMD Ryzen 7 7600X3D", price: 34 },
      cooler: { name: "Thermalright Phantom Spirit", price: 36 },
      motherboard: { name: "Asus TUF Gaming B650-E WiFi", price: 110 },
      ram: { name: "G.Skill Flare X5 16GB DDR5-6000 CL36", price: 206 },
      storage: { name: "Silicon Power UD90 1TB NVMe M.2 SSD", price: 153 },
      gpu: { name: "AMD Radeon RX 9070", price: 595 },
      case: { name: "Lian Li Lancool 207", price: 73 },
      psu: { name: "MSI MAG A750BN 750W 80+ Gold", price: 70 },
    },
  },
  {
    title: "The 1440p Beast",
    description: "Great value at this price and will run anything you throw at it.",
    totalPrice: 1843,
    tier: "high",
    url: "https://pcpartpicker.com/list/yrQDqd",
    parts: {
      cpu: { name: "AMD Ryzen 7 9850X3D", price: 234 },
      cooler: { name: "Thermalright Phantom Spirit", price: 36 },
      motherboard: { name: "Asus TUF Gaming B850-E WiFi", price: 153 },
      ram: { name: "G.Skill Flare X5 32GB DDR5-6000 CL36", price: 312 },
      storage: { name: "Silicon Power UD90 2TB NVMe M.2 SSD", price: 244 },
      gpu: { name: "AMD Radeon RX 9070 XT", price: 700 },
      case: { name: "Lian Li Lancool 207", price: 73 },
      psu: { name: "MSI MPG A850GS 850W 80+ Gold", price: 90 },
    },
  },
  {
    title: "My Personal Build",
    description: "What I'm currently running. Listed prices are purchase price not current price.",
    totalPrice: 1555,
    tier: "personal",
    url: "https://pcpartpicker.com/list/Y4pwC8",
    parts: {
      cpu: { name: "AMD Ryzen 5 7600X", price: 242 },
      cooler: { name: "Razer Hanbo Chroma 240mm AIO", price: 60 },
      motherboard: { name: "MSI MPG B650I Edge WiFi", price: 132 },
      ram: { name: "G.Skill Flare X5 32GB DDR5-5600 CL30", price: 105  },
      storage: { name: "Samsung 990 Pro 2TB NVMe M.2 SSD", price: 144 },
      gpu: { name: "AMD Radeon RX 9070 XT", price: 600 },
      case: { name: "Lian Li A4-H20", price: 138 },
      psu: { name: "EVGA SuperNova 850 GM 850 W 80+ Gold SFX", price: 134 },
    },
  },
];

