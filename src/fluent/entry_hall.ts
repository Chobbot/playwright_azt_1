import { Bathroom } from "./bathroom";
import { SecondFloor } from "./second_floor";

export class EntryHall {
    readonly visitorName: string;

    constructor (visitorName: string) {
        this.visitorName = visitorName
        console.log(`Návštěvník ${this.visitorName} vstoupil do vstupní haly`);
    }

    entryBathroom(): Bathroom {
        console.log(
            `Návštěvník ${this.visitorName}odchází ze vstupní haly na toalety.`
        );
            return new Bathroom(this.visitorName);
    }

    askReceptionistQuestion(question: string) {
        console.log(
            `${this.visitorName} se ptá recepční na otázku: "${question}".`
        );
        console.log('Recepční mlčí');
        return this;
    }
    
    async takeElevatorToSecondFloor(): Promise<SecondFloor> {
        console.log(`Uživatel ${this.visitorName} si volá výtah do 2. patra.`);
        const waitingForElevatorMs = 2000;
        await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
        console.log(`Výtah přijel do vstupní haly.`);
        console.log(`Výtah dorazil, uživatel ${this.visitorName} nastupuje.`);
        const elevatorRideMs = 2000;
        await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
        console.log(`Uživatel ${this.visitorName} vystupuje z výtahu v 2. patře.`);
        return new SecondFloor(this.visitorName);
  }
}