"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import useWindowDimensions from "@/hooks/useWindowDimension";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";


import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

interface ModalContextProps {
  openModal: (context: ReactNode, closable?: boolean) => void;
  closeModal: () => void;
  openDrawer: (content: ReactNode, width?: string) => void;
  closeDrawer: (content: ReactNode) => void;
  openSheet: (content: ReactNode) => void;
  closeSheet: () => void;
  setSheetWidth: (width: string) => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState<string | null>(null);
  const [isClosable, setIsClosable] = useState(true);

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerContent, setDrawerContent] = useState<ReactNode>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetContent, setSheetContent] = useState<ReactNode>(null);
  const [sheetWidth, setSheetWidth] = useState<string | null>(null);

  const { width: windowWidth } = useWindowDimensions();

  const openSheet = (content: ReactNode) => {
    setSheetContent(content);
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    if (sheetWidth) setSheetWidth(null);
    setIsSheetOpen(false);
    setSheetContent(null);
  };

  const openModal = (content: ReactNode, closable = true) => {
    setModalContent(content);
    setIsOpen(true);
    setIsClosable(closable);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const openDrawer = (content: ReactNode, width?: string) => {
    if (width) setWidth(width);
    setDrawerContent(content);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setDrawerContent(null);
    if (width) setWidth(null);
  };

  const calculatedSheetWidth = useMemo(() => {
    if (!isSheetOpen) return null;

    if (windowWidth <= 500) {
      return "95vw";
    } else if (windowWidth <= 650) {
      return "80vw";
    } else if (windowWidth <= 800) {
      return "75vw";
    } else if (windowWidth <= 1000) {
      return "65vw";
    } else if (windowWidth <= 1200) {
      return "60vw";
    } else {
      return "40vw";
    }
  }, [isSheetOpen, windowWidth]);

  useEffect(() => {
    setSheetWidth(calculatedSheetWidth);
  }, [calculatedSheetWidth]);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        openDrawer,
        closeDrawer,
        openSheet,
        closeSheet,
        setSheetWidth,
        isOpen,
      }}
    >
      {children}
     <Dialog
  open={isOpen}
  onOpenChange={(open) => {
    if (!open && !isClosable) return;
    if (!open) closeModal();
  }}
>
  {isOpen && (
    <DialogContent
      className="dark:bg-gray-800 bg-white text-black dark:text-white rounded-lg p-6 shadow-lg"
    >
      <DialogTitle asChild>
        <VisuallyHidden>Modal</VisuallyHidden>
      </DialogTitle>

      <div className="mt-4">{modalContent}</div>
    </DialogContent>
  )}
</Dialog>


      <Drawer direction="right" open={isDrawerOpen} onClose={closeDrawer}>
        <DrawerContent
          style={{
            width: width ? width : `calc(100vw - 70vw)`,
            left: "auto",
            top: "0",
            height: "100%",
            border: "none",
          }}
          className="h-screen top-0 right-0 left-auto mt-0 rounded-none bg-darkBg text-white p-2"
        >
          <div className="p-2">{drawerContent}</div>
        </DrawerContent>
      </Drawer>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent
          className="h-screen top-0 right-0 left-auto mt-0 rounded-none dark:bg-darkBg bg-white dark:text-white text-black p-2 sm:w-full"
          style={{
            width: sheetWidth ? sheetWidth : `calc(100vw - 70vw)`,
            border: "none",
          }}
        >
          <div className="p-2">{sheetContent}</div>
        </SheetContent>
      </Sheet>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
