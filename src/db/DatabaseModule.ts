import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

export const DB_CONNECTION_SERVICE = 'MONGO_CONNECTION';

@Module({
  providers: [
    {
      provide: DB_CONNECTION_SERVICE,
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect(process.env.MONGO_URI, {});

          return client.db(process.env.MONGO_DB_NAME);
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: [DB_CONNECTION_SERVICE],
})
export class DatabaseModule {}
