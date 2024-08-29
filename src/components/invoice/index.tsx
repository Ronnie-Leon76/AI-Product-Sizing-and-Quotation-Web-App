import { QuoteData } from "@/constants/quote-response";
import Image from "next/image";
import React from "react";

type Props = {
  quoteData: QuoteData;
};

const InvoiceTemplate = ({ quoteData }: Props) => {
  return (
    <div className="p-8 bg-white max-w-4xl mx-auto border border-gray-300 rounded-lg shadow-lg">
      {/* Header */}
      <header className="text-right mb-8 flex flex-row justify-between">
        <Image
          src={"/images/DnsIMage.png"}
          width={400}
          height={400}
          className="mt-2"
          alt="Davis Logo"
        />
        <div className="text-right">
          <h1 className="text-3xl font-bold text-gray-700">Invoice</h1>
          <p className="text-gray-500">Davis and ShirtLiff</p>
          <p className="text-gray-500">41762-00100, Nairobi Kenya</p>
          <p className="text-gray-500">sales@dayliff.com</p>
          <p className="text-gray-500">Phone: +254 712 345 678</p>
        </div>
      </header>

      {/* Tables for Each Option */}
      {Object.entries(quoteData).map(([key, option], index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {option.name}
          </h2>

          {/* Subtotal, VAT, and Grand Total per Option */}

          {/* Components Table */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Product
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Description
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Quantity
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Unit Price
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600">
                  Gross Price
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Battery Components */}
              {option.battery &&
                option.battery.components.map((component, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">
                      {component.product_model}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {component.description}
                    </td>
                    <td className="py-2 px-4 border-b">{component.quantity}</td>
                    <td className="py-2 px-4 border-b">
                      {component.unit_price.toLocaleString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {component.gross_price.toLocaleString()}
                    </td>
                  </tr>
                ))}
              {/* Solar Panel Components */}
              {option.solar_panel &&
                option.solar_panel.components.map((component, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">
                      {component.product_model}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {component.description}
                    </td>
                    <td className="py-2 px-4 border-b">{component.quantity}</td>
                    <td className="py-2 px-4 border-b">
                      {component.unit_price.toLocaleString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {component.gross_price.toLocaleString()}
                    </td>
                  </tr>
                ))}
              {/* Inverter Components */}
              {option.inverter.components.map((component, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">
                    {component.product_model}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {component.description}
                  </td>
                  <td className="py-2 px-4 border-b">{component.quantity}</td>
                  <td className="py-2 px-4 border-b">
                    {component.unit_price.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {component.gross_price.toLocaleString()}
                  </td>
                </tr>
              ))}
              {/* Other Components */}
              {option.other_components.map((component, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">
                    {component.product_model}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {component.description}
                  </td>
                  <td className="py-2 px-4 border-b">{component.quantity}</td>
                  <td className="py-2 px-4 border-b">
                    {component.unit_price.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {component.gross_price.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Subtotal, VAT, and Grand Total per Option */}
          <div className="mb-4 text-gray-600 text-center">
            {/* Top Bold Line */}
            <div className="border-t border-gray-700 mt-4 mb-2"></div>

            {/* Paragraphs */}
            <div className="inline-block">
              <p className="font-bold">
                <strong>Subtotal: </strong>
                {option.subtotal.toLocaleString()}
              </p>
              <p className="font-bold">
                <strong>VAT: </strong>
                {option.vat.toLocaleString()}
              </p>
              <p className="font-bold">
                <strong>Grand Total: </strong>
                {option.grand_total.toLocaleString()}
              </p>
            </div>

            {/* Bottom Underlines */}
            <div className="border-t border-gray-300 mt-4 mb-2"></div>
            <div className="border-t border-gray-300"></div>
          </div>

          {/* Explanation */}
          <div className="mt-4 text-gray-600">
            <p>
              <strong>Explanation: </strong>
              {option.explanation}
            </p>
          </div>
        </div>
      ))}

      {/* Footer */}
      <footer className="mt-8 text-gray-600">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Additional Notes:</h3>
          {Object.values(quoteData).map((option, index) => (
            <p key={index} className="mt-1">
              {option.additional_notes}
            </p>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">VAT & Grand Total</h3>
          <p className="mt-1">
            <strong>Total VAT: </strong>
            {Object.values(quoteData).reduce(
              (sum, option) => sum + option.vat,
              0
            )}
          </p>
          <p className="mt-1">
            <strong>Grand Total: </strong>
            {Object.values(quoteData).reduce(
              (sum, option) => sum + option.grand_total,
              0
            )}
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">Advice</p>
          <p className="text-gray-500">
            Please review the details and feel free to reach out with any
            questions or adjustments needed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InvoiceTemplate;
