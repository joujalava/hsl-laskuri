import type { DiscountGroup, TicketZone } from "./types";
import {
  singleTicketPrices,
  singleTicketDiscounts,
  dailyTicketPrices,
  dailyTicketAdditionalDayPrices,
  dailyTicketDiscounts,
  twoWeekTicketPrices,
  seasonTicketDiscounts,
  monthTicketPrices,
  tenMultiJourneyTicketsPrices,
  twentyMultiJourneyTicketsPrices,
} from "./constants";

export function singleTicketPrice(
  ticketZone: TicketZone,
  discountGroup: DiscountGroup,
  numOfTrips: number,
): number {
  const discount = singleTicketDiscounts[discountGroup] || 1;
  return numOfTrips * singleTicketPrices[ticketZone] * discount;
}

export function tenMultiJourneyTicketsPrice(
  ticketZone: TicketZone,
  numOfTrips: number,
): number {
  return tenMultiJourneyTicketsPrices[ticketZone] * Math.ceil(numOfTrips / 10);
}

export function twentyMultiJourneyTicketsPrice(
  ticketZone: TicketZone,
  numOfTrips: number,
): number {
  return (
    twentyMultiJourneyTicketsPrices[ticketZone] * Math.ceil(numOfTrips / 20)
  );
}

export function dailyTicketPrice(
  ticketZone: TicketZone,
  discountGroup: DiscountGroup,
  numOfDays: number,
): number {
  const discount = dailyTicketDiscounts[discountGroup] || 1;
  return (
    ((numOfDays - 1) * dailyTicketAdditionalDayPrices[ticketZone] +
      dailyTicketPrices[ticketZone]) *
    discount
  );
}

export function twoWeekTicketPrice(
  ticketZone: TicketZone,
  discountGroup: DiscountGroup,
  numOfDays: number,
): number {
  const discount = seasonTicketDiscounts[discountGroup] || 1;
  return Math.ceil(numOfDays / 14) * twoWeekTicketPrices[ticketZone] * discount;
}

export function monthTicketPrice(
  ticketZone: TicketZone,
  discountGroup: DiscountGroup,
): number {
  const discount = seasonTicketDiscounts[discountGroup] || 1;
  return monthTicketPrices[ticketZone] * discount;
}
