import React from 'react';
import { Cross } from '@/app/assets/icons/Cross';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ open, onClose, header, body, footer }: ModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg py-5 px-8 max-w-[980px] w-full relative max-h-[90vh] flex flex-col"
        style={{ height: 'min(90vh, 700px)' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-0 -right-12 text-gray-400 hover:text-gray-700 text-2xl cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          <Cross />
        </button>
        {header && (
          <div className="flex-none sticky top-0 bg-white z-10 pb-2">
            {header}
          </div>
        )}
        <div className="flex-1 overflow-y-auto pt-7.5">
          {body}
        </div>
        {footer && (
          <div className="flex-none sticky bottom-0 bg-white z-10">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
} 