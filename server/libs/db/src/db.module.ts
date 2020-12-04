import { Episode } from './models/episode.model';
import { Video } from './models/video.model';
import { User } from './models/user.model';
import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';

const models = TypegooseModule.forFeature([User, Video, Episode]);

@Global() // 标记为全局
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/video', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
