import type { TicketDiscounts, TicketPrices } from "./types";

export const discountGroups = [
  "Adult",
  "Student",
  "Children 7-17 years",
  "Pensioner",
  "70+ passenger",
  "Person with reduced mobility",
] as const;

export const ticketZones = ["AB, BC, CD", "ABC, BCD", "ABCD"] as const;

export const singleTicketPrices: TicketPrices = {
  "AB, BC, CD": 3.2,
  "ABC, BCD": 4.4,
  ABCD: 4.8,
} as const;

export const tenMultiJourneyTicketsPrices: TicketPrices = {
  "AB, BC, CD": 28.8,
  "ABC, BCD": 39.6,
  ABCD: 43.2,
} as const;

export const twentyMultiJourneyTicketsPrices: TicketPrices = {
  "AB, BC, CD": 54.4,
  "ABC, BCD": 74.8,
  ABCD: 81.6,
} as const;

export const dailyTicketPrices: TicketPrices = {
  "AB, BC, CD": 10,
  "ABC, BCD": 12,
  ABCD: 13,
} as const;

export const dailyTicketAdditionalDayPrices: TicketPrices = {
  "AB, BC, CD": 5,
  "ABC, BCD": 6,
  ABCD: 6.5,
} as const;

export const twoWeekTicketPrices: TicketPrices = {
  "AB, BC, CD": 54.1,
  "ABC, BCD": 80.9,
  ABCD: 89.1,
} as const;

export const monthTicketPrices: TicketPrices = {
  "AB, BC, CD": 72.1,
  "ABC, BCD": 107.7,
  ABCD: 118.8,
} as const;

export const singleTicketDiscounts: TicketDiscounts = {
  "Children 7-17 years": 0.5,
  "Person with reduced mobility": 0.5,
  Pensioner: 0.5,
} as const;

export const dailyTicketDiscounts: TicketDiscounts = {
  "Children 7-17 years": 0.5,
} as const;

export const seasonTicketDiscounts: TicketDiscounts = {
  "Children 7-17 years": 0.5,
  Pensioner: 0.5,
  "Person with reduced mobility": 0.5,
  Student: 0.4,
  "70+ passenger": 0.4,
} as const;
