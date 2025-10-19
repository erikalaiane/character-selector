// DADOS DOS PERSONAGENS // 

export const characters = [
  {
    id: 1,
    name: "Sakura",
    class: "Mage",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
    tags: ["Anime", "Pink", "Mage", "Cute"],
    colors: {
      primary: "#EC4899",
      secondary: "#DB2777"
    },
    stats: {
      power: 85,
      defense: 60,
      speed: 75,
      magic: 95
    },
    description: "A powerful mage with control over cherry blossoms and nature magic."
  },
  {
    id: 2,
    name: "Azure",
    class: "Warrior",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&q=80",
    tags: ["Warrior", "Blue", "Knight", "Hero"],
    colors: {
      primary: "#3B82F6",
      secondary: "#2563EB"
    },
    stats: {
      power: 90,
      defense: 85,
      speed: 70,
      magic: 50
    },
    description: "A brave knight with unmatched sword skills and unwavering courage."
  },
  {
    id: 3,
    name: "Ember",
    class: "Ranger",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=800&q=80",
    tags: ["Ranger", "Fire", "Red", "Archer"],
    colors: {
      primary: "#EF4444",
      secondary: "#DC2626"
    },
    stats: {
      power: 80,
      defense: 65,
      speed: 90,
      magic: 70
    },
    description: "A skilled archer with flaming arrows that never miss their target."
  },
  {
    id: 4,
    name: "Luna",
    class: "Assassin",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    tags: ["Assassin", "Purple", "Moon", "Stealth"],
    colors: {
      primary: "#8B5CF6",
      secondary: "#7C3AED"
    },
    stats: {
      power: 85,
      defense: 55,
      speed: 95,
      magic: 75
    },
    description: "A mysterious assassin who moves like shadows under the moonlight."
  },
  {
    id: 5,
    name: "Titan",
    class: "Tank",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    tags: ["Tank", "Gray", "Shield", "Defender"],
    colors: {
      primary: "#6B7280",
      secondary: "#4B5563"
    },
    stats: {
      power: 75,
      defense: 95,
      speed: 50,
      magic: 45
    },
    description: "An indestructible defender with the strength of mountains."
  },
  {
    id: 6,
    name: "Zephyr",
    class: "Ranger",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    tags: ["Ranger", "Green", "Wind", "Swift"],
    colors: {
      primary: "#10B981",
      secondary: "#059669"
    },
    stats: {
      power: 70,
      defense: 60,
      speed: 95,
      magic: 80
    },
    description: "Swift as the wind, this ranger commands the power of storms."
  },
  {
    id: 7,
    name: "Crimson",
    class: "Warrior",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    tags: ["Warrior", "Red", "Blade", "Fighter"],
    colors: {
      primary: "#DC2626",
      secondary: "#B91C1C"
    },
    stats: {
      power: 92,
      defense: 80,
      speed: 75,
      magic: 55
    },
    description: "A fierce warrior whose blade glows red with battle fury."
  },
  {
    id: 8,
    name: "Frost",
    class: "Mage",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    tags: ["Mage", "Cyan", "Ice", "Frost"],
    colors: {
      primary: "#06B6D4",
      secondary: "#0891B2"
    },
    stats: {
      power: 80,
      defense: 65,
      speed: 70,
      magic: 98
    },
    description: "Master of ice magic, capable of freezing entire battlefields."
  },
  {
    id: 9,
    name: "Solara",
    class: "Support",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    tags: ["Support", "Yellow", "Light", "Healer"],
    colors: {
      primary: "#F59E0B",
      secondary: "#D97706"
    },
    stats: {
      power: 60,
      defense: 70,
      speed: 75,
      magic: 90
    },
    description: "A radiant healer who channels the power of the sun to restore allies."
  },
  {
    id: 10,
    name: "Shadow",
    class: "Assassin",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    tags: ["Assassin", "Black", "Dark", "Stealth"],
    colors: {
      primary: "#1F2937",
      secondary: "#111827"
    },
    stats: {
      power: 88,
      defense: 50,
      speed: 98,
      magic: 65
    },
    description: "A ghost in the darkness, striking fear before the blade even falls."
  },
  {
    id: 11,
    name: "Coral",
    class: "Support",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    tags: ["Support", "Orange", "Water", "Healer"],
    colors: {
      primary: "#F97316",
      secondary: "#EA580C"
    },
    stats: {
      power: 55,
      defense: 75,
      speed: 70,
      magic: 85
    },
    description: "Guardian of the seas, using ocean magic to protect and heal."
  },
  {
    id: 12,
    name: "Blaze",
    class: "Mage",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80",
    tags: ["Mage", "Orange", "Fire", "Pyro"],
    colors: {
      primary: "#FB923C",
      secondary: "#F97316"
    },
    stats: {
      power: 95,
      defense: 60,
      speed: 72,
      magic: 96
    },
    description: "Wielder of infernal flames that consume everything in their path."
  },
  {
    id: 13,
    name: "Violet",
    class: "Ranger",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    tags: ["Ranger", "Purple", "Mystic", "Archer"],
    colors: {
      primary: "#A855F7",
      secondary: "#9333EA"
    },
    stats: {
      power: 78,
      defense: 68,
      speed: 88,
      magic: 82
    },
    description: "A mystic archer whose arrows are guided by ancient spirits."
  },
  {
    id: 14,
    name: "Jade",
    class: "Tank",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    tags: ["Tank", "Green", "Earth", "Guardian"],
    colors: {
      primary: "#14B8A6",
      secondary: "#0D9488"
    },
    stats: {
      power: 70,
      defense: 92,
      speed: 55,
      magic: 68
    },
    description: "Protected by the earth itself, an immovable guardian of nature."
  },
  {
    id: 15,
    name: "Nova",
    class: "Mage",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    tags: ["Mage", "Pink", "Star", "Cosmic"],
    colors: {
      primary: "#F472B6",
      secondary: "#EC4899"
    },
    stats: {
      power: 88,
      defense: 65,
      speed: 80,
      magic: 99
    },
    description: "A cosmic mage who draws power from distant stars and galaxies."
  }
];

// Função helper para pegar personagem aleatório
export const getRandomCharacter = () => {
  return characters[Math.floor(Math.random() * characters.length)];
};

// Função helper para pegar personagem por ID
export const getCharacterById = (id) => {
  return characters.find(char => char.id === id);
};

// Função helper para filtrar por classe
export const getCharactersByClass = (className) => {
  return characters.filter(char => char.class === className);
};