import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const LoadingDialog: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Dialog open={open} modal>
      <DialogContent
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
        className=" sm:max-w-[800px] sm:min-w-[600px] sm:min-h-[400px] z-50"
      >
        <div className=" mt-10 flex flex-col  items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <p className="text-blue-700 text-lg">
            Fetching your quotation from the AI...
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;
