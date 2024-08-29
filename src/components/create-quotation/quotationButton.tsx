"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { CirclePlus } from "lucide-react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuotationForm from "./quotation-form";

import { v4 as uuidv4 } from "uuid";
import {useRouter } from "next/navigation";


import LoadingDialog from "../loader/loadingSpinner";


export interface ItemData {
  item_name: string;
  item_model_name: string;
  item_quantity: number;
  running_hours: number;
}

const QuotationButton = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<{ id: number; data: ItemData | null }[]>([
    {
      id: 1,
      data: null,
    },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        data: {
          item_name: "",
          item_model_name: "",
          item_quantity: 1,
          running_hours: 1,
        },
      },
    ]);
  };
  const updateItemData = (id: number, data: ItemData) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, data: { ...item.data, ...data } }
          : item
      )
    );
  };
  const resetForm = () => {
    setItems([{ id: 1, data: null }]);
  };
  const handleSubmit = async () => {
    setLoading(true);
    const formattedData = items.map((item) => ({
      item_name: item.data?.item_name,
      item_model_name: item.data?.item_model_name,
      item_quantity: item.data?.item_quantity,
      running_hours: item.data?.running_hours,
    }));

     resetForm();
     setOpen(false);
    const uniqueId = uuidv4();
    const apiEndpoint = process.env.NEXT_PUBLIC_AI_QUOTATION_ENDPOINT;
    if (!apiEndpoint) {
      throw new Error(
        "API endpoint is not defined in the environment variables."
      );
    }
    try {
      const response = await axios.post(apiEndpoint as string, formattedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setLoading(false);
        console.log("Response Data:", response.data);
        const quoteData = response.data;
        sessionStorage.setItem("quoteData", JSON.stringify(quoteData));
        router.push(`/integration/${uniqueId}`,);
      } else {
        console.error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  


  return (
    <div className="w-full">
      <LoadingDialog open={loading} />
      <Dialog open={open} onOpenChange={setOpen} modal>
        <DialogTrigger asChild>
          <Button>
            Request a Quotation <span className="ml-2"></span> <CirclePlus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] sm:min-w-[600px] sm:min-h-[400px]">
          <DialogHeader className="mb-1">
            <DialogTitle>Quotation Information</DialogTitle>
            <DialogDescription>
              Make changes to your quotation request. Click save when
              you&apos;re done.
            </DialogDescription>
            <Accordion type="single" collapsible className="w-full">
              {items.map((item) => (
                <AccordionItem key={item.id} value={`item-${item.id}`}>
                  <AccordionTrigger>{`Item ${item.id}`}</AccordionTrigger>
                  <AccordionContent>
                    <QuotationForm
                      id={item.id}
                      onChange={(data) => updateItemData(item.id, data)}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={addItem}>
              Add Item
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuotationButton;


