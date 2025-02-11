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
//S: single responsability
//Responsabilidad unica
var Employee = /** @class */ (function () {
    function Employee(name) {
        this._name = name;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var TimeSheetReport = /** @class */ (function (_super) {
    __extends(TimeSheetReport, _super);
    function TimeSheetReport(name) {
        return _super.call(this, name) || this;
    }
    TimeSheetReport.prototype.print = function (e) {
        console.log(e.name);
    };
    return TimeSheetReport;
}(Employee));
var a = new TimeSheetReport("aaaaa");
a.print(new Employee("aaaa"));
