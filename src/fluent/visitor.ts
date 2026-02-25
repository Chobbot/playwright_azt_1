import { EntryHall } from "./entry_hall.ts";

new EntryHall("Jan Novák")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Jak se máte?")
  .entryBathroom()
  .washHands()
  .washHands()
  .returnToEntryHall();

async function main() {
  const marie = new EntryHall("Marie Dlouhá");

  await marie
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(2))
    .then((secondFloor) => secondFloor.returnToEntryHallByElevator())
    .then((entryHall) => entryHall.askReceptionistQuestion("Co je to 'then'?"));
}

main();
