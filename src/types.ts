import type { discountGroups, ticketZones } from "./constants";

export type DiscountGroup = (typeof discountGroups)[number];

export type TicketDiscounts = Partial<Record<DiscountGroup, number>>;

export type TicketZone = (typeof ticketZones)[number];

export type TicketPrices = Record<TicketZone, number>;
