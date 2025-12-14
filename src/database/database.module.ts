import { Module } from '@nestjs/common';
import { db } from './drizzle';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useValue: db,
    },
  ],
})
export class DatabaseModule {}
