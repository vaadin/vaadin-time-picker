export interface TimePickerTime {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}

export interface TimePickerI18n {
    parseTime: (time: string) => TimePickerTime | undefined;
    formatTime: (time: TimePickerTime) => string;
    clear: string;
    selector: string;
}
