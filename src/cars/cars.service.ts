import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Fiesta',
    },
    {
      id: 1,
      brand: 'Peugeot',
      model: '207',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {
    const cars = this.cars.find((car) => car.id == id);
    if (!cars) throw new NotFoundException('id not found');
    return cars;
  }
}
