export type Part = {
  name: string;
  price: number;
};

export type Build = {
  title: string;
  description: string;
  totalPrice: number;
  tier: 'budget' | 'mid' | 'high' | 'personal';
  variant: 'standard' | 'microcenter' | 'nvidia';
  url: string;
  recommended?: boolean;
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
  // STARTER BUILDS
  {
    title: "The 1080p Starter",
    description: "Using Microcenter bundle. Best bang for buck at around $700. Handles 1080p gaming at high settings.",
    totalPrice: 700,
    tier: "budget",
    variant: "microcenter",
    url: "https://pcpartpicker.com/list/w2kfvR",
    parts: {
      cpu: { name: "AMD Ryzen 5 5500", price: 27 },
      cooler: { name: "Wraith Stealth (Included w/ CPU)", price: 0 },
      motherboard: { name: "Gigabyte B550M DS3H AC R2", price: 59 },
      ram: { name: "Corsair Vengeance LPX 16GB DDR4-3200", price: 114  },
      storage: { name: "Silicon Power P34A60 512GB NVMe M.2 SSD", price: 90 },
      gpu: { name: "Intel ARC B580 12GB", price: 304 },
      case: { name: "Phanteks XT M3 M25", price: 52 },
      psu: { name: "Corsair CX750M 750W 80+ Bronze", price: 60 },
    },
  },
  {
    title: "The Online Only Starter",
    description: "Taking advantage of online newegg bundle deal. Not as good as the in person microcenter bundles but still decent.",
    totalPrice: 760,
    tier: "budget",
    variant: "standard",
    url: "https://pcpartpicker.com/list/93RVw3",
    parts: {
      cpu: { name: "AMD Ryzen 5 5500", price: 71 },
      cooler: { name: "Wraith Stealth (Included w/ CPU)", price: 0 },
      motherboard: { name: "MSI PRO B550M-VC WiFi", price: 66 },
      ram: { name: "Teamgroup T-Force Delta RGB 16GB DDR4-3200", price: 118  },
      storage: { name: "Silicon Power P34A60 512GB NVMe M.2 SSD", price: 90 },
      gpu: { name: "Intel ARC B580 12GB", price: 304 },
      case: { name: "Phanteks XT M3 M25", price: 52 },
      psu: { name: "Corsair CX750M 750W 80+ Bronze", price: 60 },
    },
  },
  {
    title: "The Nvidia Starter",
    description: "Using online prices. Worse value than Intel, but worth it if you need CUDA, DLSS, or a specific use case",
    totalPrice: 800,
    tier: "budget",
    variant: "nvidia",
    url: "https://pcpartpicker.com/list/vsKqmL",
    parts: {
      cpu: { name: "AMD Ryzen 5 5500", price: 71 },
      cooler: { name: "Wraith Stealth (Included w/ CPU)", price: 0 },
      motherboard: { name: "MSI PRO B550M-VC WiFi", price: 66 },
      ram: { name: "Teamgroup T-Force Delta RGB 16GB DDR4-3200", price: 118  },
      storage: { name: "Silicon Power P34A60 512GB NVMe M.2 SSD", price: 90 },
      gpu: { name: "GeForce RTX 5060 8GB", price: 340 },
      case: { name: "Phanteks XT M3 M25", price: 52 },
      psu: { name: "Corsair CX750M 750W 80+ Bronze", price: 60 },
    },
  },

  // MIDRANGE BUILDS
  {
    title: "The Value King",
    description: "Taking advantage of incredible value microcenter bundle deals.",
    totalPrice: 1280,
    variant: "microcenter",
    tier: "mid",
    recommended: true,
    url: "https://pcpartpicker.com/list/c6ZZw3",
    parts: {
      cpu: { name: "AMD Ryzen 7 7600X3D", price: 34 },
      cooler: { name: "Thermalright Phantom Spirit", price: 36 },
      motherboard: { name: "Asus TUF Gaming B650-E WiFi", price: 110 },
      ram: { name: "G.Skill Flare X5 16GB DDR5-6000", price: 206 },
      storage: { name: "Silicon Power UD90 1TB NVMe M.2 SSD", price: 153 },
      gpu: { name: "AMD Radeon RX 9070 16GB", price: 595 },
      case: { name: "Lian Li Lancool 207", price: 73 },
      psu: { name: "MSI MAG A750BN 750W 80+ Gold", price: 70 },
    },
  },
  {
    title: "The Online Only Build",
    description: "A sweet spot with good performance now and an upgrade path for the future.",
    totalPrice: 1400,
    variant: "standard",
    tier: "mid",
    url: "https://pcpartpicker.com/list/wZZcbp",
    parts: {
      cpu: { name: "AMD Ryzen 7 7600X", price: 167 },
      cooler: { name: "Thermalright Phantom Spirit", price: 36 },
      motherboard: { name: "Asus TUF Gaming B650-PLUS WiFi", price: 110 },
      ram: { name: "Patriot Viper Elite 16GB DDR5-6000", price: 200 },
      storage: { name: "Silicon Power UD90 1TB NVMe M.2 SSD", price: 153 },
      gpu: { name: "AMD Radeon RX 9070 16GB", price: 595 },
      case: { name: "Lian Li Lancool 207", price: 73 },
      psu: { name: "MSI MAG A750BN 750W 80+ Gold", price: 70 },
    },
  },
  {
    title: "Nvidia or Bust",
    description: "Using online prices. Worse value than AMD, but worth it if you need CUDA, DLSS, or a specific use case.",
    totalPrice: 1430,
    variant: "nvidia",
    tier: "mid",
    url: "https://pcpartpicker.com/list/fwzPXf",
    parts: {
      cpu: { name: "AMD Ryzen 7 7600X", price: 167 },
      cooler: { name: "Thermalright Phantom Spirit", price: 36 },
      motherboard: { name: "Asus TUF Gaming B650-PLUS WiFi", price: 110 },
      ram: { name: "Patriot Viper Elite 16GB DDR5-6000", price: 200 },
      storage: { name: "Silicon Power UD90 1TB NVMe M.2 SSD", price: 153 },
      gpu: { name: "GeForce RTX 5070 12GB", price: 625 },
      case: { name: "Lian Li Lancool 207", price: 73 },
      psu: { name: "MSI MAG A750BN 750W 80+ Gold", price: 70 },
    },
  },

  // HIGH END BUILDS
  {
    title: "The 1440p Beast",
    description: "Great value at this price and will run anything you throw at it.",
    totalPrice: 1840,
    variant: "microcenter",
    tier: "high",
    url: "https://pcpartpicker.com/list/yrQDqd",
    parts: {
      cpu: { name: "AMD Ryzen 7 9850X3D", price: 234 },
      cooler: { name: "Thermalright Phantom Spirit", price: 36 },
      motherboard: { name: "Asus TUF Gaming B850-E WiFi", price: 153 },
      ram: { name: "G.Skill Flare X5 32GB DDR5-6000", price: 312 },
      storage: { name: "Silicon Power UD90 2TB NVMe M.2 SSD", price: 244 },
      gpu: { name: "AMD Radeon RX 9070 XT 16GB", price: 700 },
      case: { name: "Lian Li Lancool 207", price: 73 },
      psu: { name: "MSI MPG A850GS 850W 80+ Gold", price: 90 },
    },
  },
  {
    title: "The Online Only Comparison",
    description: "Same specs but way more expensive than the microcenter version.",
    totalPrice: 2030,
    variant: "standard",
    tier: "high",
    url: "https://pcpartpicker.com/list/dqBqmL",
    parts: {
      cpu: { name: "AMD Ryzen 7 9800X3D", price: 420 },
      cooler: { name: "Thermalright Phantom Spirit", price: 36 },
      motherboard: { name: "Asus TUF Gaming B650-Plus WiFi", price: 110 },
      ram: { name: "Silicon Power 32GB DDR5-6000", price: 360 },
      storage: { name: "Silicon Power UD90 2TB NVMe M.2 SSD", price: 244 },
      gpu: { name: "AMD Radeon RX 9070 XT 16GB", price: 700 },
      case: { name: "Lian Li Lancool 207", price: 73 },
      psu: { name: "MSI MPG A850GS 850W 80+ Gold", price: 90 },
    },
  },
  {
    title: "Need Nvidia",
    description: "Using microcenter bundle. Far worse value than AMD, but worth it if you need CUDA, DLSS, or a specific use case.",
    totalPrice: 2040,
    variant: "nvidia",
    tier: "high",
    url: "https://pcpartpicker.com/list/HvZcbp",
    parts: {
      cpu: { name: "AMD Ryzen 7 9850X3D", price: 234 },
      cooler: { name: "Thermalright Phantom Spirit", price: 36 },
      motherboard: { name: "Asus TUF Gaming B850-E WiFi", price: 153 },
      ram: { name: "G.Skill Flare X5 32GB DDR5-6000", price: 312 },
      storage: { name: "Silicon Power UD90 2TB NVMe M.2 SSD", price: 244 },
      gpu: { name: "GeForce RTX 5070 Ti 16GB", price: 900 },
      case: { name: "Lian Li Lancool 207", price: 73 },
      psu: { name: "MSI MPG A850GS 850W 80+ Gold", price: 90 },
    },
  },
  {
    title: "My Personal Build",
    description: "What I'm currently running. Listed prices are purchase price not current price.",
    totalPrice: 1550,
    tier: "personal",
    variant: "standard",
    url: "https://pcpartpicker.com/list/Y4pwC8",
    parts: {
      cpu: { name: "AMD Ryzen 5 7600X", price: 242 },
      cooler: { name: "Razer Hanbo Chroma 240mm AIO", price: 60 },
      motherboard: { name: "MSI MPG B650I Edge WiFi", price: 132 },
      ram: { name: "G.Skill Flare X5 32GB DDR5-5600", price: 105  },
      storage: { name: "Samsung 990 Pro 2TB NVMe M.2 SSD", price: 144 },
      gpu: { name: "AMD Radeon RX 9070 XT 16GB", price: 600 },
      case: { name: "Lian Li A4-H20", price: 138 },
      psu: { name: "EVGA SuperNova 850 GM 850 W 80+ Gold SFX", price: 134 },
    },
  },
];

