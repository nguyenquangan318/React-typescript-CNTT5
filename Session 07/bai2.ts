abstract class Job {
    type: string;
    printType(): void {
        console.log(this.type);
    }
    abstract calculateSalary(): number
}

class PartTimeJob extends Job {
    workingHour: number
    constructor(workingHour: number) {
        super();
        this.workingHour = workingHour
    }
    calculateSalary(): number {
        return 30000 * this.workingHour

    }
}
const job = new PartTimeJob(2)
console.log(job.calculateSalary())