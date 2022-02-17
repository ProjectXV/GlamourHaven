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

const ContextProvider = ({ children }) => {
  return (
    <ProviderComposer contexts={[<CartProvider />, <AuthProvider />]}>
      {children}
    </ProviderComposer>
  );
};

export default ContextProvider;
