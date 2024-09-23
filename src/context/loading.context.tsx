import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LoaderCircle } from "lucide-react";

interface LoadingContextProps {
  toggleLoading: VoidFunction;
}

export const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined
);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading((currentValue) => !currentValue);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [isLoading]);

  const contextValue = useMemo(() => ({ toggleLoading }), [toggleLoading]);

  return (
    <LoadingContext.Provider value={contextValue}>
      {isLoading && (
        <div className="fixed z-50 bg-black bg-opacity-60 inset-0 flex justify-center items-center">
          <LoaderCircle className="animate-spin h-14 w-14 mx-auto" />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};
