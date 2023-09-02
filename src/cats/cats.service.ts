import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat as CatInterface } from './interfaces/cat.interface';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  create(catData: CatInterface) {
    const cat = new Cat();
    cat.name = catData.name;
    cat.age = catData.age;
    cat.breed = catData.breed;

    return this.catRepository.save(cat);
  }

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }
}