import { QuoteData } from "@/constants/quote-response";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";

type Props = {
  quoteData: QuoteData;
};
const InvoiceTemplate = ({ quoteData }: Props) => (
  <Document>
    <Page
      style={{
        padding: 32,
        fontFamily: "Helvetica",
        fontSize: 14,
        color: "#333",
      }}
    >
      {/* Header */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 32,
        }}
      >
        <Image
          src="../../images/DnsIMage.png"
          style={{ width: 250, height: 150 }}
        />
        <View
          style={{
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2D3748" }}>
            Invoice
          </Text>
          <Text style={{ color: "#4A5568" }}>Davis and ShirtLiff</Text>
          <Text style={{ color: "#4A5568" }}>41762-00100, Nairobi Kenya</Text>
          <Text style={{ color: "#4A5568" }}>sales@dayliff.com</Text>
          <Text style={{ color: "#4A5568" }}>Phone: +254 712 345 678</Text>
        </View>
      </View>

      {Object.entries(quoteData).map(([key, option], index) => (
        <View key={index} style={{ marginBottom: 48 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#2D3748",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            {option.name}
          </Text>

          {/* Components Table */}
          <View style={{ marginBottom: 16 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#F7FAFC",
                fontWeight: "bold",
                borderBottomWidth: 1,
                borderBottomColor: "#E2E8F0",
              }}
            >
              <Text
                style={{
                  padding: 8,
                  flex: 1,
                  color: "#4A5568",
                  borderRightWidth: 1,
                  borderRightColor: "#E2E8F0",
                  textAlign: "left",
                }}
              >
                Product
              </Text>
              <Text
                style={{
                  padding: 8,
                  flex: 1,
                  color: "#4A5568",
                  borderRightWidth: 1,
                  borderRightColor: "#E2E8F0",
                  textAlign: "left",
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  padding: 8,
                  flex: 1,
                  color: "#4A5568",
                  borderRightWidth: 1,
                  borderRightColor: "#E2E8F0",
                  textAlign: "left",
                }}
              >
                Quantity
              </Text>
              <Text
                style={{
                  padding: 8,
                  flex: 1,
                  color: "#4A5568",
                  borderRightWidth: 1,
                  borderRightColor: "#E2E8F0",
                  textAlign: "left",
                }}
              >
                Unit Price
              </Text>
              <Text
                style={{
                  padding: 8,
                  flex: 1,
                  color: "#4A5568",
                  textAlign: "left",
                }}
              >
                Gross Price
              </Text>
            </View>

            {option.battery &&
              option.battery.components.map((component, i) => (
                <View
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: i % 2 === 0 ? "transparent" : "#F7FAFC",
                    borderBottomWidth: 1,
                    borderBottomColor: "#E2E8F0",
                  }}
                >
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.product_model}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.description}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.quantity}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.unit_price.toLocaleString()}
                  </Text>
                  <Text style={{ padding: 8, flex: 1 }}>
                    {component.gross_price.toLocaleString()}
                  </Text>
                </View>
              ))}
            {option.solar_panel &&
              option.solar_panel.components.map((component, i) => (
                <View
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: i % 2 === 0 ? "transparent" : "#F7FAFC",
                    borderBottomWidth: 1,
                    borderBottomColor: "#E2E8F0",
                  }}
                >
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.product_model}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.description}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.quantity}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.unit_price.toLocaleString()}
                  </Text>
                  <Text style={{ padding: 8, flex: 1 }}>
                    {component.gross_price.toLocaleString()}
                  </Text>
                </View>
              ))}
            {option.inverter &&
              option.inverter.components.map((component, i) => (
                <View
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: i % 2 === 0 ? "transparent" : "#F7FAFC",
                    borderBottomWidth: 1,
                    borderBottomColor: "#E2E8F0",
                  }}
                >
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.product_model}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.description}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.quantity}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.unit_price.toLocaleString()}
                  </Text>
                  <Text style={{ padding: 8, flex: 1 }}>
                    {component.gross_price.toLocaleString()}
                  </Text>
                </View>
              ))}
            {option.other_components &&
              option.other_components.map((component, i) => (
                <View
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: i % 2 === 0 ? "transparent" : "#F7FAFC",
                    borderBottomWidth: 1,
                    borderBottomColor: "#E2E8F0",
                  }}
                >
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.product_model}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.description}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.quantity}
                  </Text>
                  <Text
                    style={{
                      padding: 8,
                      flex: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#E2E8F0",
                    }}
                  >
                    {component.unit_price.toLocaleString()}
                  </Text>
                  <Text style={{ padding: 8, flex: 1 }}>
                    {component.gross_price.toLocaleString()}
                  </Text>
                </View>
              ))}
          </View>

          {/* Subtotal, VAT, and Grand Total */}
          <View
            style={{
              textAlign: "center",
              color: "#4A5568",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: 16,
              borderTopWidth: 2,
              fontSize: "18",
              borderTopColor: "#4A5568",
              paddingTop: 8,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 4,
                alignItems: "center",
              }}
            >
              Subtotal: {option.subtotal.toLocaleString()}
            </Text>
            <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
              VAT: {option.vat.toLocaleString()}
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              Grand Total: {option.grand_total.toLocaleString()}
            </Text>
          </View>

          {/* Explanation */}
          <View
            style={{
              marginTop: 16,
              color: "#4A5568",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontWeight: "bold", lineHeight: 1.6 }}>
              Explanation:
            </Text>
            <Text style={{ lineHeight: 1.6 }}>{option.explanation}</Text>
          </View>
        </View>
      ))}

      {/* Footer */}
      <View
        style={{
          marginTop: 32,
          color: "#4A5568",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "semibold",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Additional Notes:
        </Text>
        {Object.values(quoteData).map((option, index) => (
          <Text key={index} style={{ marginBottom: 4 }}>
            {option.additional_notes}
          </Text>
        ))}
        <View
          style={{
            marginTop: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: "semibold", marginBottom: 16 }}
          >
            VAT & Grand Total
          </Text>
          <Text style={{ fontSize: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Total VAT: </Text>
            {Object.values(quoteData)
              .reduce((sum, option) => sum + option.vat, 0)
              .toLocaleString()}
          </Text>
          <Text style={{ fontSize: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Grand Total: </Text>
            {Object.values(quoteData)
              .reduce((sum, option) => sum + option.grand_total, 0)
              .toLocaleString()}
          </Text>
        </View>
        <View style={{ marginTop: 32 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "semibold",
              marginBottom: 8,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Advice
          </Text>
          <Text style={{ fontSize: "16" }}>
            Please review the details and feel free to reach out with any
            questions or adjustments needed.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default InvoiceTemplate;
