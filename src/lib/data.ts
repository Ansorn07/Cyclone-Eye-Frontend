export type Cyclone = {
  id: string;
  name: string;
  category: number;
  wind_speed: number;
  location: string; // Specific city/district
  region: string; // Broader sea/ocean
  path: { lat: number; lng: number }[];
  severity: 'low' | 'moderate' | 'high' | 'extreme';
};

export const activeCyclones: Cyclone[] = [
  {


    id: "cyclone-001",
    name: "Asani",
    category: 3,
    wind_speed: 140,
    location: "Coastal Andhra Pradesh",
    region: "Bay of Bengal",
    path: [
      { lat: 14.5, lng: 85.2 },
      { lat: 15.1, lng: 84.8 },
      { lat: 15.8, lng: 84.5 },
    ],
    severity: 'high',
    imageUrl: "/cyclones/asani.jpg" // ← make sure this image is in public/cyclones/
  },
  {
    id: "cyclone-002",
    name: "Biparjoy",
    category: 1,
    wind_speed: 90,
    location: "Saurashtra & Kutch, Gujarat",
    region: "Arabian Sea",
    path: [
      { lat: 18.2, lng: 70.1 },
      { lat: 19.0, lng: 70.5 },
      { lat: 19.9, lng: 70.8 },
    ],
    severity: 'moderate',
    imageUrl: "/cyclones/biparjoy.jpg" // ← make sure this image is in public/cyclones/
  },
  {
    id: "cyclone-003",
    name: "Mocha",
    category: 4,
    wind_speed: 220,
    location: "Sundarbans, West Bengal",
    region: "North Indian Ocean",
    path: [
      { lat: 12.1, lng: 90.5 },
      { lat: 13.2, lng: 90.2 },
      { lat: 14.3, lng: 89.9 },
    ],
    severity: 'extreme',
    imageUrl: "/cyclones/mocha.jpg" // ← make sure this image is in public/cyclones/
  },
  {
    id: "cyclone-004",
    name: "Sitrang",
    category: 2,
    wind_speed: 110,
    location: "Puri, Odisha",
    region: "Bay of Bengal",
    path: [
      { lat: 10.5, lng: 88.2 },
      { lat: 11.1, lng: 87.8 },
      { lat: 11.8, lng: 87.5 },
    ],
    severity: 'moderate',
    imageUrl: "/cyclones/joy.jpg" // ← make sure this image is in public/cyclones/
  },
];


export const forecastData = {
  "cyclone-001": [
    { day: "Today", wind_speed: 140, pressure: 980 },
    { day: "Day 2", wind_speed: 145, pressure: 975 },
    { day: "Day 3", wind_speed: 150, pressure: 970 },
    { day: "Day 4", wind_speed: 148, pressure: 972 },
    { day: "Day 5", wind_speed: 142, pressure: 978 },
  ],
  "cyclone-002": [
    { day: "Today", wind_speed: 90, pressure: 995 },
    { day: "Day 2", wind_speed: 95, pressure: 992 },
    { day: "Day 3", wind_speed: 100, pressure: 990 },
    { day: "Day 4", wind_speed: 98, pressure: 991 },
    { day: "Day 5", wind_speed: 92, pressure: 994 },
  ],
  "cyclone-003": [
    { day: "Today", wind_speed: 220, pressure: 940 },
    { day: "Day 2", wind_speed: 225, pressure: 935 },
    { day: "Day 3", wind_speed: 230, pressure: 930 },
    { day: "Day 4", wind_speed: 228, pressure: 932 },
    { day: "Day 5", wind_speed: 222, pressure: 938 },
  ],
  "cyclone-004": [
    { day: "Today", wind_speed: 110, pressure: 990 },
    { day: "Day 2", wind_speed: 115, pressure: 988 },
    { day: "Day 3", wind_speed: 120, pressure: 985 },
    { day: "Day 4", wind_speed: 118, pressure: 986 },
    { day: "Day 5", wind_speed: 112, pressure: 989 },
  ],
};

export const forecastTableData = {
    "cyclone-001": [
        { time: '24h', position: '16.5°N, 84.0°E', intensity: 'Category 3' },
        { time: '48h', position: '17.2°N, 83.5°E', intensity: 'Category 4' },
        { time: '72h', position: '18.0°N, 83.0°E', intensity: 'Category 4' },
    ],
    "cyclone-002": [
        { time: '24h', position: '20.5°N, 71.0°E', intensity: 'Category 1' },
        { time: '48h', position: '21.2°N, 71.2°E', intensity: 'Category 1' },
        { time: '72h', position: '22.0°N, 71.5°E', intensity: 'Category 2' },
    ],
    "cyclone-003": [
        { time: '24h', position: '15.5°N, 89.5°E', intensity: 'Category 5' },
        { time: '48h', position: '16.8°N, 89.0°E', intensity: 'Category 5' },
        { time: '72h', position: '18.0°N, 88.5°E', intensity: 'Category 4' },
    ],
    "cyclone-004": [
        { time: '24h', position: '12.5°N, 87.0°E', intensity: 'Category 2' },
        { time: '48h', position: '13.2°N, 86.5°E', intensity: 'Category 3' },
        { time: '72h', position: '14.0°N, 86.0°E', intensity: 'Category 3' },
    ],
}


