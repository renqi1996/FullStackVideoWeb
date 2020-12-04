// 视频数据模型
import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from "./episode.model";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
}) // 定义该模型的必要属性
export class Video {
  @ApiProperty({ description: '视频名称' })
  @prop()
  name: string;

  @ApiProperty({ description: '封面' })
  @prop()
  cover: string;

  @ApiProperty({ description: '分P' })
  @prop({ type: [Episode] }) // 与episode关联
  episodes:  Ref<Episode>[]
}
