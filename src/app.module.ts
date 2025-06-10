import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { StatementModule } from './statement/statement.module';

@Module({
  imports: [AuthModule, StatementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
