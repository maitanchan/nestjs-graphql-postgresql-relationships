import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from '../../employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
@ObjectType()
export class Project {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field(() => Int)
  @Column()
  code: number

  @Field(() => [Employee], { nullable: true })
  @OneToMany(() => Employee, employee => employee.project)
  employees: Employee[]

}
