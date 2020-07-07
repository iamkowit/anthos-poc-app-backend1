import { Module } from '@nestjs/common';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CALCULATOR_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: process.env.GRPC_URL,
          package: 'calculator',
          protoPath: join(__dirname, '../../api/proto/v1/calculator.proto'),
        },
      },
    ]),
  ],
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}
