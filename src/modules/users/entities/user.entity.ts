import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Persona } from "../../persona/entities/persona.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula: string;

  @Column()
  telefono: string;

 @OneToOne(()=>Persona, persona=>persona.user,{cascade:true})
   persona:Persona;
  
}
