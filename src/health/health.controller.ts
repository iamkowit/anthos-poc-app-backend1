import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  GRPCHealthIndicator,
} from '@nestjs/terminus';
import { GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly grpc: GRPCHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => {
        return this.grpc.checkService<GrpcOptions>(
          'calculator_service',
          'CalculatorService',
          {
            url: process.env.GRPC_URL,
          },
        );
      },
    ]);
  }
}
