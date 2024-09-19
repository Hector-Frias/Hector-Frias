import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Fiesta',
    },
    {
      id: uuid(),
      brand: 'Peugeot',
      model: '207',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const cars = this.cars.find((car) => car.id == id);
    if (!cars) throw new NotFoundException('id not found');
    return cars;
  }

  createCars(createCarDto: CreateCarDto) {
    const carResult: Car = {
      id: '',
      brand: createCarDto.brand,
      model: createCarDto.model,
    };
    return this.cars.push(carResult);
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...carDb, ...updateCarDto, id };
      }
      return car;
    });
    return carDb;
  }

  delete(id) {
    const car = this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
