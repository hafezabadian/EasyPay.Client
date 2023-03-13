import { bankcard } from "./bankcard";
import { photo } from "./photo";

export interface user{
    id:string;
    name: string;
    username: string;
    phonenumber: string;
    address: string;
    gender: boolean;
    isactive:boolean;
    age: number;
    birthday: Date;
    lastactive: Date;
    city: string;
    photourl: string;
    photos?: photo[];
    bankcards?: bankcard[];
}