import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseStringify(data: any) {
    // If data is undefined, return an empty object (or adjust as needed)
    if (data === undefined) {
        return {};
    }

    if (typeof data !== "string") {
        return data;
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("JSON parsing error:", error);
        return {};
    }
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date | string, timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
    timeZone: timeZone, // use the provided timezone= {
  };// weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
  const dateOptions: Intl.DateTimeFormatOptions = {g., '25')
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
    timeZone: timeZone, // use the provided timezonehour clock (false),
  };timeZone: timeZone, // use the provided timezone
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')ns = {
    minute: "numeric", // numeric minute (e.g., '30')g., 'Mon')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
    timeZone: timeZone, // use the provided timezone., 'Oct')
  };day: "2-digit", // numeric day of the month (e.g., '25')
    timeZone: timeZone, // use the provided timezone
  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions: Intl.DateTimeFormatOptions = {
  );month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
  const formattedDateDay: string = new Date(dateString).toLocaleString(
    "en-US",: timeZone, // use the provided timezone
    dateDayOptions
  );
  const timeOptions: Intl.DateTimeFormatOptions = {
  const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US","numeric", // numeric minute (e.g., '30')
    dateOptionse, // use 12-hour clock (true) or 24-hour clock (false)
  );timeZone: timeZone, // use the provided timezone
  };
  const formattedTime: string = new Date(dateString).toLocaleString(
    "en-US",attedDateTime: string = new Date(dateString).toLocaleString(
    timeOptions
  );dateTimeOptions
  );
  return {
    dateTime: formattedDateTime, = new Date(dateString).toLocaleString(
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US",
export function encryptKey(passkey: string) {
  return btoa(passkey);
}
  const formattedTime: string = new Date(dateString).toLocaleString(
export function decryptKey(passkey: string) {
  return atob(passkey);
} );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

export function encryptKey(passkey: string) {
  return btoa(passkey);
}

export function decryptKey(passkey: string) {
  return atob(passkey);
}
