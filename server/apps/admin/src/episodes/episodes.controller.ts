import { Episode } from './../../../../libs/db/src/models/episode.model';
import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Episode,
})
@Controller('episodes')
@ApiTags('视频分P')
export class EpisodesController {
  constructor (
    @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>
  ) {}
}
