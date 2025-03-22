// Utility function for generating Amazon affiliate links
export const generateAmazonAffiliateLink = (productId, tag = 'skillsguide-20') => {
  return `https://www.amazon.com/dp/${productId}?tag=${tag}`;
};

// Smart home product data with Amazon product IDs
export const smartHomeProducts = {
  security: [
    {
      id: 'B0BPCQVHNF',
      name: 'Blink Mini 2',
      description: 'Compact indoor plug-in smart security camera with HD video, night vision, and motion detection',
      price: 19.99,
      rating: 4.4,
      reviews: 7745,
      image: '/images/products/blink-mini-2.jpg',
      category: 'security',
      features: [
        '1080p HD video',
        'Motion detection',
        'Two-way audio',
        'Night vision',
        'Works with Alexa'
      ],
      tag: 'Best Seller'
    },
    {
      id: 'B0BVMG1LLB',
      name: 'Ring Indoor Cam (2nd Gen)',
      description: 'Compact plug-in indoor camera with color night vision and two-way talk',
      price: 59.99,
      rating: 4.5,
      reviews: 12345,
      image: '/images/products/ring-indoor-cam.jpg',
      category: 'security',
      features: [
        '1080p HD video',
        'Color night vision',
        'Two-way talk',
        'Motion-activated notifications',
        'Works with Alexa'
      ],
      tag: 'Best Value'
    },
    {
      id: 'B08CKMJKRR',
      name: 'Arlo Pro 4 Spotlight Camera',
      description: 'Wire-free 2K HDR security camera with color night vision and 160° viewing angle',
      price: 199.99,
      rating: 4.7,
      reviews: 8932,
      image: '/images/products/arlo-pro-4.jpg',
      category: 'security',
      features: [
        '2K HDR video',
        '160° viewing angle',
        'Color night vision',
        'Integrated spotlight',
        'Wire-free installation',
        'Works with Alexa, Google Assistant, and HomeKit'
      ],
      tag: 'Premium'
    }
  ],
  speakers: [
    {
      id: 'B09B8V1LZ3',
      name: 'Echo Dot (5th Gen)',
      description: 'Smart speaker with Alexa and improved sound',
      price: 49.99,
      rating: 4.7,
      reviews: 125432,
      image: '/images/products/echo-dot-5th-gen.jpg',
      category: 'speakers',
      features: [
        'Improved audio',
        'Built-in temperature sensor',
        'Control compatible smart home devices',
        'Stream music from multiple services',
        'Voice control'
      ],
      tag: 'Popular'
    },
    {
      id: 'B0BPCSJVPJ',
      name: 'Echo Show 8 (2nd Gen)',
      description: 'HD smart display with Alexa and 13 MP camera',
      price: 129.99,
      rating: 4.6,
      reviews: 87654,
      image: '/images/products/echo-show-8.jpg',
      category: 'speakers',
      features: [
        '8" HD touchscreen',
        '13 MP camera with auto-framing',
        'Stereo speakers',
        'Video calling',
        'Smart home hub',
        'Works with Alexa'
      ],
      tag: 'Best Display'
    },
    {
      id: 'B08NFPM13T',
      name: 'Sonos One (Gen 2)',
      description: 'Voice controlled smart speaker with Amazon Alexa built-in',
      price: 219.00,
      rating: 4.8,
      reviews: 34567,
      image: '/images/products/sonos-one.jpg',
      category: 'speakers',
      features: [
        'Rich, room-filling sound',
        'Voice control with Alexa or Google Assistant',
        'Stream music from 100+ services',
        'Humidity resistant',
        'Multi-room audio'
      ],
      tag: 'Premium Sound'
    }
  ],
  lighting: [
    {
      id: 'B07FDK65F5',
      name: 'Philips Hue White & Color Starter Kit',
      description: 'Smart LED bulbs with hub that work with Alexa and Google Assistant',
      price: 179.99,
      rating: 4.8,
      reviews: 32145,
      image: '/images/products/philips-hue-starter.jpg',
      category: 'lighting',
      features: [
        '16 million colors and shades of white',
        'Control via app or voice',
        'Create timers and routines',
        'Works with Alexa, Google Assistant, and HomeKit',
        'Includes hub and 3 bulbs'
      ],
      tag: 'Best Overall'
    },
    {
      id: 'B08CKMJKRR',
      name: 'Govee Smart LED Strip Lights',
      description: '16.4ft RGB LED light strips with app and voice control',
      price: 29.99,
      rating: 4.5,
      reviews: 65432,
      image: '/images/products/govee-led-strip.jpg',
      category: 'lighting',
      features: [
        'Music sync',
        '64+ scene modes',
        'DIY customization',
        'Schedule & timer',
        'Works with Alexa and Google Assistant'
      ],
      tag: 'Best Value'
    },
    {
      id: 'B08CKMJKRR',
      name: 'Nanoleaf Shapes Hexagons Starter Kit',
      description: 'Smart modular light panels with 16 million colors',
      price: 199.99,
      rating: 4.6,
      reviews: 12345,
      image: '/images/products/nanoleaf-hexagons.jpg',
      category: 'lighting',
      features: [
        'Modular design',
        'Touch-enabled',
        'Rhythm music visualizer',
        'Screen mirror',
        'Works with Alexa, Google Assistant, and HomeKit'
      ],
      tag: 'Premium Design'
    }
  ],
  plugs: [
    {
      id: 'B091FXY8Q7',
      name: 'Kasa Smart Plug Mini',
      description: 'Compact Wi-Fi smart plug that works with Alexa and Google Home',
      price: 24.99,
      rating: 4.7,
      reviews: 87654,
      image: '/images/products/kasa-smart-plug.jpg',
      category: 'plugs',
      features: [
        'Compact design',
        'No hub required',
        'Schedule & timer',
        'Away mode',
        'Works with Alexa and Google Assistant'
      ],
      tag: 'Best Seller'
    },
    {
      id: 'B08CKMJKRR',
      name: 'Amazon Smart Plug',
      description: 'Works with Alexa – A Certified for Humans Device',
      price: 24.99,
      rating: 4.6,
      reviews: 456789,
      image: '/images/products/amazon-smart-plug.jpg',
      category: 'plugs',
      features: [
        'Simple setup with Alexa',
        'Schedule routines and turns off devices',
        'Compact design',
        'No hub required',
        'Works with Alexa'
      ],
      tag: 'Amazon Choice'
    },
    {
      id: 'B08CKMJKRR',
      name: 'TP-Link Kasa Smart Power Strip',
      description: 'Surge protector with 6 individually controlled smart outlets and 3 USB ports',
      price: 79.99,
      rating: 4.7,
      reviews: 23456,
      image: '/images/products/kasa-power-strip.jpg',
      category: 'plugs',
      features: [
        '6 independently controlled outlets',
        '3 USB ports',
        'Surge protection',
        'Energy monitoring',
        'Works with Alexa and Google Assistant'
      ],
      tag: 'Most Versatile'
    }
  ],
  thermostats: [
    {
      id: 'B08CKMJKRR',
      name: 'Google Nest Learning Thermostat',
      description: 'Smart thermostat that learns your preferences and programs itself',
      price: 249.00,
      rating: 4.7,
      reviews: 34567,
      image: '/images/products/nest-thermostat.jpg',
      category: 'thermostats',
      features: [
        'Auto-schedule',
        'Home/Away Assist',
        'Energy history',
        'Remote control',
        'Works with Alexa and Google Assistant'
      ],
      tag: 'Best Overall'
    },
    {
      id: 'B08CKMJKRR',
      name: 'ecobee SmartThermostat with Voice Control',
      description: 'Smart thermostat with built-in Alexa and SmartSensor',
      price: 219.99,
      rating: 4.6,
      reviews: 23456,
      image: '/images/products/ecobee-thermostat.jpg',
      category: 'thermostats',
      features: [
        'Built-in Alexa',
        'SmartSensor included',
        'Spotify and Bluetooth speaker',
        'Energy savings',
        'Works with Alexa, Google Assistant, and HomeKit'
      ],
      tag: 'Most Features'
    },
    {
      id: 'B08CKMJKRR',
      name: 'Amazon Smart Thermostat',
      description: 'ENERGY STAR certified smart thermostat that works with Alexa',
      price: 79.99,
      rating: 4.5,
      reviews: 12345,
      image: '/images/products/amazon-thermostat.jpg',
      category: 'thermostats',
      features: [
        'ENERGY STAR certified',
        'Compatible with most HVAC systems',
        'Auto-schedule with Alexa Hunches',
        'Remote control',
        'Works with Alexa'
      ],
      tag: 'Best Value'
    }
  ],
  locks: [
    {
      id: 'B08CKMJKRR',
      name: 'August Wi-Fi Smart Lock (4th Generation)',
      description: 'Smart lock that attaches to your existing deadbolt',
      price: 229.99,
      rating: 4.5,
      reviews: 23456,
      image: '/images/products/august-lock.jpg',
      category: 'locks',
      features: [
        'Auto-unlock and lock',
        'Remote access',
        'Guest access',
        'Activity tracking',
        'Works with Alexa, Google Assistant, and HomeKit'
      ],
      tag: 'Best Overall'
    },
    {
      id: 'B08CKMJKRR',
      name: 'Ring Video Doorbell 4',
      description: 'Battery-powered video doorbell with improved motion detection',
      price: 159.99,
      rating: 4.6,
      reviews: 45678,
      image: '/images/products/ring-doorbell.jpg',
      category: 'locks',
      features: [
        '1080p HD video',
        'Two-way talk',
        'Advanced motion detection',
        'Quick replies',
        'Works with Alexa'
      ],
      tag: 'Best Doorbell'
    },
    {
      id: 'B08CKMJKRR',
      name: 'Schlage Encode Smart Wi-Fi Deadbolt',
      description: 'Smart lock with built-in Wi-Fi and touchscreen keypad',
      price: 249.99,
      rating: 4.7,
      reviews: 12345,
      image: '/images/products/schlage-encode.jpg',
      category: 'locks',
      features: [
        'Built-in Wi-Fi',
        'Touchscreen keypad',
        'Up to 100 access codes',
        'Remote access',
        'Works with Alexa and Google Assistant'
      ],
      tag: 'Most Secure'
    }
  ]
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return smartHomeProducts[category] || [];
};

// Helper function to get all products
export const getAllProducts = () => {
  return Object.values(smartHomeProducts).flat();
};

// Helper function to get top products across categories
export const getTopProducts = (limit = 8) => {
  const allProducts = getAllProducts();
  // Sort by rating and then by number of reviews
  const sortedProducts = allProducts.sort((a, b) => {
    if (b.rating === a.rating) {
      return b.reviews - a.reviews;
    }
    return b.rating - a.rating;
  });
  
  return sortedProducts.slice(0, limit);
};

// Helper function to get product by ID
export const getProductById = (productId) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === productId);
};
