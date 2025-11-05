<template>
  <div class="mbs18">
    <Select
      name="ticket-select"
      default-option-label="Select the ticket zone"
      label-copy="Select ticket zone"
      unique-id="ticket-select"
      :options="ticketSelectOptions"
      @selected="(val) => (ticketZone = val)"
    />
  </div>
  <NumberInput
    id="trips-input"
    v-model="numOfTrips"
    label="Number of trips"
    :min="0"
  />
  <NumberInput
    id="days-input"
    v-model="numOfDays"
    label="Number of days"
    :min="1"
    :max="30"
  />
  <div class="mbs18">
    <Select
      name="discount-select"
      label-copy="Discount group"
      unique-id="discount-select"
      :options="discountGroupSelectOptions"
      @selected="(val) => (discountGroup = val)"
    />
  </div>
  <div v-if="lowestCostTickets" class="mbs18">
    <h4>Results</h4>
    <p>
      You should buy the following ticket(s): {{ lowestCostTickets.number }} x
      {{ lowestCostTickets.ticket }}. In total the tickets cost:
      {{ lowestCostTickets.cost }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Select } from "agnostic-vue";
import NumberInput from "./NumberInput.vue";
import type { DiscountGroup, TicketZone } from "../types";
import { discountGroups, ticketZones } from "../constants";
import {
  singleTicketPrice,
  dailyTicketPrice,
  twoWeekTicketPrice,
  monthTicketPrice,
  tenMultiJourneyTicketsPrice,
  twentyMultiJourneyTicketsPrice,
} from "../prices";

const discountGroupSelectOptions = discountGroups.map((discountGroup) => ({
  value: discountGroup,
  label: discountGroup,
}));

const ticketSelectOptions = ticketZones.map((zone) => ({
  value: zone,
  label: zone,
}));

const ticketZone = ref<TicketZone | null>(null);
const discountGroup = ref<DiscountGroup | null>(null);
const numOfTrips = ref(0);
const numOfDays = ref(1);

const numberFormatter = Intl.NumberFormat("fi-FI", {
  style: "currency",
  currency: "EUR",
});

const lowestCostTickets = computed(() => {
  const localTicketZone = ticketZone.value;
  if (
    discountGroup.value != null &&
    localTicketZone != null &&
    numOfTrips.value > 0 &&
    numOfDays.value > 0 &&
    numOfDays.value < 31
  ) {
    let ticketName = "single ticket";
    let numOfTickets = numOfTrips.value;

    let minCost = singleTicketPrice(
      localTicketZone,
      discountGroup.value,
      numOfTrips.value,
    );

    if (numOfTrips.value <= 10) {
      const cost = tenMultiJourneyTicketsPrice(
        localTicketZone,
        numOfTrips.value,
      );
      if (minCost > cost) {
        ticketName = "10-journey ticket";
        numOfTickets = 1;
        minCost = cost;
      }
    } else {
      const cost = twentyMultiJourneyTicketsPrice(
        localTicketZone,
        numOfTrips.value,
      );
      if (minCost > cost) {
        ticketName = "20-journey ticket";
        numOfTickets = Math.ceil(numOfTrips.value / 20);
        minCost = cost;
      }
    }

    if (numOfDays.value < 14) {
      const cost = dailyTicketPrice(
        localTicketZone,
        discountGroup.value,
        numOfDays.value,
      );
      if (minCost > cost) {
        ticketName = "daily ticket";
        numOfTickets = numOfDays.value;
        minCost = cost;
      }
    }

    if (numOfDays.value < 15) {
      const cost = twoWeekTicketPrice(
        localTicketZone,
        discountGroup.value,
        numOfDays.value,
      );
      if (minCost > cost) {
        ticketName = "two week ticket";
        numOfTickets = 1;
        minCost = cost;
      }
    }

    const cost = monthTicketPrice(localTicketZone, discountGroup.value);
    if (minCost > cost) {
      ticketName = "month ticket";
      numOfTickets = 1;
      minCost = cost;
    }

    return {
      ticket: ticketName,
      number: numOfTickets,
      cost: numberFormatter.format(minCost),
    };
  }
  return null;
});
</script>
