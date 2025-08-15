var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Job = /** @class */ (function () {
    function Job() {
    }
    Job.prototype.printType = function () {
        console.log(this.type);
    };
    return Job;
}());
var PartTimeJob = /** @class */ (function (_super) {
    __extends(PartTimeJob, _super);
    function PartTimeJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartTimeJob.prototype.calculateSalary = function () {
        return 30000 * this.workingHour;
    };
    return PartTimeJob;
}(Job));
var job = new PartTimeJob();
job.workingHour = 2;
console.log(job.calculateSalary());
