"use client";

import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoiceTemplate from "@/components/invoice";
import { useUser } from "@clerk/clerk-react";
import { QuoteData } from "@/constants/quote-response";
import { Button } from "@/components/ui/button";
import ChatInterface from "@/components/chatcomponent/ichat-interface";
import LoadingDialog from "@/components/loader/loadingSpinner";

const InvoicePage: React.FC = () => {
  const [quoteData, setQuoteData] = useState<QuoteData[]>([]);
  const { user } = useUser();
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = sessionStorage.getItem("quoteData");
    if (storedData) {
      setQuoteData([JSON.parse(storedData)]);
      setIsLoading(false);
    }
    if (user) {
      setUserId(user.id);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col lg:flex-row max-h-screen mt-10 mb-10 space-x-0 lg:space-x-4 mr-4">
      {isLoading ? (
        <LoadingDialog open={isLoading} />
      ) : (
        <>
          <div className="w-full lg:w-1/2 bg-white p-4 shadow-lg overflow-y-auto h-screen">
            {quoteData.length > 0 && (
              <InvoiceTemplate quoteData={quoteData[0]} />
            )}
          </div>
          <div className="w-full lg:w-1/2 bg-white p-4 shadow-lg flex flex-col justify-between">
            <PDFDownloadLink
              document={<InvoiceTemplate quoteData={quoteData[0]} />}
              fileName="invoice.pdf"
            >
              {({ loading }) =>
                loading ? "Generating PDF..." : <Button>Download PDF</Button>
              }
            </PDFDownloadLink>
            <div className="flex-grow border-l-4 border-l-slate-200 p-4">
              <ChatInterface userId={userId || ""} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InvoicePage;
