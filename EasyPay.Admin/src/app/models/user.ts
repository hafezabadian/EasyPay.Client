import { BankCard } from "./BankCard";
import { Photo } from "./Photo";


export interface User{
    id:string;
    name: string;
    userName: string;
    phoneNumber: string;
    address: string;
    gender: boolean;
    isActive:boolean;
    age: number;
    dateOfBirth: Date;
    lastActive: Date;
    city: string;
    photoUrl: string;
    photos?: Photo[];
    bankCards?: BankCard[];
}