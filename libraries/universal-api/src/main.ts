import { NestFactory } from '@nestjs/core';
import { UniversalApiModule } from './app.module';
let mainModule;

async function bootstrap() {
  // const app = await NestFactory.create(UniversalApiModule);
  // await app.listen(3000);

  const app = await NestFactory.createApplicationContext(UniversalApiModule);
  mainModule = app.get(UniversalApiModule);
  await app.close();
}
bootstrap();

exports = { mainModule };
