export interface Vehicle {
    name?: string;
    plate?: string;
    color?: string;
    date: {
        day: string;
        month: string;
        year: string;
        hour: string;
        minute: string;
        fullDate: Date;
    }
}