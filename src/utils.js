export const textFormatter = (text, len) => text.splice(0, len);

export const uniqueId = () => `_${Math.random().toString(36).substr(2, 9)}`;
