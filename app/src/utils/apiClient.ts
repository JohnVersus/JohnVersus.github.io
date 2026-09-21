export const clientApiGet = async (endpoint: string, params: Record<string, unknown>) => {
  try {
    const base = process.env.NEXT_PUBLIC_URL || '';
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.set(key, String(value));
      }
    });

    const response = await fetch(`${base}/api/${endpoint}?${queryParams.toString()}`);
    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      return { error: errorBody.error || response.statusText };
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'Unknown error' };
  }
};
