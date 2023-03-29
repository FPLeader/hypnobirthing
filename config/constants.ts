const DEV_MODE = true;
export const API_BASE = DEV_MODE === true ? 'http://localhost:5000/api/v1' : 'http://167.172.148.107:5000/api/v1';
export const IMAGE_BASE = DEV_MODE === true ? 'http://localhost:5000/images/' : 'http://167.172.148.107:5000/images/';