type TError = {
  error: string;
  message: string;
  statusCode: number;
};

export type TErrorResponse = {
  response: {
    data: TError;
  };
};
