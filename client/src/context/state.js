import { cloneElement } from "react";
import { CartProvider, AuthProvider } from ".";

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

const AppContextProvider = ({ children }) => {
  return (
    <ProviderComposer contexts={[<CartProvider />, <AuthProvider />]} value="">
      {children}
    </ProviderComposer>
  );
};

export default AppContextProvider;
