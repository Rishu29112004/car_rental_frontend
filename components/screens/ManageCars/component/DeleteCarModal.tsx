
"use client";

import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { useModal } from '@/context/modal-context';

type DeleteCarModalProps = {
  carName: string;
  onConfirmDelete?: () => void;
};

const DeleteCarModal: React.FC<DeleteCarModalProps> = ({ carName, onConfirmDelete }) => {
  const [inputValue, setInputValue] = useState('');
  const { closeModal } = useModal();

  const isDeleteEnabled = inputValue === carName;

  const handleDelete = () => {
    if (isDeleteEnabled) {
      onConfirmDelete?.();
      closeModal();
    }
  };

  return (
    <div className='flex flex-col gap-6'>
      {/* Warning Header */}
      <div className='flex items-start gap-3'>
        <div className='p-2 bg-red-100 rounded-full'>
          <AlertTriangle className='w-5 h-5 text-red-600' />
        </div>
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-gray-900'>Delete Car</h3>
          <p className='text-sm text-gray-600 mt-1'>
            This action cannot be undone. This will permanently delete the car data.
          </p>
        </div>
      </div>

      {/* Warning Box */}
      <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
        <p className='text-sm text-red-800'>
          <span className='font-semibold'>Warning:</span> You are about to delete{' '}
          <span className='font-mono bg-red-100 px-1.5 py-0.5 rounded'>{carName}</span>.
        </p>
      </div>

      {/* Confirmation Input */}
      <div className='flex flex-col gap-4'>
        <label htmlFor='confirm-input' className='text-sm font-medium text-gray-700'>
          To confirm, type{' '}
          <span className='font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-900'>
            {carName}
          </span>{' '}
          in the box below
        </label>
        <input
          id='confirm-input'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={carName}
          className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition'
        />
      </div>

      {/* Action Buttons */}
      <div className='flex gap-3 justify-end'>
        <button
          onClick={closeModal}
          className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition'
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          disabled={!isDeleteEnabled}
          className={
            `px-4 py-2 text-sm font-semibold text-white rounded-lg transition ${
              isDeleteEnabled
                ? 'bg-red-600 hover:bg-red-700 active:scale-95'
                : 'bg-red-300 cursor-not-allowed'
            }`
          }
        >
          Delete this car
        </button>
      </div>
    </div>
  );
};

export default DeleteCarModal;

