import React, { useEffect, useMemo } from 'react';
import { useRunner } from 'react-runner';
import { scope as defaultscope } from '../utils/Scope';

export interface CheckCodeRenderProps {
  code: string;
  returnError: (error: string | null) => void;
  scope?: Record<string, React.ComponentType | unknown>;
}

export default function CheckReactCode({
  code,
  scope,
  returnError = () => {},
}: CheckCodeRenderProps) {
  const finalScope = useMemo(
    () => ({ ...defaultscope, ...scope }),
    [defaultscope, scope]
  );
  const { element, error } = useRunner({
    code,
    scope: finalScope,
  });

  useEffect(() => {
    returnError(error);
    // console.log(errorMessage);
  }, [error, returnError]);

  return <div style={{ display: 'none' }}>{element}</div>;
}
