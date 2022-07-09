const getErrorMessageUtils = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

const reportErrorUtils = ({ message, cb }: { message: string; cb?: ((m: string) => void) | undefined | null }) => {
  if (cb) {
    cb(message);
  }
  console.log(message);
};

export { getErrorMessageUtils, reportErrorUtils };
