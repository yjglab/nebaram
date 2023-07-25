"use client";

import React, { FC, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface Props {
  children?: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  const queryClient = useMemo(() => new QueryClient(), []);

  // 자식 컴포넌트에 react query 사용 적용
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};

export default Providers;
