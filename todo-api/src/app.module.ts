import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://mtarczynski:SlNz5ZCNgCPBk1hW@cluster0.s8olgak.mongodb.net/todoDB?retryWrites=true&w=majority"),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
