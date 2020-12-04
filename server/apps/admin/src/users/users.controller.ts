import { User } from './../../../../libs/db/src/models/user.model';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from  'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger'

@Crud({
  model: User
}) // 相当于d.ts声明
@Controller('users')
@ApiTags('用户') // 创建分组
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}
}
