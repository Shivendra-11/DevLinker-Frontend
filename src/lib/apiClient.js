export const DEFAULT_API_URL = "http://localhost:4000/api/v1";

function getToken() {
  const raw =
    localStorage.getItem("token") ||
    localStorage.getItem("accessToken") ||
    localStorage.getItem("authToken") ||
    "";

  const token = String(raw || "").trim();
  if (!token) return "";
  if (token === "undefined" || token === "null") return "";
  return token;
}

function getApiBaseUrl() {
  return (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/$/, "");
}

export function getBackendOrigin() {
  const base = getApiBaseUrl();
  return base.replace(/\/api\/v1\/?$/i, "");
}

async function parseErrorResponse(response) {
  // Backend sometimes returns plain-text like: "ERROR : message"
  const text = await response.text();

  try {
    const json = JSON.parse(text);
    if (json?.message) return String(json.message);
  } catch {
    // ignore
  }

  return text || `Request failed with status ${response.status}`;
}

export async function apiRequest(path, options = {}) {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;

  const token = getToken();

  const isFormData = Boolean(options?.isFormData);
  const headers = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  if (!isFormData) {
    headers["Content-Type"] = headers["Content-Type"] || "application/json";
  }

  const response = await fetch(url, {
    credentials: "include",
    ...options,
    headers,
  });

  if (!response.ok) {
    const message = await parseErrorResponse(response);
    throw new Error(message);
  }

  // Try json first, fall back to text
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
