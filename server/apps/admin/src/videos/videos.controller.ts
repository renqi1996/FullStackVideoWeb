import { Video } from './../../../../libs/db/src/models/video.model';
import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Video
})
@ApiTags('视频')
@Controller('videos')
export class VideosController {
  constructor (
    @InjectModel(Video) private readonly model: ReturnModelType<typeof Video>
  ) {}
}
