export type Component = {
  product_model: string;
  item_category_code: string;
  description: string;
  quantity: number;
  unit_price: number;
  gross_price: number;
};

export type Battery = {
  battery_type: string;
  number_of_batteries: number;
  battery_capacity: number;
  battery_voltage: number;
  total_capacity: number;
  components: Component[];
};

export type SolarPanel = {
  number_of_panels: number;
  panel_wattage: number;
  total_wattage: number;
  components: Component[];
};

export type Inverter = {
  inverter_capacity: number;
  number_of_inverters: number;
  components: Component[];
};

export type OtherComponents = Component[];

export type Option = {
  name: string;
  battery?: Battery;
  solar_panel?: SolarPanel;
  inverter: Inverter;
  other_components: OtherComponents;
  subtotal: number;
  vat: number;
  grand_total: number;
  explanation: string;
  additional_notes: string;
};

export type QuoteData = {
  option1: Option;
  option2: Option;
  option3: Option;
};

//Code Below  for Testing Purpose Only
export const quoteData: QuoteData = {
  option1: {
    name: "Solar Power Backup Solution with Lead Acid Batteries",
    battery: {
      battery_type: "Lead Acid",
      number_of_batteries: 8,
      battery_capacity: 200,
      battery_voltage: 12,
      total_capacity: 16000,
      components: [
        {
          product_model: "Dayliff 200Ah Lead Acid Battery",
          item_category_code: "BATT",
          description: "200Ah Lead Acid Battery",
          quantity: 8,
          unit_price: 15000,
          gross_price: 120000,
        },
      ],
    },
    solar_panel: {
      number_of_panels: 8,
      panel_wattage: 250,
      total_wattage: 2000,
      components: [
        {
          product_model: "Dayliff 250W Solar Panel",
          item_category_code: "SOLAR",
          description: "250W Polycrystalline Solar Panel",
          quantity: 8,
          unit_price: 12000,
          gross_price: 96000,
        },
      ],
    },
    inverter: {
      inverter_capacity: 3000,
      number_of_inverters: 1,
      components: [
        {
          product_model: "Dayliff SUN3KTL-L1 Inverter",
          item_category_code: "INVERTER",
          description: "3kW Grid Connect Inverter",
          quantity: 1,
          unit_price: 50000,
          gross_price: 50000,
        },
      ],
    },
    other_components: [
      {
        product_model: "Dayliff Charge Controller",
        item_category_code: "CC",
        description: "30A Solar Charge Controller",
        quantity: 1,
        unit_price: 8000,
        gross_price: 8000,
      },
      {
        product_model: "Dayliff Mounting Structure",
        item_category_code: "MOUNT",
        description: "Mounting Structure for Solar Panels",
        quantity: 1,
        unit_price: 15000,
        gross_price: 15000,
      },
    ],
    subtotal: 336000,
    vat: 53760,
    grand_total: 389760,
    explanation:
      "This solution includes 8 units of 200Ah lead acid batteries, 8 solar panels of 250W each, a 3kW inverter, a charge controller, and a mounting structure. It is designed to provide reliable backup power for daily energy demands.",
    additional_notes:
      "Lead acid batteries have a shorter lifespan compared to lithium-ion batteries but are more cost-effective upfront.",
  },
  option2: {
    name: "Solar Power Backup Solution with Lithium-Ion Batteries",
    battery: {
      battery_type: "Lithium-Ion",
      number_of_batteries: 4,
      battery_capacity: 100,
      battery_voltage: 48,
      total_capacity: 19200,
      components: [
        {
          product_model: "Dayliff Lithium-Ion Battery 100Ah",
          item_category_code: "BATT",
          description: "100Ah Lithium-Ion Battery",
          quantity: 4,
          unit_price: 30000,
          gross_price: 120000,
        },
      ],
    },
    solar_panel: {
      number_of_panels: 8,
      panel_wattage: 250,
      total_wattage: 2000,
      components: [
        {
          product_model: "Dayliff 250W Solar Panel",
          item_category_code: "SOLAR",
          description: "250W Polycrystalline Solar Panel",
          quantity: 8,
          unit_price: 12000,
          gross_price: 96000,
        },
      ],
    },
    inverter: {
      inverter_capacity: 3000,
      number_of_inverters: 1,
      components: [
        {
          product_model: "Dayliff SUN3KTL-L1 Inverter",
          item_category_code: "INVERTER",
          description: "3kW Grid Connect Inverter",
          quantity: 1,
          unit_price: 50000,
          gross_price: 50000,
        },
      ],
    },
    other_components: [
      {
        product_model: "Dayliff Charge Controller",
        item_category_code: "CC",
        description: "30A Solar Charge Controller",
        quantity: 1,
        unit_price: 8000,
        gross_price: 8000,
      },
      {
        product_model: "Dayliff Mounting Structure",
        item_category_code: "MOUNT",
        description: "Mounting Structure for Solar Panels",
        quantity: 1,
        unit_price: 15000,
        gross_price: 15000,
      },
    ],
    subtotal: 336000,
    vat: 53760,
    grand_total: 389760,
    explanation:
      "This solution includes 4 units of 100Ah lithium-ion batteries, 8 solar panels of 250W each, a 3kW inverter, a charge controller, and a mounting structure. It is designed for efficient energy storage and longer lifespan.",
    additional_notes:
      "Lithium-ion batteries offer a longer lifespan and better efficiency but come at a higher initial cost.",
  },
  option3: {
    name: "Inverter Power Backup Solution",
    inverter: {
      inverter_capacity: 5000,
      number_of_inverters: 1,
      components: [
        {
          product_model: "Dayliff SUN5KTL-M1 Inverter",
          item_category_code: "INVERTER",
          description: "5kW Grid Connect Inverter",
          quantity: 1,
          unit_price: 70000,
          gross_price: 70000,
        },
      ],
    },
    battery: {
      battery_type: "Lead Acid",
      number_of_batteries: 6,
      battery_capacity: 200,
      battery_voltage: 12,
      total_capacity: 14400,
      components: [
        {
          product_model: "Dayliff 200Ah Lead Acid Battery",
          item_category_code: "BATT",
          description: "200Ah Lead Acid Battery",
          quantity: 6,
          unit_price: 15000,
          gross_price: 90000,
        },
      ],
    },
    other_components: [
      {
        product_model: "Dayliff Charge Controller",
        item_category_code: "CC",
        description: "30A Solar Charge Controller",
        quantity: 1,
        unit_price: 8000,
        gross_price: 8000,
      },
      {
        product_model: "Dayliff Mounting Structure",
        item_category_code: "MOUNT",
        description: "Mounting Structure for Solar Panels",
        quantity: 1,
        unit_price: 15000,
        gross_price: 15000,
      },
    ],
    subtotal: 193000,
    vat: 30880,
    grand_total: 223880,
    explanation:
      "This inverter-based solution includes a 5kW inverter, 6 units of 200Ah lead acid batteries, a charge controller, and a mounting structure. It is designed for reliable power backup during outages.",
    additional_notes:
      "This solution is ideal for users who want a straightforward inverter-based backup without solar panels.",
  },
};
