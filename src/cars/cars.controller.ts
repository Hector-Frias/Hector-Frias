import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findById(id);
  }

  @Post()
  createCars(@Body() createCarDto: CreateCarDto) {
    this.carsService.createCars(createCarDto);
  }

  @Patch(':id')
  updateCars(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return updateCarDto;
  }

  @Delete(':id')
  deleteCarse(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.carsService.delete(id);
  }
}
