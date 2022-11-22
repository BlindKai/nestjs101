import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from '@modules/orders/orders.module';
import { CustomersModule } from '@modules/customers/customers.module';
import { ShippingsModule } from '@modules/shippings/shippings.module';
import { LocationsModule } from '@modules/locations/locations.module';
import { WarehousesModule } from '@modules/warehouses/warehouses.module';
import { CommonModule } from '@modules/common/common.module';

@Module({
  imports: [
    CommonModule,
    OrdersModule,
    CustomersModule,
    ShippingsModule,
    LocationsModule,
    WarehousesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