export const historyData = [
  {
    id: "hist-001",
    name: "Cyclone Amphan",
    year: 2020,
    region: "Bay of Bengal",
    affected_areas: "West Bengal, Odisha, Bangladesh",
    damage_usd: "13 billion",
  },
  {
    id: "hist-002",
    name: "Cyclone Fani",
    year: 2019,
    region: "Bay of Bengal",
    affected_areas: "Odisha, Andhra Pradesh, West Bengal",
    damage_usd: "8.1 billion",
  },
  {
    id: "hist-003",
    name: "Cyclone Ockhi",
    year: 2017,
    region: "Arabian Sea",
    affected_areas: "Kerala, Tamil Nadu, Lakshadweep",
    damage_usd: "920 million",
  },
  {
    id: "hist-004",
    name: "Cyclone Hudhud",
    year: 2014,
    region: "Bay of Bengal",
    affected_areas: "Andhra Pradesh, Odisha, Uttar Pradesh",
    damage_usd: "3.4 billion",
  },
    {
    id: "hist-005",
    name: "Bhola Cyclone",
    year: 1970,
    region: "Bay of Bengal",
    affected_areas: "East Pakistan (now Bangladesh), West Bengal",
    damage_usd: "86.4 million (1970 USD)",
  },
];

export const alertsData = [
    { id: 'alert-1', region: 'Odisha Coast', severity: 'red', title: 'Landfall Alert', description: 'Cyclone "Sitrang" is expected to make landfall near Puri in the next 12 hours. Evacuate coastal areas immediately.', issued: '2 hours ago', ticker_message: 'Landfall expected near Puri in 12 hours. Evacuate now.' },
    { id: 'alert-2', region: 'Gujarat Coast', severity: 'orange', title: 'High Wind Warning', description: 'Cyclone "Biparjoy" is causing high-speed winds. Stay indoors and secure loose objects.', issued: '5 hours ago', ticker_message: 'High winds near Saurashtra coast. Stay indoors.' },
    { id: 'alert-3', region: 'Andaman Islands', severity: 'yellow', title: 'Rough Sea Warning', description: 'A new depression is causing rough sea conditions. Fishermen are advised not to venture into the sea.', issued: '1 day ago', ticker_message: 'Rough seas in Andaman region. Fishermen stay ashore.' },
    { id: 'alert-4', region: 'West Bengal', severity: 'red', title: 'Imminent Cyclone Threat', description: 'Cyclone "Mocha" has intensified rapidly. High alert for all coastal districts in West Bengal.', issued: '30 minutes ago', ticker_message: 'Cyclone Mocha intensifies. High alert in West Bengal.' },
];


export const resourcesData = {
    checklists: [
        {
            id: 'before',
            title: 'Before the Storm',
            items: [
                'Make an emergency kit with essentials like water, dry food, medicines, and a torch.',
                'Secure your home. Cover windows and tie down anything that could fly away.',
                'Listen to news from official sources like IMD and local radio.',
                'Know your nearest safe shelter and the safest route to get there.',
                'Charge your phone and power banks. Keep important documents in a waterproof bag.'
            ]
        },
        {
            id: 'during',
            title: 'During the Storm',
            items: [
                'Stay inside a strong building. Keep away from windows and doors.',
                'Listen to your radio for updates. Trust only official advice.',
                'Switch off electricity and gas connections to avoid accidents.',
                'If your house feels unsafe, evacuate immediately. Your life is most important.',
            ]
        },
        {
            id: 'after',
            title: 'After the Storm',
            items: [
                'Wait for officials to say it\'s safe before you go outside.',
                'Be very careful of fallen power lines, broken glass, and damaged buildings.',
                'Check on your neighbours and offer help if you can. We are stronger together.',
                'Drink only clean or boiled water.',
            ]
        }
    ],
    emergencyContacts: [
        { state: 'National (NDMA)', number: '1078' },
        { state: 'Andhra Pradesh', number: '1077 / 0866-2486006' },
        { state: 'Odisha', number: '1070 / 0674-2534177' },
        { state: 'West Bengal', number: '1070' },
        { state: 'Tamil Nadu', number: '1070' },
        { state: 'Gujarat', number: '1077' },
        { state: 'Kerala', number: '1077' },
    ],
    officialAgencies: [
      { name: 'India Meteorological Department (IMD)', url: 'https://mausam.imd.gov.in/'},
      { name: 'National Disaster Management Authority (NDMA)', url: 'https://ndma.gov.in/'},
      { name: 'National Oceanic and Atmospheric Administration (NOAA)', url: 'https://www.noaa.gov/'},
    ],
    faqs: [
        {
            question: "What is the difference between a cyclone, a hurricane, and a typhoon?",
            answer: "They are all the same weather phenomenon! We just use different names in different places. In the Atlantic and Northeast Pacific, it's a 'hurricane'. In the Northwest Pacific, it's a 'typhoon'. Here in the South Pacific and Indian Ocean, we call it a 'cyclone'."
        },
        {
            question: "How are cyclones named?",
            answer: "Countries in a particular region, including India, contribute to a shared list of names. The names are used one by one. This helps everyone easily identify and track the storms without confusion."
        },
        {
            question: "What do the different color alerts mean?",
            answer: "Alerts help us understand the danger level. Green means all is clear. Yellow means be aware and stay updated. Orange means be prepared for bad weather. Red means take action immediately, as dangerous weather is expected."
        },
        {
            question: "Is it safe to go to the beach to watch a cyclone?",
            answer: "Absolutely not. It is extremely dangerous. The waves can be huge and unpredictable, and winds can carry dangerous objects. Please stay far away from the coast during a cyclone warning."
        }
    ]
}
