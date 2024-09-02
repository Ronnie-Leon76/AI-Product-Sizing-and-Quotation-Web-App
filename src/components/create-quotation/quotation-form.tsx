"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { QuotationOptions } from "@/constants/quotation-items";
import { ItemData } from "./quotationButton";

interface QuotationFormProps {
  onChange: (data: ItemData) => void;
  id: number;
}

const QuotationForm: React.FC<QuotationFormProps> = ({ onChange }) => {
  const [category, setCategory] = useState<string | null>(null);
  const [item, setItem] = useState<string | null>(null);
  const [brandInfo, setBrandInfo] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  // const [location, setLocation] = useState<string>("");
  const [runningHours, setRunningHours] = useState<number>(1);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setItem(null);
    setBrandInfo("");
  };

  const handleItemChange = (value: string) => {
    setItem(value);
    setBrandInfo("");
  };

  const selectedCategoryItems = category
    ? QuotationOptions[category].items
    : {};

  useEffect(() => {
    onChange({
      item_name: item || "",
      item_model_name: brandInfo,
      item_quantity: quantity,
      running_hours: runningHours,
    });
  }, [category, item, brandInfo, quantity, runningHours]);

  return (
    <div className="grid grid-cols-1 gap-5">
      {/* Select Category and Item */}
      <div className="flex space-x-4">
        <Select onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full h-12">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {Object.keys(QuotationOptions).map((categoryKey) => (
                <SelectItem key={categoryKey} value={categoryKey}>
                  {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={handleItemChange} disabled={!category}>
          <SelectTrigger className="w-full h-12">
            <SelectValue placeholder="Select Item" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Item</SelectLabel>
              {category &&
                Object.keys(selectedCategoryItems).map((itemKey) => (
                  <SelectItem key={itemKey} value={itemKey}>
                    {itemKey.charAt(0).toUpperCase() + itemKey.slice(1)}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Run Hours and Quantity */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="text-sm text-gray-700 block mb-1">Run Hours</label>
          <Input
            type="number"
            min="1"
            value={runningHours}
            onChange={(e) => setRunningHours(parseInt(e.target.value, 10))}
            placeholder="Enter Running Hours"
            className="w-full h-12"
          />
        </div>

        <div className="flex-1">
          <label className="text-sm text-gray-700 block mb-1">Quantity</label>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            placeholder="Enter Quantity"
            className="w-full h-12"
          />
        </div>
      </div>

      {/* Brand Info */}
      <div className="mt-4 ">
        <p className="text-blue-600 italic text-sm mt-1">
          Please input information related to the category selected only and not
          a different item.
        </p>
        <div className="flex space-x-4">
          <Input
            type="text"
            value={brandInfo}
            onChange={(e) => setBrandInfo(e.target.value)}
            placeholder="Brand name, size, additional info"
            className="w-full h-12 mx-2"
            disabled={!item}
          />
          {/* <Input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="location eg: Nairobi,Kenya"
            className="w-full h-12 mx-2"
            disabled={!item}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default QuotationForm;