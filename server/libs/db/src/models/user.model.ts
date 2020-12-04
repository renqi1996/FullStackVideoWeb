// 用户数据模型
import { modelOptions, prop } from "@typegoose/typegoose";
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
}) // 定义该模型的必要属性
export class User {
  @ApiProperty({ description: '用户名', example: 'user1' })
  @prop()
  userName: string;

  @ApiProperty({ description: '密码', example: 'pass1' })
  @prop()
  password: string;
}
