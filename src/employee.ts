export interface Employee {
    id: string;
    name: string;
    division: string;
}


//Extending Interface
export interface Manager extends Employee {
    numberOfEmployees: number;
}