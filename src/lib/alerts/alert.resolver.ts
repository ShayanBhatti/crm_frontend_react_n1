interface ApiResponse {
  success?: boolean;
  message?: string;
}

export const resolveApiAlert = (response: ApiResponse) => {
  if (!response) return null;

  if (response.success === true && response.message) {
    return {
      type: "success",
      message: response.message,
    };
  }

  if (response.success === false && response.message) {
    return {
      type: "error",
      message: response.message,
    };
  }

  return null;
};
