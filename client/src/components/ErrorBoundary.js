import { Center } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Center>
          <Logo />
          <h1>Something went wrong.</h1>
          <p>
            Go back to <a href="/">home page</a>
          </p>
        </Center>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
