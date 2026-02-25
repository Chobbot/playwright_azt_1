import { EntryHall } from "./entry_hall";

export class Bathroom {
    readonly visitorName: string;

    constructor (visitorName: string) {
        this.visitorName = visitorName
        console.log(`Návštěvník ${this.visitorName} vstoupil na toalety`);
    }

    washHands() {
        console.log(
            `Návštěvník ${this.visitorName} si umyl/a ruce`
        )
        return this
    }

    returnToEntryHall() {
        console.log(
            `Návštěvník ${this.visitorName} odchází z toalet do vstupní haly.`
        );
        return new EntryHall(this.visitorName);
    }
}