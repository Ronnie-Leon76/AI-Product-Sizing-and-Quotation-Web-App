"use client";

import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import InvoiceTemplate from "@/components/invoice";
import { useUser } from "@clerk/clerk-react";
import { QuoteData } from "@/constants/quote-response";
import { Button } from "@/components/ui/button";
import ChatInterface from "@/components/chatcomponent/ichat-interface";
import LoadingDialog from "@/components/loader/loadingSpinner";
//Below Props are Used but Suitable for Testing
// type InvoicePageProps = {
//   quoteData: QuoteData;
// };
const InvoicePage: React.FC = () => {
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const { user } = useUser();
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = sessionStorage.getItem("quoteData");
    if (storedData) {
      setQuoteData(JSON.parse(storedData));
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
    if (user) {
      setUserId(user.id);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
    console.log(" User Id in the Dynamic Page", user?.id);
  }, [user]);

  const saveAndDownloadPDF = async () => {
    if (invoiceRef.current) {
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const marginTop = 5;
      const scale = 1.5;

      const canvas = await html2canvas(invoiceRef.current, { scale });
      const imgData = canvas.toDataURL("image/jpeg", 0.75);
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, marginTop, imgWidth, imgHeight);
      heightLeft -= pdfHeight - marginTop;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + marginTop;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight - marginTop;
      }

      const pdfBlob = pdf.output("blob");

      const formData = new FormData();
      formData.append("file", pdfBlob, "invoice.pdf");

      const response = await fetch("/api/upload-pdf", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const pdfUrl = data.url;
        const saveResponse = await fetch("/api/save-pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quoteData,
            pdfUrl,
            clerkId: user?.id,
          }),
        });
        console.log("Below is the User Id", user);
        if (saveResponse.ok) {
          console.log("Quotation saved successfully");
        } else {
          console.error("Failed to save quotation to the database.");
        }
        const downloadLink = document.createElement("a");
        downloadLink.href = data.url;
        console.log(downloadLink.href);
        downloadLink.download = "invoice.pdf";
        downloadLink.click();
      } else {
        console.error("Failed to upload PDF to Cloudinary.");
      }
    }
  };
const isQuoteDataEmpty = !quoteData || Object.keys(quoteData).length === 0;

  return (
    <div className="flex flex-col lg:flex-row max-h-screen mt-10 mb-10 space-x-0 lg:space-x-4 mr-4">
      {isLoading ? (
        <LoadingDialog open={isLoading} />
      ) : (
        <>
          <div
            ref={invoiceRef}
            className="w-full lg:w-1/2 bg-white p-4 shadow-lg overflow-y-auto h-screen"
          >
            {quoteData && <InvoiceTemplate quoteData={quoteData} />}
          </div>

          <div className="w-full lg:w-1/2 bg-white p-4 shadow-lg flex flex-col justify-between">
            <Button onClick={saveAndDownloadPDF} className="mb-4">
              Download PDF
            </Button>
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
