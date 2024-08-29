type QuotationOptionsProps = {
  [key: string]: {
    items: {
      [key: string]: string[];
    };
  };
};

export const QuotationOptions: QuotationOptionsProps = {
  home: {
    items: {
      tv: [
        "Samsung 50 Inch QLED Smart TV",
        "Sony Bravia 55 Inch 4K UHD",
        "Apple TV 4K",
        "TCL 65 Inch 6-Series Roku TV",
      ],
      microwave: [
        "Panasonic NN-SN966S 2.2 cu.ft.",
        "Whirlpool WMH31017HZ Over-the-Range",
        "LG NeoChef 1.5 cu.ft.",
        "Samsung MG14H3020CM 1.4 cu.ft.",
      ],
      fridge: [
        "Whirlpool WRX735SDHZ 25 cu.ft. French Door",
        "GE GSS25GSHSS 25.3 cu.ft. Side-by-Side",
        "Samsung RF28R7351SG 28 cu.ft. French Door",
        "LG LFXS26973S 26 cu.ft. Smart Wi-Fi Enabled",
      ],
      computer: [
        "Dell XPS 13 9310",
        "HP Spectre x360 14",
        "Apple MacBook Pro M1",
        "Lenovo ThinkPad X1 Carbon Gen 9",
      ],
    },
  },
  office: {
    items: {
      printer: [
        "Canon PIXMA TR8520 All-In-One",
        "Epson EcoTank ET-4760",
        "HP OfficeJet Pro 9025e",
        "Brother HL-L2395DW Laser",
      ],
      others: [
        "Netgear Nighthawk AX12 Router",
        "APC Back-UPS Pro 1500VA",
        "Fellowes Powershred 99Ci",
        "Polycom VVX 450 Business IP Phone",
      ],
      appliances: [
        "Keurig K-Elite Coffee Maker",
        "Avalon Bottom Loading Water Dispenser",
        "Panasonic NN-SN966S Microwave",
        "Levoit Air Purifier Core 300",
      ],
      computer: [
        "Dell OptiPlex 7080 Micro",
        "HP Elite Dragonfly G2",
        "Apple iMac 24-inch M1",
        "Lenovo Yoga 9i",
      ],
    },
  },
};
