"use client";

import React, { createContext, useContext, useState } from "react";

interface DonationContextType {
  isOpen: boolean;
  openDonationModal: (focusArea?: string) => void;
  closeDonationModal: () => void;
  preselectedFocusArea: string;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export function DonationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedFocusArea, setPreselectedFocusArea] = useState("General Support");

  const openDonationModal = (focusArea?: string) => {
    if (focusArea) {
      setPreselectedFocusArea(focusArea);
    }
    setIsOpen(true);
  };

  const closeDonationModal = () => {
    setIsOpen(false);
  };

  return (
    <DonationContext.Provider
      value={{ isOpen, openDonationModal, closeDonationModal, preselectedFocusArea }}
    >
      {children}
    </DonationContext.Provider>
  );
}

export function useDonation() {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error("useDonation must be used within a DonationProvider");
  }
  return context;
}
