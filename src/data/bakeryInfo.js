export const BAKERY_INFO = {
  name: "Shanmukha Sai Bakery",
  brandSubtitle: "Bakery & Sweets",
  tagline: "Freshly Baked, Made with Love",
  description: "Serving the finest celebration cakes, authentic traditional sweets, and crispy oven-fresh savory bakes in Bhimavaram. Every delight is crafted with premium ingredients and heartfelt passion.",
  phone: "7386606668",
  phoneFormatted: "+91 73866 06668",
  whatsappNumber: "919676662334",
  whatsappDisplay: "+91 9676662334",
  instagram: "shanmuksai_bakery_sweets",
  instagramUrl: "https://www.instagram.com/shanmuksai_bakery_sweets",
  address: {
    line1: "Abbulu Gari Complex",
    line2: "Chinnamaram, Bhimavaram",
    statePin: "Andhra Pradesh - 534204",
    full: "Abbulu Gari Complex, Chinnamaram, Bhimavaram, AP - 534204"
  },
  logo: "/images/logo.png",
  categories: [
    {
      id: "cakes",
      name: "Cakes",
      tagline: "Custom Celebration & Fresh Cream Pastries",
      image: "/images/category_cakes.jpg",
      description: "Moist sponge layers, rich Belgian chocolate ganache, and seasonal fruits handcrafted for birthdays and special moments.",
      buttonText: "Explore Cakes"
    },
    {
      id: "sweets",
      name: "Sweets",
      tagline: "Pure Ghee Traditional & Rich Mithai",
      image: "/images/category_sweets.jpg",
      description: "Authentic Kaju Katli, saffron Motichoor Laddus, and melt-in-mouth Mysore Pak made with pure desi ghee.",
      buttonText: "Explore Sweets"
    },
    {
      id: "hots",
      name: "Hots",
      tagline: "Crispy Flaky Puffs & Savoury Delights",
      image: "/images/category_hots.jpg",
      description: "Fresh-out-of-the-oven golden layered puffs, spicy egg puffs, and crunchy South Indian savory snacks.",
      buttonText: "Explore Hots"
    }
  ]
};

export const getWhatsAppUrl = (productName = "") => {
  const base = `https://wa.me/${BAKERY_INFO.whatsappNumber}`;
  let message = "";
  if (productName) {
    message = `Can I get more info about this product? Product: ${productName}`;
  } else {
    message = "Can I get more info about this product?";
  }
  return `${base}?text=${encodeURIComponent(message)}`;
};
