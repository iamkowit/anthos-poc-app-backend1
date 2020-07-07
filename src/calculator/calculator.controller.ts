import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('fibo/:order')
  getFibonacci(@Param('order', ParseIntPipe) order: number): Promise<number> {
    return this.calculatorService.fibonacci(order);
  }

  @Get('fibo/faster/:order')
  getFibonacciFaster(
    @Param('order', ParseIntPipe) order: number,
  ): Promise<number> {
    return this.calculatorService.fibonacciFaster(order);
  }

  @Get('fibo/fastest/:order')
  getFibonacciFastest(
    @Param('order', ParseIntPipe) order: number,
  ): Promise<number> {
    return this.calculatorService.fibonacciFastest(order);
  }
}
