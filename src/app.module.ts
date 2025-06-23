import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { StatementModule } from './statement/statement.module';
import { UserModule } from './user/user.module';
import { InsightsModule } from './insights/insights.module';
import { BillingModule } from './billing/billing.module';

@Module({
  imports: [AuthModule, StatementModule, UserModule, InsightsModule, BillingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
