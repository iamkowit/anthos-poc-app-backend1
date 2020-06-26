import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { calculator } from 'src/api/v1/rpc';
import { Observable } from 'rxjs';

interface CalculatorProxy {
  fibonacci(
    order: calculator.IFibonacciReq,
  ): Observable<calculator.IFibonacciRes>;
  fibonacciFaster(
    order: calculator.IFibonacciReq,
  ): Observable<calculator.IFibonacciRes>;
  fibonacciFastest(
    order: calculator.IFibonacciReq,
  ): Observable<calculator.IFibonacciRes>;
}

@Injectable()
export class CalculatorService implements OnModuleInit {
  private calculatorService: CalculatorProxy;

  constructor(@Inject('CALCULATOR_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.calculatorService = this.client.getService<CalculatorProxy>(
      'CalculatorService',
    );
  }

  public async fibonacci(order: number): Promise<number> {
    const res = this.calculatorService.fibonacci({ order });
    const { number } = await res.toPromise();
    return number;
  }

  public async fibonacciFaster(order: number): Promise<number> {
    const res = this.calculatorService.fibonacciFaster({ order });
    const { number } = await res.toPromise();
    return number;
  }

  public async fibonacciFastest(order: number): Promise<number> {
    const res = this.calculatorService.fibonacciFastest({ order });
    const { number } = await res.toPromise();
    return number;
  }
}
