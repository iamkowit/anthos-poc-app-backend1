import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('fibo/:order')
  @ApiParam({ name: 'order', type: Number, example: 1 })
  @ApiOkResponse({ type: Number })
  getFibonacci(@Param('order', ParseIntPipe) order: number): Promise<number> {
    return this.calculatorService.fibonacci(order);
  }

  @Get('fibo/faster/:order')
  @ApiParam({ name: 'order', type: Number, example: 1 })
  @ApiOkResponse({ type: Number })
  getFibonacciFaster(
    @Param('order', ParseIntPipe) order: number,
  ): Promise<number> {
    return this.calculatorService.fibonacciFaster(order);
  }

  @Get('fibo/fastest/:order')
  @ApiParam({ name: 'order', type: Number, example: 1 })
  @ApiOkResponse({ type: Number })
  getFibonacciFastest(
    @Param('order', ParseIntPipe) order: number,
  ): Promise<number> {
    return this.calculatorService.fibonacciFastest(order);
  }
}
