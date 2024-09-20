import { createContext, ReactNode, FC, useMemo } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Icon } from "@iconify/react";
import { EToast } from "@/types";

const headerClass = {
  [EToast.SUCCESS]: "text-[#1FA591]",
  [EToast.ERROR]: "text-[#FF4B4B]",
  [EToast.INFO]: "text-[#3387EA]",
  [EToast.WARNING]: "text-[#F5AF03]",
};

const icons = {
  [EToast.SUCCESS]: "icon-park-solid:check-one",
  [EToast.ERROR]: "fluent-mdl2:status-error-full",
  [EToast.INFO]: "ic:round-info",
  [EToast.WARNING]: "fluent:warning-28-filled",
};

interface ToastContextProps {
  showToast: (message: string, severity: EToast, title: string) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined
);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const showToast = (message: string, severity: EToast, title: string) => {
    toast(
      <div>
        <h3 className={`${headerClass[severity]} `}>{title}</h3>
        <p>{message}</p>
      </div>,
      {
        type: severity,
        className: "bg-white",
        icon: (
          <Icon
            icon={icons[severity]}
            className={`${headerClass[severity]} text-2xl`}
          />
        ),
      }
    );
  };

  const contextValue = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      <ToastContainer
        toastClassName={() =>
          "flex p-0 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() =>
          "text-sm font-white font-med flex p-3 items-start border-left"
        }
        position="top-right"
        autoClose={3000}
        hideProgressBar
      />
      {children}
    </ToastContext.Provider>
  );
};
