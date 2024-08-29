import { quoteData } from "./quote-response";

interface Component {
  product_model?: string;
  description?: string;
  quantity?: number;
  unit_price?: number;
  gross_price?: number;
}

interface Data {
  [key: string]: {
    battery?: {
      components: Component[];
    };
    solar_panel?: {
      components: Component[];
    };
    inverter?: {
      components: Component[];
    };
    other_components?: Component[];
  };
}

async function normalizeData(data: any) {
  const result = [];

  for (const optionKey in data) {
    if (data.hasOwnProperty(optionKey)) {
      const option = data[optionKey];

      const batteryComponents = option.battery?.components || [];
      const solarPanelComponents = option.solar_panel?.components || [];
      const inverterComponents = option.inverter?.components || [];
      const otherComponents = option.other_components || [];

      const extractComponents = (components:Component[], itemCategoryCode: string) => {
        return components.map((component) => ({
          product_model: component.product_model || "",
          item_category_code: itemCategoryCode || "",
          description: component.description || "",
          quantity: component.quantity || 0,
          unit_price: component.unit_price || 0,
          gross_price: component.gross_price || 0,
        }));
      };

      const allComponents = [
        ...extractComponents(batteryComponents, "BATT"),
        ...extractComponents(solarPanelComponents, "SOLAR"),
        ...extractComponents(inverterComponents, "INVERTER"),
        ...extractComponents(otherComponents,"CC"),
      ];

      result.push({
        name: option.name || "",
        components: allComponents,
        subtotal: option.subtotal || 0,
        vat: option.vat || 0,
        grand_total: option.grand_total || 0,
        explanation: option.explanation || "",
        additional_notes: option.additional_notes || "",
      });
    }
  }

  return result;
}

export default normalizeData



