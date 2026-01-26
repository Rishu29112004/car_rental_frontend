import { X } from "lucide-react";
import React from "react";

type DeleteCarModalProps = {
  onClose: () => void; // ye declare karta hai ki onClose ek function hai jo kuch return nahi karta
};
const DeleteCarModal: React.FC<DeleteCarModalProps> = ({ onClose })=>{
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      {/* Modal Box */}
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl animate-in fade-in zoom-in">

        {/* Close Button */}
        <button
        onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Delete Car
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Are you sure you want to delete this car from Manage Cars?
            This action cannot be undone.
          </p>

          {/* Radio buttons (visual only) */}
          <div className="mt-4 flex gap-6">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="delete" className="accent-red-500" />
              Yes
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="delete" className="accent-gray-500" />
              No
            </label>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex gap-3">
            <button
              className="flex-1 rounded-xl border border-gray-300 py-2 text-sm font-medium hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="flex-1 rounded-xl bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600 active:scale-95"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCarModal;
